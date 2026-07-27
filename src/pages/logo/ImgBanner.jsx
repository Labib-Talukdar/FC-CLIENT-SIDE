 
import React, { useState, useEffect, useRef } from 'react';

// আপনার assets ফোল্ডার থেকে ছবিগুলো ইম্পোর্ট করুন
 
import image1 from '../../assets/banner-1.png'
import image2 from '../../assets/banner-2.png'
import image3 from '../../assets/banner-3.png'
import { useNavigate } from 'react-router-dom';

const AutoplaySlider = () => {
  const slides = [
    { id: 1, src: image1, alt: "Nature image 1", link:"/collection"  },
    { id: 2, src: image2, alt: "City image 2" },
    { id: 3, src: image3, alt: "Tech image 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const delay = 3500; 

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, slides.length]);

  return (
    
 
      <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden relative group bg-black">


      {/* স্লাইড কন্টেইনার */}
    <div className="relative w-full h-full">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* ইমেজ এখানে ঠিক কন্টেইনারের মাপ অনুযায়ী থাকবে */}
          <img
            src={slide.src}
            alt={slide.alt}
            onClick={() => navigate('/collection')}
            className="w-full h-full object-cover object-center cursor-pointer" 
          />
        </div>
      ))}
    </div>



      {/* ম্যানুয়াল নেভিগেশন (Previous & Next Arrow) */}
       
      <button
        onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-sm md:text-base"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-sm md:text-base"
      >
        ❯
      </button>

      {/* নিচে গোল ডট ইন্ডিকেটর */}
       
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center space-x-2 md:space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 shadow-lg ${
              currentIndex === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoplaySlider;