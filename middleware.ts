import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const path = req.nextUrl.pathname

      // Public routes accessible to everyone
      if (path === "/" || path === "/login" || path === "/register") {
        return true
      }

      // Protected routes require authentication
      return !!token
    },
  },
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/blog/:path*",
    "/forum/:path*",
    "/pricing",
    "/api/protected/:path*",
  ],
}