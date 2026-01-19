export const items = [
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

export function getAllItems() {
  return items;
}

export function getItemById(id) {
  return items.find((i) => String(i.id) === String(id));
}

