import { NextResponse, type NextRequest } from "next/server";

const SECRET_KEY = process.env.ADMIN_SECRET;

export default async function Proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip middleware for auth and API routes
  if (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/api/auth") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get("auth_token")?.value;
  const userRole = req.cookies.get("user_role")?.value; // 'admin' or 'sub_admin'
  const userId = req.cookies.get("user_id")?.value;

  if (!token) {
    return NextResponse.redirect(new URL(`/auth/login`, req.url));
  }

  try {
    // Check if token is valid
    if (token !== SECRET_KEY && !userRole) {
      throw new Error("Unauthorized");
    }

    // If sub admin, check permissions
    if (userRole === "sub_admin" && userId) {
      const hasPermission = await checkSubAdminPermission(userId, pathname);
      
      if (!hasPermission) {
        return NextResponse.redirect(new URL(`/unauthorized`, req.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Unauthorized access:", err);
    const response = NextResponse.redirect(new URL(`/auth/login`, req.url));
    response.cookies.delete("auth_token");
    response.cookies.delete("user_role");
    response.cookies.delete("user_id");
    return response;
  }
}

// Check if sub admin has permission to access the route
async function checkSubAdminPermission(userId: string, pathname: string): Promise<boolean> {
  try {
    // Map route to permission
    const routePermissionMap: { [key: string]: string } = {
      '/': 'view_dashboard',
      '/users': 'view_users',
      '/transactions': 'view_transactions',
      '/vouchers': 'view_vouchers',
      '/images': 'view_images',
      '/support': 'view_support',
      '/affiliates': 'view_affiliates',
      '/affiliates/commissions': 'view_commissions',
      '/affiliates/referrals': 'view_affiliates',
      '/sub-admins': 'view_subadmins',
    };

    // Find which permission is needed for this route
    let requiredPermission = null;
    for (const [route, permission] of Object.entries(routePermissionMap)) {
      if (pathname.startsWith(route)) {
        requiredPermission = permission;
        break;
      }
    }

    // If no permission required, allow access
    if (!requiredPermission) {
      return true;
    }

    // Check permission from API
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/admin/check-permission`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: parseInt(userId),
        permission: requiredPermission,
      }),
    });

    const data = await response.json();
    return data.hasPermission || false;
  } catch (error) {
    console.error("Error checking permission:", error);
    return false;
  }
}

export const config = {
  matcher: [
    "/",
    "/users",
    "/users/:path*",
    "/vouchers",
    "/vouchers/:path*",
    "/transactions",
    "/transactions/:path*",
    "/images",
    "/images/:path*",
    "/support",
    "/support/:path*",
    "/affiliates",
    "/affiliates/:path*",
    "/sub-admins",
    "/sub-admins/:path*",
  ],
};