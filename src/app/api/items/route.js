export async function GET() {
    const items = [
        {
            id: "1",
            name: "Wireless Earbuds Pro",
            description: "Clear sound, noise reduction, and long battery life.",
            price: 49.99,
            image: "https://picsum.photos/seed/earbuds/900/600",
        },
        {
            id: "2",
            name: "Smartwatch Active",
            description: "Track steps, heart rate, and daily activity with style.",
            price: 79.99,
            image: "https://picsum.photos/seed/smartwatch/900/600",
        },
        {
            id: "3",
            name: "Fast Charger 33W",
            description: "Compact fast charging for phones and accessories.",
            price: 19.99,
            image: "https://picsum.photos/seed/charger/900/600",
        },
        {
            id: "4",
            name: "Mechanical Keyboard Lite",
            description: "Smooth typing experience with modern design.",
            price: 59.99,
            image: "https://picsum.photos/seed/keyboard/900/600",
        },
    ];

    return Response.json(items);
}
