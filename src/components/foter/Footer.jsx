//  import React from 'react';
// import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   const menuCategories = [
//     "Organza Items",
//     "Chiffon Items",
//     "Gawn Collections",
//     "Chiffon 2pis",
//     "Mona Embroidery",
//     "Semi Bridal Boutique",
//     "Cotton Collections",
//     "Kids Collections"
//   ];

//   return (
//     // 🎯 ব্যাকগ্রাউন্ড হালকা গ্রে (bg-neutral-50) করা হয়েছে
//     <footer className="w-full bg-neutral-50 text-gray-900 border-t border-gray-200 font-sans mt-20 select-none">
      
//       {/* 👑 মেইন ৪-কলাম কন্টেইনার (প্রচুর স্পেস এবং বড় টেক্সট দেওয়া হয়েছে) */}
//       <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 sm:py-28">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 lg:gap-20">
          
//           {/* ================= ১. CONTACT US ================= */}
//           <div className="space-y-5">
//             <h3 className="text-[18px] font-bold uppercase tracking-[0.25em] text-black">
//               Contact Us
//             </h3>
//             {/* 🎯 টেক্সট সাইজ বড় (text-[15px]) এবং স্পেসিং বাড়ানো হয়েছে */}
//             <div className="space-y-2 text-[14px] lg:text-[17px] text-neutral-600 tracking-wider leading-relaxed">
//               <div className="flex items-start gap-4">
//                 <FiMapPin size={20} className="text-neutral-800 mt-1 shrink-0" />
//                 <p>Khilkhet Dhaka, Dhaka,<br />Bangladesh 1229</p>
//               </div>
              
//               <div className="flex items-center gap-4 pt-2">
//                 <FiPhone size={18} className="text-neutral-800 shrink-0" />
//                 <a href="tel:+8801817313587" className="hover:text-black transition-colors">
//                   +880 1817-313587
//                 </a>
//               </div>

//               <div className="flex items-center gap-4">
//                 <FiMail size={18} className="text-neutral-800 shrink-0" />
//                 <a href="mailto:fashionclassy19@gmail.com" className="hover:text-black transition-colors break-all">
//                   fashionclassy19@gmail.com
//                 </a>
//               </div>
//             </div>

//             {/* সোশ্যাল আইকন ব্লক */}
//             <div className="flex items-center gap-4 pt-4">
//               <a href="#" className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all cursor-pointer shadow-sm">
//                 <FaFacebookF size={15} />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all cursor-pointer shadow-sm">
//                 <FaInstagram size={16} />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all cursor-pointer shadow-sm">
//                 <FaYoutube size={17} />
//               </a>
//             </div>
//           </div>

//           {/* ================= ২. HELP ================= */}
//           <div className="space-y-5">
//             <h3 className="text-[18px] font-bold uppercase tracking-[0.25em] text-black">
//               Help
//             </h3>
//             {/* 🎯 লিংকের টেক্সট বড় এবং গ্যাপ বাড়ানো হয়েছে */}
//             <ul className="space-y-2 text-[14px] lg:text-[18px] font-medium tracking-widest text-neutral-600">
//               <li><a href="/customer/support" className="hover:text-[#b5832a] transition-colors block py-1">Customer Support</a></li>
//               <li><a href="/exchange-policy" className="hover:text-[#b5832a] transition-colors block py-1">Shipping Information</a></li>
//               <li><a href="/shipping-info" className="hover:text-[#b5832a] transition-colors block py-1">Exchange Policy</a></li>
//               <li><a href="/terms-conditions" className="hover:text-[#b5832a] transition-colors block py-1">Terms And Conditions</a></li>
//             </ul>
//           </div>

