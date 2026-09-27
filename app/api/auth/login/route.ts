import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { email, password, adminSecret } = await request.json();

    const domain = request.headers.get("host") || "";

    // ========== ADMIN LOGIN (using secret key) ==========
    if (adminSecret) {
      // Validate input
      if (!adminSecret || typeof adminSecret !== "string") {
        return NextResponse.json(
          { message: "Admin secret is required" },
          { status: 400 }
        );
      }

      // Get the admin secret from environment variables
      const correctSecret = process.env.ADMIN_SECRET;

      if (!correctSecret) {
        console.error("ADMIN_SECRET not configured");
        return NextResponse.json(
          { message: "Server configuration error" },
          { status: 500 }
        );
      }

      // Verify the admin secret
      if (adminSecret !== correctSecret) {
        return NextResponse.json(
          { message: "Invalid admin secret" },
          { status: 401 }
        );
      }

      // Set the auth token cookie for admin
      const cookieStore = await cookies();
      cookieStore.set("auth_token", adminSecret, {
        httpOnly: true,
        secure: process.env.ENVIRONMENT === "prod",
        sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
        domain: process.env.ENVIRONMENT === "prod" ? domain?.split(":")[0] : "localhost",
        maxAge: 30 * 60,
        path: "/",
      });

      cookieStore.set("user_role", "admin", {
        httpOnly: true,
        secure: process.env.ENVIRONMENT === "prod",
        sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
        domain: process.env.ENVIRONMENT === "prod" ? domain?.split(":")[0] : "localhost",
        maxAge: 30 * 60,
        path: "/",
      });

      return NextResponse.json(
        { 
          message: "Login successful", 
          role: "admin",
          redirectTo: "/"
        }, 
        { status: 200 }
      );
    }

    // ========== SUB ADMIN LOGIN (using email & password) ==========
    if (email && password) {
      // Validate input
      if (!email || typeof email !== "string") {
        return NextResponse.json(
          { message: "Email is required" },
          { status: 400 }
        );
      }

      if (!password || typeof password !== "string") {
        return NextResponse.json(
          { message: "Password is required" },
          { status: 400 }
        );
      }

      // Check if super admin (from env)
      const superAdminEmail = process.env.ADMIN_EMAIL;
      const superAdminPassword = process.env.ADMIN_PASSWORD;

      if (superAdminEmail && email === superAdminEmail && password === superAdminPassword) {
        const cookieStore = await cookies();
        cookieStore.set("auth_token", process.env.ADMIN_SECRET || "super-admin-secret", {
          httpOnly: true,
          secure: process.env.ENVIRONMENT === "prod",
          sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
          domain: process.env.ENVIRONMENT === "prod" ? domain?.split(":")[0] : "localhost",
          maxAge: 30 * 60,
          path: "/",
        });

        cookieStore.set("user_role", "super_admin", {
          httpOnly: true,
          secure: process.env.ENVIRONMENT === "prod",
          sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
          domain: process.env.ENVIRONMENT === "prod" ? domain?.split(":")[0] : "localhost",
          maxAge: 30 * 60,
          path: "/",
        });

        return NextResponse.json(
          { 
            message: "Login successful", 
            role: "super_admin",
            redirectTo: "/"
          }, 
          { status: 200 }
        );
      }

      // Check for sub admin in database
      try {
        const subAdmin = await prisma.subAdmin.findUnique({
          where: { email },
          include: {
            permissions: {
              include: {
                permission: true
              }
            }
          }
        });

        if (!subAdmin) {
          return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
          );
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, subAdmin.password);

        if (!isValidPassword) {
          return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
          );
        }

        // Check if sub admin is active
        if (subAdmin.status !== "active") {
          return NextResponse.json(
            { message: "Your account is not active. Please contact administrator." },
            { status: 403 }
          );
        }

        // Update last login
        await prisma.subAdmin.update({
          where: { id: subAdmin.id },
          data: { lastLogin: new Date() }
        });

        // Set cookies for sub admin
        const cookieStore = await cookies();
        cookieStore.set("auth_token", process.env.ADMIN_SECRET || "sub-admin-secret", {
          httpOnly: true,
          secure: process.env.ENVIRONMENT === "prod",
          sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
          domain: process.env.ENVIRONMENT === "prod" ? domain?.split(":")[0] : "localhost",
          maxAge: 30 * 60,
          path: "/",
        });

        cookieStore.set("user_role", "sub_admin", {
          httpOnly: true,
          secure: process.env.ENVIRONMENT === "prod",
          sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
          domain: process.env.ENVIRONMENT === "prod" ? domain?.split(":")[0] : "localhost",
          maxAge: 30 * 60,
          path: "/",
        });

        cookieStore.set("user_id", subAdmin.id.toString(), {
          httpOnly: true,
          secure: process.env.ENVIRONMENT === "prod",
          sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
          domain: process.env.ENVIRONMENT === "prod" ? domain?.split(":")[0] : "localhost",
          maxAge: 30 * 60,
          path: "/",
        });

        cookieStore.set("user_name", subAdmin.name, {
          httpOnly: true,
          secure: process.env.ENVIRONMENT === "prod",
          sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
          domain: process.env.ENVIRONMENT === "prod" ? domain?.split(":")[0] : "localhost",
          maxAge: 30 * 60,
          path: "/",
        });

        return NextResponse.json(
          { 
            message: "Login successful", 
            role: "sub_admin",
            redirectTo: "/",
            user: {
              id: subAdmin.id,
              name: subAdmin.name,
              email: subAdmin.email,
            }
          }, 
          { status: 200 }
        );
      } catch (dbError) {
        console.error("Database error:", dbError);
        return NextResponse.json(
          { message: "Database connection error" },
          { status: 500 }
        );
      }
    }

    // If neither adminSecret nor email/password provided
    return NextResponse.json(
      { message: "Admin secret or email/password is required" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "An error occurred during login" },
      { status: 500 }
    );
  }
}