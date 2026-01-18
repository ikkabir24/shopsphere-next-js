import Link from "next/link";
import Image from "next/image";

export default function BestSellers() {
    // Template data: replace later with API data
    const products = [
        {
            id: "p1",
            name: "Wireless Earbuds Pro",
            price: 49.99,
            desc: "Clear sound, noise reduction, and long battery life.",
            image: "/products/product-1.png",
            category: "Earbuds",
        },
        {
            id: "p2",
            name: "Smartwatch Active",
            price: 79.99,
            desc: "Track steps, heart rate, and daily activity with style.",
            image: "/products/product-2.png",
            category: "Smartwatch",
        },
        {
            id: "p3",
            name: "Fast Charger 33W",
            price: 19.99,
            desc: "Compact fast charging for phones and accessories.",
            image: "/products/product-3.png",
            category: "Chargers",
        },
        {
            id: "p4",
            name: "Mechanical Keyboard Lite",
            price: 59.99,
            desc: "Smooth typing experience with modern design.",
            image: "/products/product-4.png",
            category: "Keyboards",
        },
    ];

    return (
        <section className="pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Best Sellers
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-2xl">
                            A quick preview of popular products from our catalog.
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
                    {products.map((p) => (
                        <Link
                            key={p.id}
                            href={`/items/${p.id}`}
                            className="group rounded-2xl bg-white border border-gray-200 overflow-hidden hover:shadow-md transition"
                        >
                            <div className="relative h-44 bg-gray-100">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                                        {p.category}
                                    </p>
                                    <p className="text-sm font-bold text-gray-900">
                                        ${p.price.toFixed(2)}
                                    </p>
                                </div>

                                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                                    {p.name}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                    {p.desc}
                                </p>

                                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition">
                                    View details <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
