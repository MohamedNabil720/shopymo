"use client";

import { Product } from "@/types/product";
import ProductCard from "@/components/Products/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface RecommendedProductsClientProps {
  products: Product[];
}

export default function RecommendedProductsClient({
  products,
}: RecommendedProductsClientProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <SectionTitle
        title="Recommended Products"
        description="You may also like these products"
      />

      <div className="recommended-products-swiper">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .recommended-products-swiper .swiper-button-next,
        .recommended-products-swiper .swiper-button-prev {
          color: #f97316;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .recommended-products-swiper .swiper-button-next:after,
        .recommended-products-swiper .swiper-button-prev:after {
          font-size: 16px;
        }
      `}</style>
    </section>
  );
}