//           {/* ================= ৩. SHOP ================= */}
//           <div className="space-y-5">
//             <h3 className="text-[18px] font-bold uppercase tracking-[0.25em] text-black">
//               Shop
//             </h3>
//             <ul className="space-y-2 text-[14px] lg:text-[17px] font-medium tracking-widest text-neutral-600">
//               {menuCategories?.map((category) => (
//                 <li key={category}>
//                   <a 
//                     href={`/collection?category=${encodeURIComponent(category)}`}
//                     className="hover:text-[#b5832a] transition-colors block py-1"
//                   >
//                     {category}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= ৪. ABOUT ================= */}
//           <div className="space-y-5">
//             <h3 className="text-[18px] font-bold uppercase tracking-[0.25em] text-black">
//               About
//             </h3>
//             <ul className="space-y-2 text-[14px] lg:text-[17px] font-semibold tracking-widest text-neutral-600">
//               <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">About Us</a></li>
//               <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">FAQ's</a></li>
//               <li><a href="#" className="hover:text-[#b5832a] transition-colors block py-1">Find Us</a></li>
//             </ul>
//           </div>

//         </div>
//       </div>

//       {/* ================= 🔒 কপিরাইট বটম বার ================= */}
//       {/* 🎯 মেইন গ্রে থেকে আলাদা করতে বটম বারটিকে সাদা করা হয়েছে */}
//       <div className="w-full border-t border-gray-200 bg-white py-8">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <p className="text-[12px] sm:text-[13px] font-semibold text-neutral-500 uppercase tracking-[0.25em]">
//             Copyright © 2026 <span className="text-black font-bold">LABIB TALUKDAR</span>. All rights reserved.
//           </p>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;



























// import React from 'react';
// import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
// import footerBgImg from '../../assets/fashion classy-ft.png'

// const Footer = () => {
//   const menuCategories = [
//     "Organza Items",
//     "Chiffon Items",
//     "Gawn Collections",
//     "Chiffon 2pis",
//     "Mona Embroidery",
//     "Semi Bridal Boutique",
//     "Cotton Collections",
//     "Kids Collections"
//   ];

//   return (
//     <footer className="relative w-full text-white font-sans mt-20 select-none overflow-hidden">
      
//       {/* 🖼️ 1. BACKGROUND IMAGE (Easy Fashion এর মতো ব্যাকগ্রাউন্ড ছবি) */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
//         // style={{
           
//         //   backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop')`,
//         // }}
        
        
//       >
//         {/* ডার্ক ওভারলে যাতে টেক্সটগুলো স্পষ্ট দেখা যায় */}
//         <img src={footerBgImg} alt="" />
//         <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
//       </div>

//       {/* 📐 2. ANGLED TOP SHAPE (Easy Fashion এর মতো ওপরের কাট শেপ) */}
//       <div 
//         className="w-full h-12 sm:h-16 bg-white"
//         style={{
//           clipPath: "polygon(0 0, 100% 60%, 100% 0, 0 0)",
//         }}
//       ></div>

//       {/* 👑 3. MAIN GLASSMORPHISM CARDS CONTAINER */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 relative z-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
//           {/* ================= CARD 1: CONTACT US ================= */}
//           <div className="bg-black/60 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-between">
//             <div className="space-y-5">
//               <h3 className="text-[16px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10 pb-3">
//                 Contact Us
//               </h3>
              
//               <div className="space-y-4 text-[14px] text-gray-200 tracking-wider leading-relaxed">
//                 <div className="flex items-start gap-3">
//                   <FiMapPin size={18} className="text-amber-400 mt-1 shrink-0" />
//                   <p>Khilkhet Dhaka, Dhaka,<br />Bangladesh 1229</p>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   <FiPhone size={18} className="text-amber-400 shrink-0" />
//                   <a href="tel:+8801817313587" className="hover:text-amber-400 transition-colors">
//                     +880 1817-313587
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FiMail size={18} className="text-amber-400 shrink-0" />
//                   <a href="mailto:fashionclassy19@gmail.com" className="hover:text-amber-400 transition-colors break-all">
//                     fashionclassy19@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* সোশ্যাল আইকন */}
//             <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6">
//               <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
//                 <FaFacebookF size={14} />
//               </a>
//               <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
//                 <FaInstagram size={15} />
//               </a>
//               <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
//                 <FaYoutube size={15} />
//               </a>
//             </div>
//           </div>

