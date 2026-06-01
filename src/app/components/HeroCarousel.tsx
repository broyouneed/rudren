import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroCarousel() {
  const slides = [
    {
      image: "/hero1.jpg",
      title: "Premium Packaging Solutions",
      subtitle: "Advanced packaging machinery for modern industries",
    },
    {
      image: "/hero2.jpg",
      title: "Industrial Automation",
      subtitle: "Enhance productivity with intelligent technologies",
    },
    {
      image: "/hero3.jpg",
      title: "Stretch Wrapping Systems",
      subtitle: "Reliable end-of-line packaging solutions",
    },
  ];

  return (
    <section className="h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  {slide.title}
                </h1>

                <p className="text-xl md:text-2xl mb-8">
                  {slide.subtitle}
                </p>

                <div className="flex gap-4 justify-center">
                  <Link
                    to="/products"
                    className="px-8 py-4 bg-red-600 rounded-xl"
                  >
                    Explore Products
                  </Link>

                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-white text-black rounded-xl"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}