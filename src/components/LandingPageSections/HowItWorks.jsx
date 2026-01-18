import Link from "next/link";

export default function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Browse Items",
            desc: "Open the catalog and explore products by category, price, and details.",
        },
        {
            step: "02",
            title: "View Details",
            desc: "Click any product to see full information like description, price, and image.",
        },
        {
            step: "03",
            title: "Login (Mock Auth)",
            desc: "Use the hardcoded credentials to login and store auth state in cookies.",
        },
        {
            step: "04",
            title: "Add Item (Optional)",
            desc: "Create a new product using the form and store it through the Express API.",
        },
    ];

    return (
        <section className="pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="0">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        How It Works
                    </h2>
                    <p className="mt-2 text-gray-600">
                        A simple flow designed for a smooth product browsing experience.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((s, idx) => (
                        <div
                            key={s.step}
                            className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition"
                            data-aos="fade-up"
                            data-aos-delay={String(80 + idx * 70)}
                        >
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                                    {s.step}
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {s.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-10 rounded-2xl border border-indigo-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    data-aos="fade-up"
                    data-aos-delay="120"
                >
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Start exploring in seconds
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Go to the catalog and view available products right now.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link
                            href="/items"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-semibold transition"
                        >
                            Browse Items
                        </Link>
                        <Link
                            href="/login"
                            className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 px-5 py-3 rounded-lg font-semibold transition"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