//           {/* ================= CARD 2: HELP ================= */}
//           <div className="bg-black/60 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl">
//             <h3 className="text-[16px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10 pb-3 mb-5">
//               Help
//             </h3>
//             <ul className="space-y-3 text-[14px] font-medium tracking-wide text-gray-200">
//               <li><a href="/customer/support" className="hover:text-amber-400 transition-colors block py-1">Customer Support</a></li>
//               <li><a href="/exchange-policy" className="hover:text-amber-400 transition-colors block py-1">Shipping Information</a></li>
//               <li><a href="/shipping-info" className="hover:text-amber-400 transition-colors block py-1">Exchange Policy</a></li>
//               <li><a href="/terms-conditions" className="hover:text-amber-400 transition-colors block py-1">Terms And Conditions</a></li>
//             </ul>
//           </div>

//           {/* ================= CARD 3: SHOP ================= */}
//           <div className="bg-black/60 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl">
//             <h3 className="text-[16px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10 pb-3 mb-5">
//               Shop
//             </h3>
//             <ul className="space-y-2 text-[14px] font-medium tracking-wide text-gray-200">
//               {menuCategories?.map((category) => (
//                 <li key={category}>
//                   <a 
//                     href={`/collection?category=${encodeURIComponent(category)}`}
//                     className="hover:text-amber-400 transition-colors block py-0.5"
//                   >
//                     {category}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= CARD 4: ABOUT ================= */}
//           <div className="bg-black/60 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl">
//             <h3 className="text-[16px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10 pb-3 mb-5">
//               About
//             </h3>
//             <ul className="space-y-3 text-[14px] font-semibold tracking-wide text-gray-200">
//               <li><a href="#" className="hover:text-amber-400 transition-colors block py-1">About Us</a></li>
//               <li><a href="#" className="hover:text-amber-400 transition-colors block py-1">FAQ's</a></li>
//               <li><a href="#" className="hover:text-amber-400 transition-colors block py-1">Find Us</a></li>
//             </ul>
//           </div>

//         </div>
//       </div>

//       {/* ================= 🔒 4. COPYRIGHT BOTTOM BAR ================= */}
//       <div className="w-full bg-black/80 backdrop-blur-md py-6 border-t border-white/10 relative z-10">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <p className="text-[12px] sm:text-[13px] font-semibold text-gray-400 uppercase tracking-[0.25em]">
//             Copyright © 2026 <span className="text-white font-bold">LABIB TALUKDAR</span>. All rights reserved.
//           </p>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;
















import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

// 🖼️ আপনার প্রজেক্টের ব্যাকগ্রাউন্ড ইমেজের সঠিক Path টা এখানে দিন
import footerBg from '../../assets/fashion classy-ft.png'; // Path টা আপনার ফোল্ডার অনুযায়ী চেঞ্জ করে নিন

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
    <footer className="relative w-full text-white font-sans mt-24 select-none overflow-hidden">
      
      {/* 🖼️ 1. FIXED / STATIC BACKGROUND IMAGE (পেইজ স্ক্রোল করলেও ফটো ফিক্সড থাকবে) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        {/* ব্যাকগ্রাউন্ড ওভারলে (অন্ধকার ও হালকা ব্লার) */}
        <div className="absolute inset-0  "></div>
      </div>

      {/* 📐 2. ANGLED TOP SHAPE */}
      <div 
        className="w-full h-14 sm:h-20 bg-white"
        style={{
          clipPath: "polygon(0 50, 100% 50%, 100% 0, 0 0)",
        }}
      ></div>

      {/* 👑 3. MAIN LARGER GLASSMORPHISM CARDS CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* ================= CARD 1: CONTACT US ================= */}
          <div className="bg-black/65 backdrop-blur-lg p-8 lg:p-10 rounded-3xl border border-white/15 shadow-2xl flex flex-col justify-between hover:border-white/30 transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-[20px] lg:text-[22px] font-bold uppercase tracking-[0.25em] text-white border-b border-white/15 pb-4">
                Contact Us
              </h3>
              
              <div className="space-y-5 text-[16px] lg:text-[18px] text-gray-200 tracking-wider leading-relaxed">
                <div className="flex items-start gap-4">
                  <FiMapPin size={22} className="text-amber-400 mt-1 shrink-0" />
                  <p>Khilkhet Dhaka, Dhaka,<br />Bangladesh 1229</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <FiPhone size={20} className="text-amber-400 shrink-0" />
                  <a href="tel:+8801817313587" className="hover:text-amber-400 transition-colors font-medium">
                    +880 1817-313587
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FiMail size={20} className="text-amber-400 shrink-0" />
                  <a href="mailto:fashionclassy19@gmail.com" className="hover:text-amber-400 transition-colors break-all font-medium">
                    fashionclassy19@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* সোশ্যাল আইকন */}
            <div className="flex items-center gap-4 pt-8 border-t border-white/15 mt-8">
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md">
                <FaFacebookF size={17} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* ================= CARD 2: HELP ================= */}
          <div className="bg-black/65 backdrop-blur-lg p-8 lg:p-10 rounded-3xl border border-white/15 shadow-2xl hover:border-white/30 transition-all duration-300">
            <h3 className="text-[20px] lg:text-[22px] font-bold uppercase tracking-[0.25em] text-white border-b border-white/15 pb-4 mb-6">
              Help
            </h3>
            <ul className="space-y-4 text-[16px] lg:text-[18px] font-medium tracking-wide text-gray-200">
              <li><a href="/customer/support" className="hover:text-amber-400 transition-colors block py-1">Customer Support</a></li>
              <li><a href="/exchange-policy" className="hover:text-amber-400 transition-colors block py-1">Shipping Information</a></li>
              <li><a href="/shipping-info" className="hover:text-amber-400 transition-colors block py-1">Exchange Policy</a></li>
              <li><a href="/terms-conditions" className="hover:text-amber-400 transition-colors block py-1">Terms And Conditions</a></li>
            </ul>
          </div>

          {/* ================= CARD 3: SHOP ================= */}
          <div className="bg-black/65 backdrop-blur-lg p-8 lg:p-10 rounded-3xl border border-white/15 shadow-2xl hover:border-white/30 transition-all duration-300">
            <h3 className="text-[20px] lg:text-[22px] font-bold uppercase tracking-[0.25em] text-white border-b border-white/15 pb-4 mb-6">
              Shop
            </h3>
            <ul className="space-y-3 text-[15px] lg:text-[17px] font-medium tracking-wide text-gray-200">
              {menuCategories?.map((category) => (
                <li key={category}>
                  <a 
                    href={`/collection?category=${encodeURIComponent(category)}`}
                    className="hover:text-amber-400 transition-colors block py-1"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CARD 4: ABOUT ================= */}
          <div className="bg-black/65 backdrop-blur-lg p-8 lg:p-10 rounded-3xl border border-white/15 shadow-2xl hover:border-white/30 transition-all duration-300">
            <h3 className="text-[20px] lg:text-[22px] font-bold uppercase tracking-[0.25em] text-white border-b border-white/15 pb-4 mb-6">
              About
            </h3>
            <ul className="space-y-4 text-[16px] lg:text-[18px] font-semibold tracking-wide text-gray-200">
              <li><a href="#" className="hover:text-amber-400 transition-colors block py-1">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors block py-1">FAQ's</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors block py-1">Find Us</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= 🔒 4. COPYRIGHT BOTTOM BAR ================= */}
      <div className="w-full bg-black/85 backdrop-blur-md py-8 border-t border-white/15 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[13px] sm:text-[15px] font-semibold text-gray-300 uppercase tracking-[0.25em]">
            Copyright © 2026 <span className="text-white font-bold">Fashion Classy</span>. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;