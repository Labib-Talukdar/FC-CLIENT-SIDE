// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// // 🎯 আপনার দেখানো কাস্টম হুক ইম্পোর্ট
// import { useCart } from '../../context/CartContext'; 

// import 'swiper/css';
// import 'swiper/css/navigation';

// const TrendingNow = () => {
//   const [products, setProducts] = useState([]);
//   const [activeItem, setActiveItem] = useState("READY TO WEAR");
//   const navigate = useNavigate();
  
//   // 🎯 useContext-এর বদলে সরাসরি useCart() থেকে ফাংশনটি বের করে নিলাম
//   const { addToCart } = useCart(); 

//   const [activeQuickAddId, setActiveQuickAddId] = useState(null);
//   const [selectedQuickSize, setSelectedQuickSize] = useState("");
//   const [selectedQuickColor, setSelectedQuickColor] = useState("");

//   const trendingItem = [
//     "Organza Items",
//     "Chiffon 2pis",
//     "Kids Collections"
//   ];

//   // API থেকে ডেটা আনা
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         if (response.data && response.data.data) {
//           setProducts(response.data.data);
//         } else if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // কার্ট হ্যান্ডলার
//   const handleAddToCart = (product) => {
//     addToCart(product, 1, selectedQuickSize, selectedQuickColor);
//     setActiveQuickAddId(null); 
//   };

//   // ফিল্টারিং লজিক
//   const displayProducts = activeItem === "READY TO WEAR"
//     ? (Array.isArray(products) ? products : [])
//     : (Array.isArray(products) ? products : []).filter(product => {
//         if (!product.category) return false;
//         const prodCat = product.category.toLowerCase().trim();
//         if (activeItem === "Organza Items") return prodCat.includes("organza");
//         if (activeItem === "Chiffon 2pis") return prodCat.includes("chiffon");
//         if (activeItem === "Kids Collections") return prodCat.includes("kids") || prodCat.includes("child");
//         return prodCat === activeItem.toLowerCase().trim();
//       });

//   return (
//     <div className=" max-w-7xl mx-auto px-4 py-12 bg-white font-sans selection:bg-neutral-100">
      
//       {/* ১. হেডার টাইটেল */}
//       <div className="flex items-center justify-center gap-4 mb-6">
//         <div className="h-[1px] bg-gray-300 flex-1 hidden sm:block"></div>
//         <h1 className="text-2xl font-bold tracking-[0.3em] text-black uppercase whitespace-nowrap">
//           Trending Now
//         </h1>
//         <div className="h-[1px] bg-gray-300 flex-1 hidden sm:block"></div>
//       </div>

//       {/* ২. ক্যাটাগরি ট্যাব */}
//       <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10 w-auto text-xs tracking-widest font-semibold text-gray-400">
//         <button
//           onClick={() => setActiveItem("READY TO WEAR")}
//           className={`px-3 py-1.5 transition-all duration-200 uppercase cursor-pointer ${
//             activeItem === "READY TO WEAR" ? "bg-neutral-100 text-black font-bold" : "hover:text-black"
//           }`}
//         >
//           READY TO WEAR
//         </button>
//         <span className="text-gray-300 select-none">/</span>

//         {trendingItem.map((item, idx) => (
//           <React.Fragment key={item}>
//             <button
//               onClick={() => setActiveItem(item)}
//               className={`px-3 py-1.5 transition-all duration-200 uppercase cursor-pointer ${
//                 activeItem === item ? "bg-neutral-100 text-black font-bold" : "hover:text-black"
//               }`}
//             >
//               {item}
//             </button>
//             {idx < trendingItem.length - 1 && <span className="text-gray-300 select-none">/</span>}
//           </React.Fragment>
//         ))}
//       </div>

//       {/* ৩. প্রিমিয়াম লুপ স্লাইডার কন্টেইনার */}
//       <div className="relative group/slider-container">
        
//         {/* কাস্টম প্রিমিয়াম লেফট অ্যারো */}
//         <button className="custom-prev absolute left-2 top-[40%] -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-neutral-200 bg-white/95 backdrop-blur-sm flex items-center justify-center text-black shadow-md opacity-0 group-hover/slider-container:opacity-100 transition-all duration-300 hover:bg-black hover:text-white cursor-pointer text-sm font-bold">
//           ❮
//         </button>

//         {/* কাস্টম প্রিমিয়াম রাইট অ্যারো */}
//         <button className="custom-next absolute right-2 top-[40%] -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-neutral-200 bg-white/95 backdrop-blur-sm flex items-center justify-center text-black shadow-md opacity-0 group-hover/slider-container:opacity-100 transition-all duration-300 hover:bg-black hover:text-white cursor-pointer text-sm font-bold">
//           ❯
//         </button>

//         {displayProducts?.length > 0 ? (
//           <Swiper
//             modules={[Navigation]}
//             navigation={{
//               nextEl: '.custom-next',
//               prevEl: '.custom-prev',
//             }}
//             loop={displayProducts.length >= 4} 
//             spaceBetween={16}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//             }}
//             className="w-full"
//           >
//             {displayProducts.map((product) => {
//               const isQuickAddOpen = activeQuickAddId === product._id;

//               return (
//                 <SwiperSlide key={product._id}>
//                   <div className="group flex flex-col bg-white relative w-full">
                    
//                     {/* ইমেজ এবং কুইক অ্যাড এরিয়া */}
//                     <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3 border border-gray-100">
                      
//                       <img
//                         src={`${import.meta.env.VITE_API_URL}${product.mainImage}`}
//                         alt={product.title}
//                         onClick={() => navigate(`/product/${product._id}`)}
//                         className="w-full h-full object-cover object-top cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
//                       />

//                       {product.inStock === false && (
//                         <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
//                           Sold Out
//                         </span>
//                       )}

//                       {/* কুইক অ্যাড বাটন */}
//                       {!isQuickAddOpen && (
//                         <button
//                           disabled={product.inStock === false}
//                           onClick={() => {
//                             setActiveQuickAddId(product._id);
//                             setSelectedQuickSize(product.sizes?.[0] || "");
//                             setSelectedQuickColor(product.colors?.[0] || "");
//                           }}
//                           className={`absolute bottom-0 left-0 w-full text-[11px] tracking-[0.2em] uppercase py-3 font-medium transition-transform duration-300 ease-in-out cursor-pointer z-20 ${
//                             product.inStock === false
//                               ? "bg-gray-300 text-gray-500 cursor-not-allowed transform translate-y-full group-hover:translate-y-0"
//                               : "bg-black/80 text-white transform translate-y-full group-hover:translate-y-0 hover:bg-neutral-900"
//                           }`}
//                         >
//                           {product.inStock === false ? "Sold Out" : "Quick Add"}
//                         </button>
//                       )}

//                       {/* সাইজ/কালার সিলেক্ট করার ওভারলে */}
//                       {isQuickAddOpen && (
//                         <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 flex flex-col justify-between z-30 animate-fadeIn">
//                           <div className="flex justify-end">
//                             <button
//                               onClick={() => setActiveQuickAddId(null)}
//                               className="text-gray-400 hover:text-black text-[10px] font-bold uppercase tracking-widest cursor-pointer"
//                             >
//                               ✕ Close
//                             </button>
//                           </div>

//                           <div className="space-y-4 my-auto">
//                             {/* সাইজ সিলেকশন */}
//                             {product.sizes?.length > 0 && (
//                               <div>
//                                 <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold text-center">
//                                   Select Size:
//                                 </p>
//                                 <div className="flex flex-wrap gap-1.5 justify-center">
//                                   {product.sizes.map((size) => (
//                                     <button
//                                       key={size}
//                                       onClick={() => setSelectedQuickSize(size)}
//                                       className={`px-2 py-1 text-[10px] border transition-all cursor-pointer ${
//                                         selectedQuickSize === size
//                                           ? "border-black bg-black text-white font-bold"
//                                           : "border-gray-200 text-gray-600 hover:border-gray-400"
//                                       }`}
//                                     >
//                                       {size}
//                                     </button>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}

//                             {/* কালার সিলেকশন */}
//                             {product.colors?.length > 0 && (
//                               <div>
//                                 <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold text-center">
//                                   Select Color:
//                                 </p>
//                                 <div className="flex flex-wrap gap-1.5 justify-center">
//                                   {product.colors.map((color) => (
//                                     <button
//                                       key={color}
//                                       onClick={() => setSelectedQuickColor(color)}
//                                       className={`px-2 py-1 text-[10px] border transition-all cursor-pointer ${
//                                         selectedQuickColor === color
//                                           ? "border-black bg-black text-white font-bold"
//                                           : "border-gray-200 text-gray-600 hover:border-gray-400"
//                                       }`}
//                                     >
//                                       {color}
//                                     </button>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </div>

//                           <button
//                             onClick={() => handleAddToCart(product)}
//                             className="w-full bg-neutral-900 text-white text-[10px] tracking-widest uppercase py-2.5 font-medium hover:bg-black transition-colors cursor-pointer"
//                           >
//                             Add to Cart
//                           </button>
//                         </div>
//                       )}
//                     </div>

//                     {/* টাইটেল ও প্রাইস */}
//                     <div className="text-center px-2 space-y-1">
//                       <h3 className="text-[13px] text-neutral-800 tracking-wide font-normal line-clamp-2 min-h-[36px]">
//                         {product.title}
//                       </h3>
//                       <p className="text-[13px] font-semibold text-neutral-700 tracking-wider">
//                         Rs.{product.price?.toLocaleString()}
//                       </p>
//                     </div>

//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         ) : (
//           <div className="w-full text-center py-12 text-gray-400 text-xs tracking-widest uppercase">
//             No products found in "{activeItem}"
//           </div>
//         )}
//       </div>

//     </div>
//   );
// };

// export default TrendingNow;




























 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// 🎯 আপনার কাস্টম হুক ইম্পোর্ট
import { useCart } from '../../context/CartContext'; 

import 'swiper/css';
import 'swiper/css/navigation';

// 💡 হালকা নিচ থেকে উপরে ভেসে ওঠার কাস্টম সিএসএস অ্যানিমেশন ইনজেক্ট করা হলো
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;
document.head.appendChild(style);

const TrendingNow = () => {
  const [products, setProducts] = useState([]);
  const [activeItem, setActiveItem] = useState("READY TO WEAR");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  const { addToCart } = useCart(); 

  const [activeQuickAddId, setActiveQuickAddId] = useState(null);
  const [selectedQuickSize, setSelectedQuickSize] = useState("");
  const [selectedQuickColor, setSelectedQuickColor] = useState("");

  const trendingItem = [
    "Organza Items",
    "Chiffon 2pis",
    "Kids Collections"
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/api/products');
        if (response.data && response.data.data) {
          setProducts(response.data.data);
        } else if (Array.isArray(response.data)) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product, 1, selectedQuickSize, selectedQuickColor);
    setActiveQuickAddId(null); 
  };

  const displayProducts = activeItem === "READY TO WEAR"
    ? (Array.isArray(products) ? products : [])
    : (Array.isArray(products) ? products : []).filter(product => {
        if (!product.category) return false;
        const prodCat = product.category.toLowerCase().trim();
        if (activeItem === "Organza Items") return prodCat.includes("organza");
        if (activeItem === "Chiffon 2pis") return prodCat.includes("chiffon");
        if (activeItem === "Kids Collections") return prodCat.includes("kids") || prodCat.includes("child");
        return prodCat === activeItem.toLowerCase().trim();
      });

  return (
    /* 💡 w-full আর px-1 করায় কার্ডগুলো এখন স্ক্রিনের একদম বর্ডারের কাছে চলে যাবে, ফুল ওয়েইট পাবে */
    <div className="w-full max-w-[1440px] mx-auto px-1 sm:px-4 py-12 bg-white font-sans selection:bg-neutral-100">
      
      {/* ১. হেডার টাইটেল */}
      <div className="flex items-center justify-center gap-4 mb-6 px-3">
        <div className="h-[1px] bg-gray-300 flex-1 hidden sm:block"></div>
        <h1 className="text-2xl font-bold tracking-[0.3em] text-black uppercase whitespace-nowrap">
          Trending Now
        </h1>
        <div className="h-[1px] bg-gray-300 flex-1 hidden sm:block"></div>
      </div>

      {/* ২. ক্যাটাগরি ট্যাব */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10 w-auto text-xs tracking-widest font-semibold text-gray-400 px-3">
        <button
          onClick={() => setActiveItem("READY TO WEAR")}
          className={`px-3 py-1.5 transition-all duration-200 uppercase cursor-pointer ${
            activeItem === "READY TO WEAR" ? "bg-neutral-100 text-black font-bold" : "hover:text-black"
          }`}
        >
          READY TO WEAR
        </button>
        <span className="text-gray-300 select-none">/</span>

        {trendingItem.map((item, idx) => (
          <React.Fragment key={item}>
            <button
              onClick={() => setActiveItem(item)}
              className={`px-3 py-1.5 transition-all duration-200 uppercase cursor-pointer ${
                activeItem === item ? "bg-neutral-100 text-black font-bold" : "hover:text-black"
              }`}
            >
              {item}
            </button>
            {idx < trendingItem.length - 1 && <span className="text-gray-300 select-none">/</span>}
          </React.Fragment>
        ))}
      </div>

      {/* ৩. প্রিমিয়াম লুপ স্লাইডার কন্টেইনার */}
      <div className="relative group/slider-container px-1 sm:px-0">
        
        {/* কাস্টম প্রিমিয়াম লেফট অ্যারো */}
        <button className="custom-prev absolute left-2 top-[40%] -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-neutral-200 bg-white/95 backdrop-blur-sm flex items-center justify-center text-black shadow-md opacity-0 group-hover/slider-container:opacity-100 transition-all duration-300 hover:bg-black hover:text-white cursor-pointer text-sm font-bold">
          ❮
        </button>

        {/* কাস্টম প্রিমিয়াম রাইট অ্যারো */}
        <button className="custom-next absolute right-2 top-[40%] -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-neutral-200 bg-white/95 backdrop-blur-sm flex items-center justify-center text-black shadow-md opacity-0 group-hover/slider-container:opacity-100 transition-all duration-300 hover:bg-black hover:text-white cursor-pointer text-sm font-bold">
          ❯
        </button>

        {/* ⚡ লোডিং অ্যানিমেশন স্কেলিটন (Shimmer + Fade-In-Up) */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 animate-pulse px-1">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex flex-col bg-white w-full">
                <div className="aspect-[2/3] w-full bg-neutral-200 rounded-sm mb-3"></div>
                <div className="h-4 bg-neutral-200 w-3/4 mx-auto mb-2 rounded"></div>
                <div className="h-4 bg-neutral-200 w-1/2 mx-auto rounded"></div>
              </div>
            ))}
          </div>
        ) : displayProducts?.length > 0 ? (
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            loop={displayProducts.length >= 4} 
            spaceBetween={8} // 👈 গ্যাপ আরও কমানো হলো যাতে কার্ডগুলো একদম বর্ডারের গায়ে গায়ে লেগে চওড়া দেখায়
            slidesPerView={2} // 👈 মোবাইলেও ২টা করে কার্ড প্রিমিয়াম ওয়েইট নিয়ে দেখাবে
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 8 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 12 },
            }}
            className="w-full"
          >
            {displayProducts.map((product) => {
              const isQuickAddOpen = activeQuickAddId === product._id;

              return (
                <SwiperSlide key={product._id} className="animate-fade-in-up">
                  <div className="group flex flex-col bg-white relative w-full border border-neutral-100 p-0.5 rounded-sm">
                    
                    {/* ইমেজ এবং কুইক অ্যাড এরিয়া */}
                    <div className="relative aspect-[2/3] w-full bg-gray-50 overflow-hidden mb-3 border border-gray-100">
                      
                      <img
                        src={`${import.meta.env.VITE_API_URL}${product.mainImage}`}
                        alt={product.title}
                        onClick={() => navigate(`/product/${product._id}`)}
                        className="w-full h-full object-cover object-top cursor-pointer transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />

                      {product.inStock === false && (
                        <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
                          Sold Out
                        </span>
                      )}

                      {/* কুইক অ্যাড বাটন */}
                      {!isQuickAddOpen && (
                        <button
                          disabled={product.inStock === false}
                          onClick={() => {
                            setActiveQuickAddId(product._id);
                            setSelectedQuickSize(product.sizes?.[0] || "");
                            setSelectedQuickColor(product.colors?.[0] || "");
                          }}
                          className={`absolute bottom-0 left-0 w-full text-[11px] tracking-[0.2em] uppercase py-3 font-medium transition-transform duration-300 ease-in-out cursor-pointer z-20 ${
                            product.inStock === false
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed transform translate-y-full group-hover:translate-y-0"
                              : "bg-black/80 text-white transform translate-y-full group-hover:translate-y-0 hover:bg-neutral-900"
                          }`}
                        >
                          {product.inStock === false ? "Sold Out" : "Quick Add"}
                        </button>
                      )}

                      {/* সাইজ/কালার সিলেক্ট করার ওভারলে */}
                      {isQuickAddOpen && (
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-3 flex flex-col justify-between z-30">
                          <div className="flex justify-end">
                            <button
                              onClick={() => setActiveQuickAddId(null)}
                              className="text-gray-400 hover:text-black text-[10px] font-bold uppercase tracking-widest cursor-pointer"
                            >
                              ✕ Close
                            </button>
                          </div>

                          <div className="space-y-3 my-auto">
                            {/* সাইজ সিলেকশন */}
                            {product.sizes?.length > 0 && (
                              <div>
                                <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1 font-bold text-center">
                                  Select Size:
                                </p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                  {product.sizes.map((size) => (
                                    <button
                                      key={size}
                                      onClick={() => setSelectedQuickSize(size)}
                                      className={`px-2 py-0.5 text-[10px] border transition-all cursor-pointer ${
                                        selectedQuickSize === size
                                          ? "border-black bg-black text-white font-bold"
                                          : "border-gray-200 text-gray-600 hover:border-gray-400"
                                      }`}
                                    >
                                      {size}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* কালার সিলেকশন */}
                            {product.colors?.length > 0 && (
                              <div>
                                <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1 font-bold text-center">
                                  Select Color:
                                </p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                  {product.colors.map((color) => (
                                    <button
                                      key={color}
                                      onClick={() => setSelectedQuickColor(color)}
                                      className={`px-2 py-0.5 text-[10px] border transition-all cursor-pointer ${
                                        selectedQuickColor === color
                                          ? "border-black bg-black text-white font-bold"
                                          : "border-gray-200 text-gray-600 hover:border-gray-400"
                                      }`}
                                    >
                                      {color}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-neutral-900 text-white text-[10px] tracking-widest uppercase py-2 font-medium hover:bg-black transition-colors cursor-pointer"
                          >
                            Add to Cart
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 👑 টাইটেল ও প্রাইস (২ লাইনে ভাঙার জন্য ফিক্সড হাইট যোগ করা হয়েছে) */}
                    <div className="text-center px-1 space-y-1 pb-2">
                      <h3 className="text-[13px] sm:text-[14px] text-neutral-900 tracking-wide font-medium line-clamp-2 h-[38px] min-h-[38px] overflow-hidden uppercase">
                        {product.title}
                      </h3>
                      <p className="text-[13px] font-bold text-neutral-800 tracking-wider">
                        Rs.{product.price?.toLocaleString()}
                      </p>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="w-full text-center py-12 text-gray-400 text-xs tracking-widest uppercase">
            No products found in "{activeItem}"
          </div>
        )}
      </div>

    </div>
  );
};

export default TrendingNow;