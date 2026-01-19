"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("demo@shopsphere.com");
    const [password, setPassword] = useState("123456");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });


            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.message || "Login failed");
            }

            // On successful login, redirect to items page (main requirement)
            router.push("/items");
            router.refresh();
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-4">

            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">Login</h1>
                    <Link
                        href="/"
                        className="text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                        Back to Home →
                    </Link>
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                    Use the demo credentials to access protected routes.
                </p>

                <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm">
                    <p className="font-semibold text-gray-900">Demo Credentials</p>
                    <p className="text-gray-700 mt-1">Email: demo@shopsphere.com</p>
                    <p className="text-gray-700">Password: 123456</p>
                </div>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                            placeholder="Enter email"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                            placeholder="Enter password"
                        />
                    </div>

                    {error ? (
                        <p className="text-sm text-red-600">{error}</p>
                    ) : null}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </main>
    );
}
