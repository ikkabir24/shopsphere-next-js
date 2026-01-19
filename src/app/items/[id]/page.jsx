import Image from "next/image";
import Link from "next/link";

async function getItem(id) {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch item");
    }

    return res.json();
}

export default async function ItemDetailsPage({ params }) {
    // Next.js 15/16 safe params handling
    const resolvedParams =
        typeof params?.then === "function" ? await params : params;

    const item = await getItem(resolvedParams.id);

    return (
        <main className="min-h-screen bg-white">
            <section className="max-w-5xl mx-auto px-4 py-10">
                <Link
                    href="/items"
                    className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                    ← Back to Items
                </Link>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-72 md:h-96 bg-gray-100 rounded-xl overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {item.name}
                        </h1>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            {item.description}
                        </p>

                        <p className="mt-6 text-2xl font-bold text-gray-900">
                            ${Number(item.price).toFixed(2)}
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                                disabled
                            >
                                Buy Now
                            </button>

                            <span className="text-sm text-gray-500 self-center">
                                (UI only – no checkout)
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
