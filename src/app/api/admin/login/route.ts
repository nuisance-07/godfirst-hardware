import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123"; // Fallback for dev

    if (password === adminPassword) {
      // Create a response and set the auth cookie
      const response = NextResponse.json({ success: true });
      response.cookies.set("admin-token", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      });

      return response;
    }

    return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
