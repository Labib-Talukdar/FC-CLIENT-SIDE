// import React, { useState } from 'react';

// const FooterBannerCard = () => {
//   // মাউসের পজিশন ট্র্যাকিং এর জন্য স্টেট
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   // মাউস সরালে 3D Tilt ইফেক্ট জেনারেট করার ফাংশন
//   const handleMouseMove = (e) => {
//     const card = e.currentTarget.getBoundingClientRect();
//     const cardWidth = card.width;
//     const cardHeight = card.height;
//     const centerX = card.left + cardWidth / 2;
//     const centerY = card.top + cardHeight / 2;
//     const mouseX = e.clientX - centerX;
//     const mouseY = e.clientY - centerY;

//     // এঙ্গেলের মাত্রা (Tilt Intensity)
//     const rotateX = (mouseY / (cardHeight / 2)) * -12; 
//     const rotateY = (mouseX / (cardWidth / 2)) * 12;

//     setRotate({ x: rotateX, y: rotateY });
//   };

//   // মাউস সরিয়ে নিলে কার্ড আবার আগের জায়গায় ফিরে যাবে
//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//   };

//   return (
//     <section className="w-full py-16 px-4 bg-gradient-to-b from-neutral-950 via-slate-900 to-black flex justify-center items-center overflow-hidden perspective-1000">
      
