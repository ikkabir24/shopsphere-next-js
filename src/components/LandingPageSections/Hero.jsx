"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const banners = [
    {
      id: 1,
      title: "Discover Smart Gadgets for Your Daily Life",
      subtitle: "Browse curated tech accessories with clean details and pricing.",
      ctaText: "Browse Items",
      ctaHref: "/items",
      src: "/banner_image/banner_1.png",
      alt: "ShopSphere banner 1",
    },
    {
      id: 2,
      title: "Upgrade Your Setup with Modern Accessories",
      subtitle: "Find the right gear for study, work, and gaming.",
      ctaText: "Explore Catalog",
      ctaHref: "/items",
      src: "/banner_image/banner_2.png",
      alt: "ShopSphere banner 2",
    },
    {
      id: 3,
      title: "Fast, Simple, and Clean Product Browsing",
      subtitle: "Public item list and details, with optional protected add item.",
      ctaText: "Login",
      ctaHref: "/login",
      src: "/banner_image/banner_3.png",
      alt: "ShopSphere banner 3",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative w-full h-[70vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="h-full"
        >
          {banners.map((b) => (
            <SwiperSlide key={b.id}>
              <div className="relative w-full h-[70vh]">
                {/* Background Image */}
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  priority={b.id === 1}
                  className="object-cover"
                />

                {/* Readability Overlay (soft gradient, image still visible) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 w-full">
                    {/* Subtle glass panel behind text */}
                    <div className="max-w-2xl rounded-2xl bg-black/20 backdrop-blur-sm p-6 md:p-8">
                      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-sm">
                        {b.title}
                      </h1>

                      <p className="mt-4 text-white/90 text-base md:text-lg drop-shadow-sm">
                        {b.subtitle}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          href={b.ctaHref}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-sm"
                        >
                          {b.ctaText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
