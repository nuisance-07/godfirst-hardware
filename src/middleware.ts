import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect /admin routes but allow /admin/login
  if (path.startsWith("/admin") && path !== "/admin/login") {
    const token = request.cookies.get("admin-token")?.value;

    if (!token || token !== "authenticated") {
      // Redirect to login if no token
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Prevent logged in users from seeing the login page
  if (path === "/admin/login") {
    const token = request.cookies.get("admin-token")?.value;
    if (token === "authenticated") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
