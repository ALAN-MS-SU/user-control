import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  const session: RequestCookie = req.cookies.get("next-auth.session-token");
  if (!session) {
    return NextResponse.redirect(new URL("/login/login", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/"],
};
