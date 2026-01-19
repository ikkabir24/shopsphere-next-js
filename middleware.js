import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Protect only /profile (main requirement demonstration)
    if (pathname.startsWith("/profile")) {
        const authCookie = request.cookies.get("shopsphere_auth")?.value;

        if (authCookie !== "true") {
            const loginUrl = new URL("/login", request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:path*"],
};
