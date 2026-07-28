 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTruck } from 'react-icons/fi';

// 🖼️ আপনার ব্যানার ব্যাকগ্রাউন্ড ইমেজের Path টি এখানে দিন
import bannerBg from '../../assets/ground-1.png'; 

const  FooterBannerCard = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/collection');
  };

  return (
    <section className="relative w-full py-20 sm:py-28 my-16 select-none overflow-hidden font-sans">
      
      {/* 🖼️ FIXED BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        {/* ব্যাকগ্রাউন্ড ওভারলে */}
        <div className="absolute "></div>
      </div>

      {/* 👑 CARDS CONTAINER */}
      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* ================= CARD 1: LUXURY TEXT + BRAND NAME ================= */}
          <div 
            onClick={handleCardClick}
            className="group cursor-pointer   p-12 sm:p-16 lg:p-20  border border-white/20 shadow-2xl flex flex-col justify-between items-center text-center min-h-[380px] transition-all duration-500 hover:bg-black/80 hover:border-red-500/50 hover:scale-[1.02]"
          >
            {/* মেইন লাক্সারি টেক্সট */}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-widest uppercase text-white leading-relaxed my-auto">
              Wear pure <span className="font-bold text-red-500">authentic luxury</span> feel classy every single day.
            </p>

            {/* BRAND NAME: Fashion (White) Classy (Red) */}
            <div className="pt-6 border-t border-white/15 w-full mt-6">
              <span className="text-sm sm:text-base tracking-[0.3em] uppercase text-gray-300 font-medium">
                by <span className="text-white font-bold">Fashion</span> <span className="text-red-500 font-extrabold">Classy</span>
              </span>
            </div>
          </div>

          {/* ================= CARD 2: FREE DELIVERY OFFER ================= */}
          <div 
            onClick={handleCardClick}
            className="group cursor-pointer bg-black/65 backdrop-blur-md p-12 sm:p-16 lg:p-20  border border-white/20 shadow-2xl flex flex-col justify-center items-center text-center min-h-[380px] transition-all duration-500 hover:bg-black/80 hover:border-red-500/50 hover:scale-[1.02]"
          >
            {/* ডেলিভারি আইকন */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg">
              <FiTruck className="text-4xl sm:text-5xl" />
            </div>

            {/* বড় সাইজের Free Delivery টেক্সট */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-red-500 mb-3 drop-shadow-xl group-hover:scale-105 transition-transform">
                 WORLDWIDE SHIPPING
            </h2>

            {/* ছোট সাইজের শর্ত টেক্সট */}
            <p className="text-base sm:text-lg lg:text-xl font-medium tracking-widest text-gray-200 uppercase mt-2">
               PREMIUM DELIVERY TO DESTINATIONS<span className="text-white font-bold border-b-2 border-red-500">   WORLDWIDE</span>
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default  FooterBannerCard;