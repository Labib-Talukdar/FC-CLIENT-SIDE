import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className="bg-black text-white text-xs sm:text-sm py-2.5 overflow-hidden border-b border-gray-800 whitespace-nowrap select-none font-sans tracking-wide">
      <div className="animate-marquee uppercase font-semibold">
        
        <span className="mx-8 inline-flex items-center gap-2">
          ✨ ELEGANCE IS PURE — <strong className="text-amber-400 font-bold">100% ORIGINAL PAKISTANI COLLECTIONS</strong> ONLY
        </span>
        
        <span className="mx-8 inline-flex items-center gap-2">
          💎 NO MASTER COPIES — <span className="text-amber-300">AUTHENTIC & EXCLUSIVE DESIGNER WEAR</span>
        </span>
        
        <span className="mx-8 inline-flex items-center gap-2">
          🛍️ WHOLESALE & RETAIL AVAILABLE — <span className="text-amber-300">PREMIUM FASHION CLASSY EXPERIENCE</span>
        </span>

        {/* লুপ স্মুথ রাখার জন্য রিপিট অংশ */}
        <span className="mx-8 inline-flex items-center gap-2">
          ✨ ELEGANCE IS PURE — <strong className="text-amber-400 font-bold">100% ORIGINAL PAKISTANI COLLECTIONS</strong> ONLY
        </span>
        
        <span className="mx-8 inline-flex items-center gap-2">
          💎 Fashion Classy: <span className="text-amber-300">Wear authentic luxury, feel classy every single day</span>
            
        </span>

        <span className="mx-8 inline-flex items-center gap-2">
          🛍️ WHOLESALE & RETAIL AVAILABLE — <span className="text-amber-300">PREMIUM FASHION CLASSY EXPERIENCE</span>
        </span>

      </div>
    </div>
  );
};

export default AnnouncementBar;