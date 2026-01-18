export default function WhyShopSphere() {
  const features = [
    {
      title: "Clean & Consistent UI",
      desc: "Reusable components, consistent spacing, and a modern layout across all pages.",
    },
    {
      title: "Public Browsing",
      desc: "Anyone can view the item list and product details without logging in.",
    },
    {
      title: "Protected Actions (Optional)",
      desc: "Add new products only when logged in using cookie-based authentication.",
    },
    {
      title: "Fast & Responsive",
      desc: "Optimized layout and responsive grid that looks great on mobile and desktop.",
    },
    {
      title: "API Powered Catalog",
      desc: "Products are fetched from an Express API, keeping the app realistic and scalable.",
    },
    {
      title: "Beginner-Friendly Structure",
      desc: "Clear folder structure and separation of sections for easy maintenance and updates.",
    },
  ];

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why ShopSphere
          </h2>
          <p className="mt-2 text-gray-600">
            Built as a clean mini e-commerce catalog with essential features and a scalable structure.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition"
              data-aos="fade-up"
              data-aos-delay={String(80 + idx * 60)}
            >
              <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                ✓
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {f.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl bg-indigo-600 text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div>
            <h3 className="text-xl font-bold">Ready to explore the catalog?</h3>
            <p className="text-white/90 mt-1">
              Browse items, view details, and experience a clean product UI.
            </p>
          </div>

          <a
            href="/items"
            className="inline-flex items-center justify-center bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Browse Items →
          </a>
        </div>
      </div>
    </section>
  );
}
