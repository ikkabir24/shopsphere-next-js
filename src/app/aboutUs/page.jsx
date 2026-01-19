import Link from "next/link";

export default function AboutUsPage() {
    const stats = [
        { label: "Products Listed", value: "50+" },
        { label: "Happy Customers", value: "1,200+" },
        { label: "Categories", value: "12+" },
        { label: "Avg. Response Time", value: "24h" },
    ];

    const values = [
        {
            title: "Quality First",
            desc: "We focus on practical gadgets and accessories with clear descriptions, pricing, and a clean browsing experience.",
        },
        {
            title: "Simple Experience",
            desc: "The catalog is designed to be fast and easy to navigate on mobile, tablet, and desktop devices.",
        },
        {
            title: "Trust & Transparency",
            desc: "We present product information in a straightforward way—no clutter, no confusion, just what users need.",
        },
    ];

    const steps = [
        {
            title: "Browse the Catalog",
            desc: "Explore all products from the Items page and filter by your preferences.",
        },
        {
            title: "View Product Details",
            desc: "Open any product to see full details, price, and a clean presentation.",
        },
        {
            title: "Login for Protected Access",
            desc: "Use the demo login to access protected pages like Profile (middleware protected).",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="border-b border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 py-10">
                    <p className="text-sm text-gray-600">
                        <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                            Home
                        </Link>{" "}
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-700">About Us</span>
                    </p>

                    <div className="mt-4 max-w-3xl">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                            About ShopSphere
                        </h1>
                        <p className="mt-2 text-gray-600">
                            ShopSphere is a mini e-commerce product catalog built with Next.js App Router.
                            The goal is to provide a clean, responsive browsing experience with a simple
                            authentication system and protected routes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Hero / Mission */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            Our Mission
                        </h2>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            Our mission is to make product browsing simple and pleasant. We focus on a modern UI,
                            fast navigation, and clear product information so users can quickly find what they need.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-2xl bg-gray-50 border border-gray-200 p-4"
                                >
                                    <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                                    <p className="mt-1 text-sm text-gray-600">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/items"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Explore Items →
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-indigo-600 text-white p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold">
                                Built for the Assignment Requirements
                            </h2>
                            <p className="mt-3 text-white/90 leading-relaxed">
                                This project demonstrates Next.js core concepts: route handlers, dynamic routing,
                                server components, cookie-based authentication, and middleware-based route protection.
                            </p>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                                    <p className="font-semibold">Public Pages</p>
                                    <p className="mt-1 text-sm text-white/85">
                                        Landing, Items, and Item Details are accessible without login.
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                                    <p className="font-semibold">Protected Route</p>
                                    <p className="mt-1 text-sm text-white/85">
                                        Profile is protected via middleware and cookies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl bg-white text-indigo-700 p-5">
                            <p className="text-sm font-semibold">Demo Login</p>
                            <p className="mt-2 text-sm">
                                Email: <span className="font-bold">demo@shopsphere.com</span>
                            </p>
                            <p className="text-sm">
                                Password: <span className="font-bold">123456</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="max-w-2xl">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            What We Value
                        </h2>
                        <p className="mt-2 text-gray-600">
                            The product catalog experience is built around clarity, performance, and simplicity.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-sm transition"
                            >
                                <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                                    ✓
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                    {v.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works (About version) */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            How ShopSphere Works
                        </h2>
                        <p className="mt-2 text-gray-600">
                            A simple flow from browsing to details, with optional login for protected access.
                        </p>
                    </div>

                    <Link href="/items" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        Browse Items →
                    </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((s, idx) => (
                        <div
                            key={s.title}
                            className="rounded-2xl border border-gray-200 bg-white p-6"
                        >
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">
                                {idx + 1}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                {s.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="max-w-7xl mx-auto px-4 pb-14">
                <div className="rounded-2xl bg-gray-900 text-white p-6 md:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-xl md:text-2xl font-bold">
                                Ready to explore the catalog?
                            </h2>
                            <p className="mt-2 text-white/85">
                                Visit the Items page to view products and open details for a clean product overview.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/items"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Go to Items →
                            </Link>
                            <Link
                                href="/profile"
                                className="border border-white/30 hover:border-white/60 px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Open Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
