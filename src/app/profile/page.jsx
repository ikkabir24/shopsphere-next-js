import { cookies } from "next/headers";
import Link from "next/link";

export default async function ProfilePage() {
    const cookieStore = await cookies();
    const email = cookieStore.get("shopsphere_email")?.value || "Unknown";

    return (
        <main className="min-h-screen bg-white">
            <section className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Profile (Protected)
                </h1>
                <p className="mt-2 text-gray-600">
                    You can only see this page after login.
                </p>

                <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <p className="text-sm text-gray-700">
                        Logged in as: <span className="font-semibold">{email}</span>
                    </p>
                </div>

                <div className="mt-6 flex gap-3">
                    <Link
                        href="/"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-semibold transition"
                    >
                        Go to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
