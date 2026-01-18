"use client";

export default function NewsletterCTA() {
    return (
        <section className="pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <div
                    className="rounded-2xl bg-white border border-gray-200 p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
                    data-aos="fade-up"
                    data-aos-delay="0"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Stay Updated with New Gadgets
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Subscribe to get updates about new arrivals, featured accessories, and catalog highlights.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-sm">
                            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 font-semibold">
                                ✓ No spam
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 font-semibold">
                                ✓ Unsubscribe anytime
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 font-semibold">
                                ✓ Weekly updates
                            </span>
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-[420px]"
                        data-aos="zoom-in"
                        data-aos-delay="120"
                    >
                        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
                            <p className="text-sm font-semibold text-gray-900">
                                Subscribe Newsletter
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                Enter your email to get updates.
                            </p>

                            <form
                                className="mt-4 flex flex-col sm:flex-row gap-3"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600 bg-white"
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