//       {/* 3D Container Card */}
//       <div
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotate(-2deg)`,
//           transition: rotate.x === 0 ? 'all 0.6s cubic-bezier(0.03, 0.98, 0.52, 0.99)' : 'none',
//         }}
//         className="relative max-w-3xl w-full bg-gradient-to-br from-neutral-900/90 via-black to-neutral-900/80 border border-amber-500/20 rounded-3xl p-8 sm:p-14 shadow-[0_20px_50px_rgba(217,119,6,0.15)] backdrop-blur-xl text-center group cursor-pointer overflow-hidden transform-gpu"
//       >
        
//         {/* ১. ভাসমান ডায়নামিক ব্যাকগ্রাউন্ড গ্লো (Mouse Hover-এ বড় হবে) */}
//         <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/35 transition-all duration-700 animate-pulse"></div>
//         <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-amber-700/20 rounded-full blur-3xl group-hover:bg-amber-600/35 transition-all duration-700 animate-pulse"></div>

//         {/* ২. ব্যাকগ্রাউন্ডে ওয়াটারমার্কের মতো রানিং টেক্সট (Continuous Subtle Motion) */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
//           <p className="text-7xl sm:text-9xl font-extrabold uppercase tracking-widest text-amber-300 whitespace-nowrap animate-pulse">
//             FASHION CLASSY • ORIGINAL
//           </p>
//         </div>

//         {/* ৩. মেইন ইন্টারেক্টিভ কন্টেন্ট */}
//         <div className="relative z-10 flex flex-col items-center justify-center gap-4">
          
//           {/* ১ম লাইন: স্লো ফ্লোটিং এনিমেশন */}
//           <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 tracking-tight leading-tight transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
//             Wear Pure Authentic Luxury.
//           </h2>

//           {/* ২য় লাইন: মাউস আনলে বিপরীত দিকে স্লাইড হবে */}
//           <p className="text-xl sm:text-3xl lg:text-4xl font-serif italic text-amber-200/90 tracking-wide transition-transform duration-500 group-hover:translate-y-2 group-hover:text-amber-400">
//             Feel Classy Every Single Day.
//           </p>

//           {/* ব্যাজ উইথ রোটেশন এন্ড শাইন */}
//           <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-sans font-semibold tracking-widest uppercase shadow-inner group-hover:border-amber-400 group-hover:bg-amber-500/20 transition-all duration-300">
//             <span className="animate-spin text-amber-400">✨</span>
//             <span>Unapologetically Authentic</span>
//             <span className="animate-spin text-amber-400">✨</span>
//           </div>

//         </div>

//         {/* ৪. কার্ডের চারপাশে শাইন/গ্লাস রিফ্লেকশন বার */}
//         <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none group-hover:border-amber-400/30 transition-colors duration-500"></div>

//       </div>

//     </section>
//   );
// };

// export default FooterBannerCard;




















 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FooterBannerCard = () => {
  const navigate = useNavigate();
  
  // মাউসের পজিশন ট্র্যাকিং এর জন্য স্টেট
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // মাউস সরালে 3D Tilt ইফেক্ট জেনারেট করার ফাংশন
  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const cardWidth = card.width;
    const cardHeight = card.height;
    const centerX = card.left + cardWidth / 2;
    const centerY = card.top + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // এঙ্গেলের মাত্রা (Tilt Intensity)
    const rotateX = (mouseY / (cardHeight / 2)) * -10; 
    const rotateY = (mouseX / (cardWidth / 2)) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  // মাউস সরিয়ে নিলে কার্ড আবার আগের জায়গায় ফিরে যাবে
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  // কার্ডে ক্লিক করলে কালেকশন পেজে নিয়ে যাবে
  const handleCardClick = () => {
    navigate('/collection'); 
  };

  return (
    /* 👑 ১. মেইন প্যারেন্ট সেকশন (উইথ মেইন ব্যাকগ্রাউন্ড ওয়াটারমার্ক) */
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-stone-100 via-amber-50/50 to-stone-100 flex justify-center items-center overflow-hidden select-none">
      
      {/* 💥 🌟 ১. পুরো সেকশনের ব্যাকগ্রাউন্ডে বিশাল বড় ওয়াটারমার্ক 🌟 💥 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <h1 className="text-[14vw] font-black uppercase tracking-tighter text-amber-900/[0.04] leading-none whitespace-nowrap transform rotate-2 scale-110">
          FASHION CLASSY
        </h1>
      </div>

      {/* 💳 2. 3D Container Card */}
      <div
        onClick={handleCardClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotate(-2deg)`,
          transition: rotate.x === 0 ? 'all 0.6s cubic-bezier(0.03, 0.98, 0.52, 0.99)' : 'none',
        }}
        className="relative max-w-3xl w-full bg-white/90 border border-amber-200 rounded-3xl p-8 sm:p-14 shadow-2xl shadow-amber-950/5 backdrop-blur-xl text-center group cursor-pointer overflow-hidden transform-gpu hover:border-amber-400 transition-all duration-300 z-10"
      >
        
        {/* 💥 🌟 ৩. কার্ডের নিজের ভেতরের ৩ডি ওয়াটারমার্ক (z-0 লেয়ার) 🌟 💥 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-amber-900/[0.06] leading-none whitespace-nowrap transform -rotate-3 group-hover:scale-110 group-hover:text-amber-900/[0.09] transition-all duration-500">
            FASHION CLASSY
          </h1>
        </div>

        {/* ভাসমান সফট গ্লো (কার্ডের ভেতরে) */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-200/60 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-300/80 transition-all duration-700 animate-pulse z-0"></div>
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-amber-300/50 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/70 transition-all duration-700 animate-pulse z-0"></div>

        {/* 👑 কার্ডের মেইন কন্টেন্ট (Front Layer - z-10) */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 font-serif">
          
          {/* ১ম লাইন */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-amber-950">
            Wear Pure Authentic Luxury.
          </h2>

          {/* ২য় লাইন */}
          <p className="text-xl sm:text-3xl lg:text-4xl italic text-amber-800/90 font-semibold tracking-wide transition-transform duration-500 group-hover:translate-y-1 group-hover:text-amber-600">
            Feel Classy Every Single Day.
          </p>

          {/* ব্যাজ */}
          <div className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs sm:text-sm font-sans font-semibold tracking-widest uppercase shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all duration-300">
            <span>✨</span>
            <span>Explore Original Collections →</span>
            <span>✨</span>
          </div>

        </div>

        {/* কার্ডের চারপাশের সফট গ্লাস বর্ডার */}
        <div className="absolute inset-0 rounded-3xl border border-amber-200/50 pointer-events-none group-hover:border-amber-300 transition-colors duration-500 z-10"></div>

      </div>

    </section>
  );
};

export default FooterBannerCard;