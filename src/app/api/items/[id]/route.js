export async function GET(request, context) {
  const items = [
    {
      id: "1",
      name: "Wireless Earbuds Pro",
      description: "Clear sound, noise reduction, and long battery life.",
      price: 49.99,
      image: "/products/product-1.png",
    },
    {
      id: "2",
      name: "Smartwatch Active",
      description: "Track steps, heart rate, and daily activity with style.",
      price: 79.99,
      image: "/products/product-2.png",
    },
    {
      id: "3",
      name: "Fast Charger 33W",
      description: "Compact fast charging for phones and accessories.",
      price: 19.99,
      image: "/products/product-3.png",
    },
    {
      id: "4",
      name: "Mechanical Keyboard Lite",
      description: "Smooth typing experience with modern design.",
      price: 59.99,
      image: "/products/product-4.png",
    },
  ];

  // Next.js 15/16: context.params can be a Promise
  const { params } = context;
  const resolvedParams = typeof params?.then === "function" ? await params : params;

  const requestedId = String(resolvedParams?.id);
  const item = items.find((i) => String(i.id) === requestedId);

  if (!item) {
    return Response.json(
      { message: "Item not found", requestedId, availableIds: items.map((i) => i.id) },
      { status: 404 }
    );
  }

  return Response.json(item);
}
