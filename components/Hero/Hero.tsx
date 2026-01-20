"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const slides = [
    {
      img: "/images/slider-1.jpg",
      subtitle: "Fresh & Organic",
      title: "Delicious Seasonal Fruits",
      btn1: "Shop Now",
      btn2: "Learn More",
    },
    {
      img: "/images/slider-2.jpeg",
      subtitle: "Exclusive Offers",
      title: "Up to 50% Off on All Products",
      btn1: "Explore Deals",
      btn2: "View Categories",
    },
    {
      img: "/images/slider-3.jpg",
      subtitle: "Fast & Reliable",
      title: "Your Everyday Store Essentials",
      btn1: "Start Shopping",
      btn2: "Contact Us",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-screen text-center text-white overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              <Image
                src={slide.img}
                alt={`Hero slide ${i + 1}`}
                fill
                className="object-cover object-center"
                priority={i === 0}
              />

              <div className="absolute inset-0 bg-black/70"></div>

              <div className="absolute inset-0 flex flex-col items-center gap-8 justify-center z-10 px-4">
                {activeIndex === i && (
                  <>
                    <motion.p
                      key={`p-${i}-${activeIndex}`}
                      className="uppercase tracking-widest text-primary mb-2 text-sm md:text-base"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.h1
                      key={`h1-${i}-${activeIndex}`}
                      className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-3xl leading-tight"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.8,
                      }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.div
                      key={`btns-${i}-${activeIndex}`}
                      className="flex flex-wrap justify-center gap-4"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 1.3,
                      }}
                    >
                      <button className="bg-primary hover:bg-primary cursor-pointer text-white px-6 py-3 rounded-full font-semibold">
                        {slide.btn1}
                      </button>
                      <button className="border border-primary hover:bg-primary cursor-pointer hover:text-white px-6 py-3 rounded-full font-semibold">
                        {slide.btn2}
                      </button>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
