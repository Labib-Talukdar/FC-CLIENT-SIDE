// import React, { useState } from 'react';
// import { ShoppingBag, Search, Menu, X, ArrowRight, Heart } from 'lucide-react';

// const Home = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // আপনার দেওয়া নিখুঁত কালেকশন লিস্ট
//   const collections = [
//     { id: 1, name: 'Organza Items', tag: 'Luxury Embroidered', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80' },
//     { id: 2, name: 'Chiffon Items', tag: 'Elegant Formals', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80' },
//     { id: 3, name: 'Gawn Collections', tag: 'Royal Silhouettes', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80' },
//     { id: 4, name: 'Chiffon 2pis', tag: 'Classic Wear', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80' },
//     { id: 5, name: 'Mona Embroidery', tag: 'Signature Heritage', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80' },
//     { id: 6, name: 'Semi Bridal Boutique', tag: 'Festive Glamour', image: 'https://images.unsplash.com/photo-1614495088860-a3416975fe1a?auto=format&fit=crop&w=600&q=80' },
//     { id: 7, name: 'Cotton Collections', tag: 'Daily Premium', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80' },
//     { id: 8, name: 'Kids Collections', tag: 'Little Royals', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80' }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-stone-900 selection:bg-stone-100 selection:text-stone-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
//       {/* ১. আঘা নূর টপ অ্যানাউন্সমেন্ট বার */}
//       <div className="w-full bg-[#1c1c1c] text-[#f4efe6] text-[10px] tracking-[0.25em] uppercase py-2 text-center font-light border-b border-stone-800">
//         Complimentary Shipping on All Premium Domestic Orders
//       </div>

//       {/* ২. মেইন লাক্সারি নেভিগেশন বার */}
//       <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
            
//             {/* মোবাইল মেনু বাটন */}
//             <div className="flex items-center md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-700 hover:text-stone-900 focus:outline-none">
//                 {isMenuOpen ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
//               </button>
//             </div>

//             {/* বামের ক্যাটাগরি মেনু (Desktop Only) - ক্লাসি থিন লুক */}
//             <div className="hidden md:flex space-x-6 lg:space-x-8 text-[11px] tracking-[0.2em] uppercase font-medium text-stone-600">
//               <a href="#new" className="hover:text-stone-950 transition-colors py-2 relative group">
//                 New Arrivals
//                 <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-stone-950 transition-all group-hover:w-full"></span>
//               </a>
//               <a href="#collections" className="hover:text-stone-950 transition-colors py-2 relative group text-stone-950 font-semibold">
//                 Collections
//               </a>
//               <a href="#boutique" className="hover:text-stone-950 transition-colors py-2 relative group">
//                 Ready To Wear
//               </a>
//             </div>

//             {/* লোগো সেন্টারড (আঘা নূরের মূল সিগনেচার স্টাইল) */}
//             <div className="text-center">
//               <a href="/" className="text-2xl sm:text-3xl tracking-[0.3em] uppercase font-light text-stone-950" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//                 AGHA<span className="font-medium text-stone-800">NOOR</span>
//               </a>
//               <p className="text-[7px] tracking-[0.4em] text-stone-400 uppercase -mt-1 pl-1">Official Studio</p>
//             </div>

