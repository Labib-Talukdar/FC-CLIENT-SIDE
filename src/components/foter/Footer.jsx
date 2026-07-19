 import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
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

  return (
    // 🎯 ব্যাকগ্রাউন্ড হালকা গ্রে (bg-neutral-50) করা হয়েছে
    <footer className="w-full bg-neutral-50 text-gray-900 border-t border-gray-200 font-sans mt-20 select-none">
      
      {/* 👑 মেইন ৪-কলাম কন্টেইনার (প্রচুর স্পেস এবং বড় টেক্সট দেওয়া হয়েছে) */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 sm:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 lg:gap-20">
          
          {/* ================= ১. CONTACT US ================= */}
          <div className="space-y-5">
            <h3 className="text-[18px] font-bold uppercase tracking-[0.25em] text-black">
              Contact Us
            </h3>
            {/* 🎯 টেক্সট সাইজ বড় (text-[15px]) এবং স্পেসিং বাড়ানো হয়েছে */}
            <div className="space-y-2 text-[14px] lg:text-[17px] text-neutral-600 tracking-wider leading-relaxed">
              <div className="flex items-start gap-4">
                <FiMapPin size={20} className="text-neutral-800 mt-1 shrink-0" />
                <p>Khilkhet Dhaka, Dhaka,<br />Bangladesh 1229</p>
              </div>
              
              <div className="flex items-center gap-4 pt-2">
                <FiPhone size={18} className="text-neutral-800 shrink-0" />
                <a href="tel:+8801817313587" className="hover:text-black transition-colors">
                  +880 1817-313587
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FiMail size={18} className="text-neutral-800 shrink-0" />
                <a href="mailto:fashionclassy19@gmail.com" className="hover:text-black transition-colors break-all">
                  fashionclassy19@gmail.com
                </a>
              </div>
            </div>

            {/* সোশ্যাল আইকন ব্লক */}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all cursor-pointer shadow-sm">
                <FaFacebookF size={15} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all cursor-pointer shadow-sm">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all cursor-pointer shadow-sm">
                <FaYoutube size={17} />
              </a>
            </div>
          </div>

          {/* ================= ২. HELP ================= */}
          <div className="space-y-5">
            <h3 className="text-[18px] font-bold uppercase tracking-[0.25em] text-black">
              Help
            </h3>
            {/* 🎯 লিংকের টেক্সট বড় এবং গ্যাপ বাড়ানো হয়েছে */}
            <ul className="space-y-2 text-[14px] lg:text-[18px] font-medium tracking-widest text-neutral-600">
              <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">Customer Support</a></li>
              <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">Shipping Information</a></li>
              <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">Exchange Policy</a></li>
              <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">Terms And Conditions</a></li>
            </ul>
          </div>

          {/* ================= ৩. SHOP ================= */}
          <div className="space-y-5">
            <h3 className="text-[18px] font-bold uppercase tracking-[0.25em] text-black">
              Shop
            </h3>
            <ul className="space-y-2 text-[14px] lg:text-[17px] font-medium tracking-widest text-neutral-600">
              {menuCategories?.map((category) => (
                <li key={category}>
                  <a 
                    href={`/collection?category=${encodeURIComponent(category)}`}
                    className="hover:text-[#b5832a] transition-colors block py-1"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= ৪. ABOUT ================= */}
          <div className="space-y-5">
            <h3 className="text-[18px] font-bold uppercase tracking-[0.25em] text-black">
              About
            </h3>
            <ul className="space-y-2 text-[14px] lg:text-[17px] font-semibold tracking-widest text-neutral-600">
              <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">About Us</a></li>
              <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">FAQ's</a></li>
              <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">Find Us</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= 🔒 কপিরাইট বটম বার ================= */}
      {/* 🎯 মেইন গ্রে থেকে আলাদা করতে বটম বারটিকে সাদা করা হয়েছে */}
      <div className="w-full border-t border-gray-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[12px] sm:text-[13px] font-semibold text-neutral-500 uppercase tracking-[0.25em]">
            Copyright © 2026 <span className="text-black font-bold">LABIB TALUKDAR</span>. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;