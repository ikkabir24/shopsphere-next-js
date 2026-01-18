"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function CustomerReviews() {
    const testimonials = [
        {
            id: 1,
            name: "Ayesha Rahman",
            role: "Student",
            feedback:
                "Clean UI and smooth browsing experience. The product cards look premium and load fast.",
            avatar: "/avatars/avatar-1.jpg",
        },
        {
            id: 2,
            name: "Rafi Hasan",
            role: "Freelancer",
            feedback:
                "Loved the details page layout. Everything is easy to understand and well organized.",
            avatar: "/avatars/avatar-2.jpg",
        },
        {
            id: 3,
            name: "Nila Akter",
            role: "Content Creator",
            feedback:
                "The landing page looks professional. The slider and sections are well balanced.",
            avatar: "/avatars/avatar-3.jpg",
        },
        {
            id: 4,
            name: "Tanvir Ahmed",
            role: "Gadget Enthusiast",
            feedback:
                "Nice category system and responsive design. Works great on mobile and desktop.",
            avatar: "/avatars/avatar-4.jpg",
        },
        {
            id: 5,
            name: "Farhana Islam",
            role: "Office Worker",
            feedback:
                "Everything feels consistent. The design is clean and the navigation is straightforward.",
            avatar: "/avatars/avatar-5.jpg",
        },
    ];

    return (
        <section className="pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Customer Reviews
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Real feedback from users who explored ShopSphere products.
                    </p>
                </div>

                <div className="mt-10">
                    <Swiper
                        loop
                        effect={"coverflow"}
                        grabCursor
                        centeredSlides
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 20,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="w-full"
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((t) => (
                            <SwiperSlide key={t.id} className="pb-10">
                                <div className="h-[330px] rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:px-10 md:py-8 mx-4 text-center flex flex-col items-center justify-center">
                                    <div className="mb-4">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-600 mx-auto">
                                            <Image
                                                src={t.avatar}
                                                alt={t.name}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-cover"
                                                priority={t.id === 1}
                                            />
                                        </div>
                                    </div>

                                    <p className="text-gray-600 italic text-sm md:text-base leading-relaxed mb-4 line-clamp-4">
                                        “{t.feedback}”
                                    </p>

                                    <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
