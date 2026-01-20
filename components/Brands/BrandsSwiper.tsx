"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BrandsSwiperProps {
  brands: Brand[];
}

export default function BrandsSwiper({ brands }: BrandsSwiperProps) {
  return (
    <div className="brands-swiper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="py-12"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand._id}>
            <Link
              href={`/brands/${brand.slug}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative h-32 bg-white p-4 flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         25vw"
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center bg-gray-50 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-800 truncate group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
