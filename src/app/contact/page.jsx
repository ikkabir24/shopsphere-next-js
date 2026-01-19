"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });

        // UI-only demo behavior
        setTimeout(() => {
            setLoading(false);
            setStatus({
                type: "success",
                message: "Message received successfully. We will contact you soon.",
            });
            e.target.reset();
        }, 800);
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Top header */}
            <section className="border-b border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 py-10">
                    <p className="text-sm text-gray-600">
                        <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                            Home
                        </Link>{" "}
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-700">Contact</span>
                    </p>

                    <div className="mt-4 max-w-2xl">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Contact ShopSphere
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Have questions about gadgets or accessories? Send us a message and we will get back to you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Contact cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition">
                            <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                                @
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">Email</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                For support and queries, email us anytime.
                            </p>
                            <a
                                href="mailto:ikkabir24@yahoo.com"
                                className="mt-3 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                            >
                                ikkabir24@yahoo.com
                            </a>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition">
                            <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                                ☎
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">Phone</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Call us during business hours for quick help.
                            </p>
                            <a
                                href="tel:+8801890995309"
                                className="mt-3 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                            >
                                +880 1890 995309
                            </a>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition">
                            <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                                ⏱
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">Working Hours</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                We usually reply within 24 hours.
                            </p>
                            <p className="mt-3 text-sm font-semibold text-gray-900">
                                Sat–Thu: 10:00 AM – 8:00 PM
                            </p>
                            <p className="text-sm text-gray-600">Friday: Closed</p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                Send a Message
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                This is a UI-only form (no backend submission) for the assignment.
                            </p>

                            {status.message ? (
                                <div
                                    className={[
                                        "mt-5 rounded-xl border px-4 py-3 text-sm",
                                        status.type === "success"
                                            ? "border-green-200 bg-green-50 text-green-800"
                                            : "border-red-200 bg-red-50 text-red-800",
                                    ].join(" ")}
                                >
                                    {status.message}
                                </div>
                            ) : null}

                            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-semibold text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-semibold text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter your email"
                                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Write a subject"
                                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Write your message..."
                                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600 resize-none"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold transition"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-6 rounded-2xl bg-indigo-600 text-white p-6 md:p-8">
                            <h3 className="text-lg md:text-xl font-bold">
                                Want to explore products instead?
                            </h3>
                            <p className="mt-1 text-white/90 text-sm md:text-base">
                                Visit the catalog and check the latest gadgets and accessories.
                            </p>
                            <div className="mt-4">
                                <Link
                                    href="/items"
                                    className="inline-flex items-center justify-center bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
                                >
                                    Go to Items →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
