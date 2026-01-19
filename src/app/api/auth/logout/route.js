import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.set("shopsphere_auth", "", { path: "/", maxAge: 0 });
  cookieStore.set("shopsphere_email", "", { path: "/", maxAge: 0 });
  cookieStore.set("shopsphere_auth_ui", "", { path: "/", maxAge: 0 });

  return Response.json({ message: "Logged out" });
}
