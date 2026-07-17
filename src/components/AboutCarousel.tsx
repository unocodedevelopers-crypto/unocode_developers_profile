'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const items = [
  { id: 1, title: 'Modern & Premium Design', image: '/images/carousel/img1.jpeg' },
  { id: 2, title: 'Fast Loading Websites', image: '/images/carousel/img2.jpeg' },
  { id: 3, title: 'Mobile Responsive', image: '/images/carousel/img3.jpeg' },
  { id: 4, title: 'SEO Optimized', image: '/images/carousel/img4.jpeg' },
  { id: 5, title: 'Secure Development', image: '/images/carousel/img5.jpeg' },
  { id: 6, title: 'Clean & Maintainable Code', image: '/images/carousel/img6.jpeg' },
  { id: 7, title: 'Client-Centered Approach', image: '/images/carousel/img7.jpeg' },
  { id: 8, title: 'Ongoing Support', image: '/images/carousel/img8.jpeg' },
];

export default function AboutCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <div className="relative w-full">
        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>

        <div className="px-12 md:px-16 w-full h-full">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.custom-pagination',
              clickable: true
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full h-full"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} style={{ width: '280px', height: '350px' }}>
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-black/50 w-full h-full bg-gray-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold font-inria-sans mb-2 tracking-wide leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Element (strictly outside images) */}
        <div className="custom-pagination flex justify-center mt-8"></div>
      </div>

      {/* Add some global styles for swiper pagination dots to match design */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #555;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #8b5cf6; /* purple matches reference */
          width: 24px;
          border-radius: 8px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
