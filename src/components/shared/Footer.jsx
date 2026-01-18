import Link from "next/link";
import {
    FaFacebookSquare,
    FaLinkedin,
} from "react-icons/fa";
import {
    FaCopyright,
    FaSquareCheck,
    FaSquareGithub,
    FaSquareXTwitter,
} from "react-icons/fa6";
import WebLogo from "./WebLogo";

export default function Footer() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left: Brand Info */}
                <div className="flex flex-col gap-4">
                    <WebLogo />

                    <p className="text-gray-600 max-w-sm">
                        ShopSphere is a mini e-commerce catalog where users can explore
                        modern gadgets, view details, and manage products efficiently.
                    </p>

                    <div className="text-sm text-gray-500 flex items-center gap-2">
                        <FaCopyright />
                        <span>Designed & Developed by Kabir</span>
                    </div>

                    <div className="text-sm text-gray-500 flex items-center gap-2">
                        <FaSquareCheck />
                        <span>All rights reserved</span>
                    </div>
                </div>

                {/* Right: Contact & Social */}
                <div className="flex flex-col gap-4 md:items-end">
                    <h6 className="text-lg font-semibold text-gray-900">
                        Contact
                    </h6>

                    <p className="text-gray-600">
                        Email:{" "}
                        <a
                            href="mailto:ikkabir24@yahoo.com"
                            className="text-indigo-600 hover:underline"
                        >
                            ikkabir24@yahoo.com
                        </a>
                    </p>

                    <p className="text-gray-600">
                        Phone:{" "}
                        <a
                            href="tel:+8801890995309"
                            className="text-indigo-600 hover:underline"
                        >
                            +880 1890 995309
                        </a>
                    </p>

                    <div className="flex gap-5 mt-2">
                        <a
                            href="https://github.com/ikkabir24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600 transition"
                        >
                            <FaSquareGithub size={28} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ikkabir24/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600 transition"
                        >
                            <FaLinkedin size={28} />
                        </a>

                        <a
                            href="https://www.facebook.com/ikkabir24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600 transition"
                        >
                            <FaFacebookSquare size={28} />
                        </a>

                        <a
                            href="https://x.com/ikkabir24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600 transition"
                        >
                            <FaSquareXTwitter size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
