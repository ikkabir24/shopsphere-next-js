import { cookies } from "next/headers";

const HARD_EMAIL = "demo@shopsphere.com";
const HARD_PASSWORD = "123456";

async function safeJson(request) {
  try {
    const text = await request.text();
    if (!text) return null;
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function POST(request) {
  const body = await safeJson(request);

  const email = String(body?.email || "").trim();
  const password = String(body?.password || "").trim();

  if (!email || !password) {
    return Response.json({ message: "Email and password required" }, { status: 400 });
  }

  if (email !== HARD_EMAIL || password !== HARD_PASSWORD) {
    return Response.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const cookieStore = await cookies();

  // Server-only auth cookie (route protection)
  cookieStore.set("shopsphere_auth", "true", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  // Client-readable UI cookie (navbar show/hide logout)
  cookieStore.set("shopsphere_auth_ui", "true", {
    httpOnly: false,
    sameSite: "lax",
    path: "/",
  });

  // Optional email (server-only)
  cookieStore.set("shopsphere_email", email, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return Response.json({ message: "Login successful" });
}
