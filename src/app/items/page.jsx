import Image from "next/image";
import Link from "next/link";
import { getAllItems } from "@/lib/itemsData";

export default async function ItemsPage() {
  const items = getAllItems();

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Items</h1>
            <p className="mt-2 text-gray-600">
              Browse all available products from the ShopSphere catalog.
            </p>
          </div>

          <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Back to Home →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="group rounded-2xl bg-white border border-gray-200 overflow-hidden hover:shadow-md transition"
            >
              <div className="relative h-44 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-bold text-gray-900">
                  ${Number(item.price).toFixed(2)}
                </p>

                <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition">
                  View details <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