//             {/* ডানের ইউটিলিটি আইকনস */}
//             <div className="flex items-center space-x-4 sm:space-x-6 text-stone-700">
//               <button className="hover:text-stone-950 transition-colors focus:outline-none p-1 hidden sm:block">
//                 <Search size={19} strokeWidth={1.2} />
//               </button>
//               <button className="hover:text-stone-950 transition-colors focus:outline-none p-1">
//                 <Heart size={19} strokeWidth={1.2} />
//               </button>
//               <button className="hover:text-stone-950 transition-colors focus:outline-none p-1 relative">
//                 <ShoppingBag size={19} strokeWidth={1.2} />
//                 <span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-light">0</span>
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* মোবাইল ড্রপডাউন মেনু */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-stone-100 bg-white px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
//             {collections.map((item) => (
//               <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} className="block text-[12px] tracking-[0.15em] uppercase text-stone-700 hover:text-stone-950">
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* ৩. হিরো ব্যানার সেকশন (Minimal Aesthetic) */}
//       <header className="relative bg-stone-50 overflow-hidden border-b border-stone-200">
//         <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8 min-h-[70vh]">
//           <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:col-span-5 lg:py-24 xl:py-32">
//             <span className="text-[10px] tracking-[0.3em] text-stone-400 uppercase font-medium mb-3 block">Luxury Pret '26</span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide font-light text-stone-950 leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//               Timeless Outfits <br /><span className="italic font-serif font-normal">Crafted with Grace</span>
//             </h1>
//             <p className="text-xs text-stone-500 tracking-wide font-light max-w-sm leading-relaxed mb-8">
//               Explore our curated Organza, fine Chiffon embroidery, and bespoke bridal concepts tailored for absolute sophistication.
//             </p>
//             <div>
//               <a href="#collections" className="inline-flex items-center space-x-3 border-b border-stone-950 pb-2 text-[11px] tracking-[0.25em] uppercase font-medium text-stone-900 hover:text-stone-600 hover:border-stone-400 transition-all group">
//                 <span>View Collections</span>
//                 <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//           <div className="relative lg:col-span-7 h-80 sm:h-96 lg:h-full">
//             <img 
//               className="absolute inset-0 w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000" 
//               src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" 
//               alt="Agha noor luxury boutique setup" 
//             />
//           </div>
//         </div>
//       </header>

//       {/* ৪. আপনার কালেকশন গ্রিড সেকশন (The Core Grid) */}
//       <main id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl tracking-widest font-light text-stone-950 uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//             Shop By Collection
//           </h2>
//           <div className="h-[1px] w-12 bg-stone-400 mx-auto mt-4"></div>
//         </div>

//         {/* ২ কলাম (মোবাইল) এবং ৪ কলাম (ডেস্কটপ) সিমেট্রিক লাক্সারি গ্রিড */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14">
//           {collections.map((item) => (
//             <div key={item.id} className="group cursor-pointer">
//               {/* ইমেজ কন্টেইনার উইথ থিন আঘা নূর বর্ডার */}
//               <div className="relative overflow-hidden aspect-[3/4] bg-stone-100 border border-stone-100 mb-4">
//                 <img 
//                   src={item.image} 
//                   alt={item.name} 
//                   className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               </div>
              
//               {/* টেক্সট এলাইনমেন্ট এবং টাইপোগ্রাফি */}
//               <div className="text-center px-1">
//                 <p className="text-[9px] tracking-[0.2em] uppercase text-stone-400 font-light mb-1">
//                   {item.tag}
//                 </p>
//                 <h3 className="text-sm sm:text-base tracking-wider font-normal text-stone-900 group-hover:text-stone-600 transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//                   {item.name}
//                 </h3>
//                 <div className="mt-2 text-[10px] tracking-[0.15em] uppercase text-stone-400 inline-block border-b border-transparent group-hover:border-stone-400 group-hover:text-stone-900 transition-all duration-300">
//                   Discover Now
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* ৫. ফুটার (Classic Clean Footer) */}
//       <footer className="bg-stone-50 border-t border-stone-200 py-12 text-center">
//         <p className="text-lg sm:text-xl tracking-[0.3em] uppercase font-light text-stone-950 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//           AGHA<span className="font-medium text-stone-800">NOOR</span>
//         </p>
//         <p className="text-[10px] tracking-widest text-stone-400 uppercase font-light">
//           © {new Date().getFullYear()} Studio Pret. All Rights Reserved.
//         </p>
//       </footer>

//     </div>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
    return (
        <div>
            
        </div>
    );
};

export default Home;