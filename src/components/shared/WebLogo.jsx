import Link from "next/link";
import Image from "next/image";

export default function WebLogo() {
    return (
        <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-indigo-200 flex items-center justify-center overflow-hidden">
                {/* Logo Image */}
                <Image
                    src="/ShopSphere_Logo.png"
                    alt="ShopSphere Logo"
                    width={35}
                    height={35}
                    className="object-contain"
                />
            </div>

            <div className="leading-tight">
                <p className="text-xl font-bold text-gray-900">ShopSphere</p>
                <p className="text-sm text-gray-500">Gadgets & Accessories</p>
            </div>
        </Link>
    );
}
