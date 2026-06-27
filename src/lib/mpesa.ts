/**
 * M-Pesa Daraja API utility functions
 * Handles OAuth token generation, STK Push initiation, and phone number formatting.
 */

const SANDBOX_BASE_URL = "https://sandbox.safaricom.co.ke";
const PRODUCTION_BASE_URL = "https://api.safaricom.co.ke";

function getBaseUrl(): string {
  return process.env.MPESA_ENVIRONMENT === "production"
    ? PRODUCTION_BASE_URL
    : SANDBOX_BASE_URL;
}

// Simple in-memory token cache
let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Generate an OAuth access token from Daraja API.
 * Tokens are cached for ~55 minutes (they expire after 1 hour).
 */
export async function getAccessToken(): Promise<string> {
  // Return cached token if still valid (5 min buffer)
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error("M-Pesa consumer key and secret are required");
  }

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

  const response = await fetch(
    `${getBaseUrl()}/oauth/v1/generate?grant_type=client_credentials`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get M-Pesa access token: ${errorText}`);
  }

  const data = await response.json();

  // Cache token for 55 minutes
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + 55 * 60 * 1000,
  };

  return data.access_token;
}

/**
 * Generate the password for STK Push.
 * Password = Base64(Shortcode + Passkey + Timestamp)
 */
function generatePassword(timestamp: string): string {
  const shortcode = process.env.MPESA_SHORTCODE || "174379";
  const passkey = process.env.MPESA_PASSKEY || "";
  return Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");
}

/**
 * Generate timestamp in the format YYYYMMDDHHMMSS
 */
function generateTimestamp(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

/**
 * Format a Kenyan phone number to the international format 254XXXXXXXXX.
 * Accepts: 0712345678, 254712345678, +254712345678, 712345678
 */
export function formatPhoneNumber(phone: string): string {
  // Remove spaces, dashes, and plus signs
  let cleaned = phone.replace(/[\s\-\+]/g, "");

  // Handle different formats
  if (cleaned.startsWith("0") && cleaned.length === 10) {
    // 0712345678 → 254712345678
    cleaned = "254" + cleaned.substring(1);
  } else if (cleaned.startsWith("7") && cleaned.length === 9) {
    // 712345678 → 254712345678
    cleaned = "254" + cleaned;
  } else if (cleaned.startsWith("254") && cleaned.length === 12) {
    // Already in correct format
  } else if (cleaned.startsWith("1") && cleaned.length === 9) {
    // 1XXXXXXXX → 2541XXXXXXXX
    cleaned = "254" + cleaned;
  } else {
    throw new Error(
      `Invalid phone number format: ${phone}. Use format like 0712345678 or 254712345678`
    );
  }

  return cleaned;
}

/**
 * Initiate an M-Pesa STK Push (Lipa Na M-Pesa Online) request.
 */
export async function initiateSTKPush({
  phone,
  amount,
  accountReference,
  transactionDesc,
}: {
  phone: string;
  amount: number;
  accountReference: string;
  transactionDesc: string;
}): Promise<{
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResponseCode: string;
  ResponseDescription: string;
  CustomerMessage: string;
}> {
  const accessToken = await getAccessToken();
  const timestamp = generateTimestamp();
  const password = generatePassword(timestamp);
  const shortcode = process.env.MPESA_SHORTCODE || "174379";
  const callbackUrl =
    process.env.MPESA_CALLBACK_URL ||
    "https://godfirst-hardware.vercel.app/api/mpesa/callback";

  const formattedPhone = formatPhoneNumber(phone);

  const requestBody = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: Math.round(amount), // M-Pesa requires whole numbers
    PartyA: formattedPhone,
    PartyB: shortcode,
    PhoneNumber: formattedPhone,
    CallBackURL: callbackUrl,
    AccountReference: accountReference.substring(0, 12), // Max 12 chars
    TransactionDesc: transactionDesc.substring(0, 13), // Max 13 chars
  };

  const response = await fetch(
    `${getBaseUrl()}/mpesa/stkpush/v1/processrequest`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`STK Push failed: ${errorText}`);
  }

  return response.json();
}
