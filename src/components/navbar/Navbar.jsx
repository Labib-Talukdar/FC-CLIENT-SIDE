
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import logo from "../../assets/Fashion Classy.png"
import TopAnnouncementBar from '../announcement/TopAnnouncementBar';
 

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  
  // ================= 📜 স্মার্ট স্ক্রল স্টেট ও লজিক =================
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMiniNavbar, setIsMiniNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setIsVisible(true);
        setIsMiniNavbar(false); // ওপরে থাকলে ফুল ন্যাভবার
      } else {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // নিচে স্ক্রল করলে সম্পূর্ণ হাইড
        } else {
          setIsVisible(true);
          setIsMiniNavbar(true); // ওপরে স্ক্রল করলে শুধু মিনিবার (লিংকগুলো) দেখাবে
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // ক্যাটাগরি লিস্ট
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

  const handleCategoryClick = (category) => {
    setIsMobileMenuOpen(false);
    navigate(`/collection?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <nav 
        className={`w-full bg-white font-sans text-gray-900 border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0 shadow-sm" : "-translate-y-full"
        }`}
      >
        {/* ================= টপ লেভেল (Logo, Search & Icons) ================= */}
        {/* 🎯 মিনি ন্যাভবার হলে এই পুরো হাইট এবং এরিয়াটি ওপরে স্লাইড হয়ে স্মুথলি ডিলিট হবে */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
          isMiniNavbar ? "h-0 opacity-0 overflow-hidden pointer-events-none" : "h-20 opacity-100"
        }`}>
          <div className="flex justify-between items-center h-full relative">
            
            {/* মোবাইল মেনু বাটন (৩ বার আইকন) */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)} 
                className="text-gray-700 hover:text-black focus:outline-none p-1 cursor-pointer"
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* ফাকা ডিভ (ডেস্কটপে বামপাশ ব্যালেন্স করার জন্য) */}
            <div className="hidden md:block w-64"></div>

            {/* লোগো কন্টেইনার - একদম সেন্টারড পজিশন উইথ ইমেজ লোগো */}
            <div 
              className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer group select-none'
              onClick={() => navigate('/')}
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={logo}
                  alt="Logo" 
                  className='w-28 h-24 md:w-52 md:h-48 bg-white bg-blend-normal mx-auto p-2 md:p-4 object-contain'
                />
              </div>
            </div>

            {/* ডানের সেকশন: সার্চ বার এবং আইকনস */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* মিনিমালিস্ট সার্চ ইনপুট */}
              <div className="relative border-b border-gray-400 pb-1 hidden lg:flex items-center w-48">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent text-xs tracking-wider outline-none w-full pr-6 text-gray-700 placeholder-gray-400"
                />
                <Search size={15} strokeWidth={1.5} className="text-gray-500 absolute right-0 bottom-1" />
              </div>

              {/* উইশলিস্ট হার্ট আইকন */}
              <button className="text-gray-700 hover:text-black transition-colors p-1 hidden sm:block cursor-pointer">
                <Heart size={20} strokeWidth={1.2} />
              </button>

              {/* শপিং ব্যাগ/কার্ট আইকন উইথ ব্যাজ */}
              <button 
                onClick={() => setIsCartOpen(true)} 
                className="text-gray-700 hover:text-black transition-colors p-1 relative focus:outline-none cursor-pointer"
              >
                <ShoppingBag size={21} strokeWidth={1.3} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* ================= বটম মেনু (ডেস্কটপ) ================= */}
        {/* 🎯 ডেস্কটপে এটি যখন মিনি ন্যাভবার মোডে যাবে, তখন আরও স্লিম এবং প্যাডিং কম হয়ে যাবে */}
        <div className={`hidden md:block  border-gray-50 bg-white transition-all duration-300 ease-in-out ${
          isMiniNavbar ? "py-2.5 shadow-sm" : "py-4"
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-12 gap-y-2">
              {menuCategories?.map((category,index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  style={{
            animationDelay: `${index * 75}ms`,
            animationFillMode: 'forwards'
          }}

          className="opacity-0 translate-y-3 h-[25px] animate-navLink text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.18em] text-neutral-800 hover:text-[#b5832a] transition-colors relative group duration-300 whitespace-nowrap cursor-pointer"
                  // className="text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.18em] text-neutral-800 hover:text-[#b5832a] transition-colors relative group duration-300 whitespace-nowrap cursor-pointer"
                >
                  {category}
                  <span className="absolute bottom-[-5px] left-1/2 w-0 h-[1.5px] bg-[#b5832a] transition-all group-hover:w-full group-hover:left-0"></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 🎯 মোবাইল মোডে মিনি ন্যাভবার থাকাকালীন ৩-বার (মেনু আইকন) এবং কার্ট আইকন ভেসে থাকার জন্য কাস্টম ফ্লোটিং বার */}
        {isMiniNavbar && (
          <div className="flex md:hidden justify-between items-center h-14 px-4 transition-all duration-300">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="text-gray-700 hover:text-black focus:outline-none p-1 cursor-pointer"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
            
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-800">
              Fashion Classy
            </span>

            <button 
              onClick={() => setIsCartOpen(true)} 
              className="text-gray-700 hover:text-black transition-colors p-1 relative focus:outline-none cursor-pointer"
            >
              <ShoppingBag size={20} strokeWidth={1.3} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        )}
      </nav>

      {/* ================= 📱 স্লাইডিং মোবাইল সাইডবার মেনু ================= */}
      {/* ব্যাকড্রপ ওভারলে */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 z-50 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* বাম দিক থেকে স্লাইড হওয়া ড্রয়ার প্যানেল */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-out flex flex-col md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* সাইডবার হেডার */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-neutral-50">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-400 hover:text-black p-1 focus:outline-none cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* মোবাইল ক্যাটাগরি লিস্ট */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {menuCategories?.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="block w-full text-left text-[13px] font-medium tracking-widest uppercase text-neutral-700 hover:text-[#b5832a] hover:bg-neutral-50/80 px-3 py-3 rounded-sm transition-all border-b border-neutral-50/60 last:border-0 cursor-pointer"
            >
              {category}
            </button>
          ))}
        </div>
 
        {/* সাইডবার ফুটার */}
        <div className="p-5 border-t border-gray-100 text-center bg-neutral-50">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">✨ Luxury Clothing Brand</p>
        </div>

          

          <TopAnnouncementBar></TopAnnouncementBar>


      </div>
    </>
  );
};

export default Navbar;