import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // আপনার দেওয়া নিখুঁত ক্যাটাগরি লিস্ট
  const menuCategories = [
    "Organza Items",
    "Chiffon Items",
    "Gawn Collections",
    "Chiffon 2pis",
    "Mona Embroidery",
    "Semi Bridal Boutique",
    "Cotton Collections",
    "Kids Collections"
  ];

  // ন্যাভবারে ক্লিক করলে কালেকশন পেজে কুয়েরি প্যারামিটারসহ পাঠিয়ে দেবে
  const handleCategoryClick = (category) => {
    setIsMobileMenuOpen(false);
    // শপ/কালেকশন পেজের রাউট যদি '/collections' বা '/shop' হয়, সেই অনুযায়ী পাথ দিন
    navigate(`/collection?category=${encodeURIComponent(category)}`);
  };

  return (
    <nav className="w-full bg-white font-sans text-gray-900 border-b border-gray-100 sticky top-0 z-50">
      
      {/* ================= টপ লেভেল (Logo, Search & Icons) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          
          {/* মোবাইল মেনু বাটন (Left on Mobile) */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>

          {/* ফাকা ডিভ (ডেস্কটপে বামপাশ ব্যালেন্স করার জন্য) */}
          <div className="hidden md:block w-64"></div>

          {/* সেন্টারড লাক্সারি লোগো (হুবহু স্ক্রিনশটের মতো ফিল) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center cursor-pointer" onClick={() => navigate('/')}>
            <h1 className="text-2xl sm:text-3xl tracking-[0.25em] font-light text-[#cda052] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              AGHA <span className="font-medium text-[#b5832a]">NOOR</span>
            </h1>
            <div className="w-6 h-[1px] bg-[#b5832a] mx-auto mt-0.5"></div>
          </div>

          {/* ডানের সেকশন: আন্ডারলাইনড সার্চ বার এবং আইকনস */}
          <div className="flex items-center space-x-6">
            {/* মিনিমালিস্ট সার্চ ইনপুট (স্ক্রিনশটের মতো হুবহু আন্ডারলাইনড) */}
            <div className="relative border-b border-gray-400 pb-1 hidden lg:flex items-center w-48">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent text-xs tracking-wider outline-none w-full pr-6 text-gray-700 placeholder-gray-400"
              />
              <Search size={15} strokeWidth={1.5} className="text-gray-500 absolute right-0 bottom-1" />
            </div>

            {/* উইশলিস্ট হার্ট আইকন */}
            <button className="text-gray-700 hover:text-black transition-colors p-1 hidden sm:block">
              <Heart size={20} strokeWidth={1.2} />
            </button>

            {/* শপিং ব্যাগ/কার্ট আইকন উইথ ব্যাজ */}
            <button className="text-gray-700 hover:text-black transition-colors p-1 relative">
              <ShoppingBag size={20} strokeWidth={1.2} />
              <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-mono font-light">
                
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* ================= বটম লেভেল (সেন্টারড মেনু আইটেমস - ডেস্কটপ) ================= */}
      <div className="hidden md:block border-t border-gray-50 py-3.5 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-6 lg:gap-x-10 gap-y-2">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="text-[11px] lg:text-[12px] font-medium uppercase tracking-[0.15em] text-gray-800 hover:text-[#b5832a] transition-colors relative group duration-300 whitespace-nowrap"
              >
                {category}
                {/* নিচে হালকা হোভার অ্যানিমেশন লাইন */}
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1.5px] bg-[#b5832a] transition-all group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 shadow-inner animate-fadeIn">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="block w-full text-left text-xs font-medium tracking-widest uppercase text-gray-700 hover:text-[#b5832a] py-1.5 border-b border-gray-50"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;