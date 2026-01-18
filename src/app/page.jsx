import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/LandingPageSections/Hero";
import FeaturedCategories from "@/components/LandingPageSections/FeaturedCategories";
import CustomerReviews from "@/components/LandingPageSections/CustomerReviews";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main className="min-h-screen bg-gray-100">
        {/* 1) Hero */}
        <Hero />

        {/* 2) Featured Categories */}
        <FeaturedCategories />

        {/* 3) Best Sellers Preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Best Sellers</h2>
                <p className="mt-2 text-gray-600">
                  A quick preview of popular items from our catalog.
                </p>
              </div>
              <Link href="/items" className="text-indigo-600 hover:text-indigo-700">
                View all →
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border rounded-2xl bg-white overflow-hidden">
                  <div className="h-36 bg-gray-100" />
                  <div className="p-4">
                    <p className="font-semibold text-gray-900">Sample Product {i}</p>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      Short description of the product will appear here.
                    </p>
                    <p className="mt-3 font-bold text-gray-900">$49.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4) Why ShopSphere */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900">Why ShopSphere</h2>
            <p className="mt-2 text-gray-600">Simple, fast, and beginner-friendly catalog experience.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Clean UI", desc: "Consistent cards, spacing, and layout across pages." },
                { title: "Public Browsing", desc: "Anyone can view items and details without login." },
                { title: "Protected Actions", desc: "Add new items only when logged in (optional)." },
              ].map((f) => (
                <div key={f.title} className="border rounded-2xl p-6">
                  <p className="font-semibold text-gray-900">{f.title}</p>
                  <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5) How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-2 text-gray-600">
              A simple flow designed for a smooth user experience.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Browse Items", desc: "Open the catalog and explore products." },
                { step: "02", title: "View Details", desc: "Click any item to see full information." },
                { step: "03", title: "Add Item (Optional)", desc: "Login and submit a new product form." },
              ].map((s) => (
                <div key={s.step} className="border rounded-2xl p-6 bg-white">
                  <p className="text-sm font-bold text-indigo-600">{s.step}</p>
                  <p className="mt-2 font-semibold text-gray-900">{s.title}</p>
                  <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6) Customer Reviews */}
        <CustomerReviews />

        {/* 7) Newsletter / CTA */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Stay Updated</h2>
            <p className="mt-2 text-gray-600">
              Get updates about new gadgets and featured deals.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 border rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
