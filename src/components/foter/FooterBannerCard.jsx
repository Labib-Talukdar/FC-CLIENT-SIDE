// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiTruck } from 'react-icons/fi';

// // 🖼️ আপনার ব্যানার ব্যাকগ্রাউন্ড ইমেজের Path টি এখানে দিন
// import bannerBg from '../../assets/fashion classy-2.png'; // Path টা আপনার ফোল্ডার অনুযায়ী আপডেট করে নিন

// const  FooterBannerCard = () => {
//   const navigate = useNavigate();

//   // কার্ডে ক্লিক করলে Collection পেজে নিয়ে যাওয়ার ফাংশন
//   const handleCardClick = () => {
//     navigate('/collection');
//   };

//   return (
//     <section className="relative w-full py-20 sm:py-28 my-16 select-none overflow-hidden font-sans">
      
//       {/* 🖼️ 1. FIXED BACKGROUND IMAGE */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10"
//         style={{
//           backgroundImage: `url(${bannerBg})`,
//         }}
//       >
//         {/* ব্যাকগ্রাউন্ড ওভারলে */}
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
//       </div>

//       {/* 👑 2. CARDS CONTAINER */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
//           {/* ================= CARD 1: LUXURY BRAND TEXT ================= */}
//           <div 
//             onClick={handleCardClick}
//             className="group cursor-pointer bg-black/60 backdrop-blur-md p-10 sm:p-14 rounded-3xl border border-white/20 shadow-2xl flex flex-col justify-center items-center text-center transition-all duration-500 hover:bg-black/75 hover:border-amber-400/60 hover:scale-[1.02]"
//           >
//             <p className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-widest uppercase text-white leading-relaxed group-hover:text-amber-100 transition-colors">
//               Wear pure <span className="font-bold text-amber-400 group-hover:text-amber-300">authentic luxury</span> feel classy every single day.
//             </p>
//           </div>

//           {/* ================= CARD 2: FREE DELIVERY OFFER ================= */}
//           <div 
//             onClick={handleCardClick}
//             className="group cursor-pointer bg-black/60 backdrop-blur-md p-10 sm:p-14 rounded-3xl border border-white/20 shadow-2xl flex flex-col justify-center items-center text-center transition-all duration-500 hover:bg-black/75 hover:border-amber-400/60 hover:scale-[1.02]"
//           >
//             {/* ডেলিভারি আইকন */}
//             <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
//               <FiTruck className="text-3xl sm:text-4xl" />
//             </div>

//             {/* বড় সাইজের Free Delivery টেক্সট */}
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-amber-400 mb-3 drop-shadow-lg group-hover:scale-105 transition-transform">
//               Free Delivery
//             </h2>

//             {/* ছোট সাইজের শর্ত টেক্সট */}
//             <p className="text-base sm:text-lg lg:text-xl font-medium tracking-widest text-gray-200 uppercase mt-2">
//               On orders over <span className="text-white font-bold border-b border-amber-400">20,000 TK</span>
//             </p>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default  FooterBannerCard;





















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
                NATIONWIDE DELIVERY
            </h2>

            {/* ছোট সাইজের শর্ত টেক্সট */}
            <p className="text-base sm:text-lg lg:text-xl font-medium tracking-widest text-gray-200 uppercase mt-2">
              Available oll over<span className="text-white font-bold border-b-2 border-red-500">  Bangladesh</span>
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default  FooterBannerCard;