import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { color } from 'framer-motion';


const slides = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3',
    title: 'Expert Financial Analysis',
    description: 'Make informed decisions with our professional guidance',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3',
    title: 'Investment Solutions',
    description: 'Customized strategies for your financial goals',
  },
  {
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3',
    title: 'Wealth Management',
    description: 'Comprehensive solutions for your portfolio',
  },
  {
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3',
    title: 'Market Analysis',
    description: 'Stay ahead with our market insights',
  },
  {
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3',
    title: 'Financial Planning',
    description: 'Build a secure financial future',
  },
  {
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3',
    title: 'Investment Growth',
    description: 'Maximize your returns with expert guidance',
  },
];

const Hero = () => {
  return (
    <div className="sm:h-screen md:h-screen h-96 w-full pt-12 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 " />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;