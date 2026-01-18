import Link from "next/link";

export default function FeaturedCategories() {
    const categories = [
        { name: "Earbuds", desc: "Wireless audio essentials", href: "/items?category=earbuds" },
        { name: "Smartwatch", desc: "Fitness & daily tracking", href: "/items?category=smartwatch" },
        { name: "Chargers", desc: "Fast charging solutions", href: "/items?category=chargers" },
        { name: "Keyboards", desc: "Work & gaming keyboards", href: "/items?category=keyboards" },
        { name: "Mouse", desc: "Precision & comfort", href: "/items?category=mouse" },
        { name: "Power Bank", desc: "Backup power on the go", href: "/items?category=powerbank" },
        { name: "Headphones", desc: "Immersive sound", href: "/items?category=headphones" },
        { name: "Cables", desc: "Type-C, Lightning & more", href: "/items?category=cables" },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Featured Categories
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-2xl">
                            Explore popular gadget categories and quickly find what you need.
                        </p>
                    </div>

                    <Link
                        href="/items"
                        className="text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                        View all items →
                    </Link>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((c) => (
                        <Link
                            key={c.name}
                            href={c.href}
                            className="group rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                                        {c.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                                </div>

                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold">
                                    →
                                </span>
                            </div>

                            <div className="mt-6 h-1 w-16 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
