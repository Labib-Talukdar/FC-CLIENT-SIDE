// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useCart } from "../../context/CartContext";
// // import { useSearchParams, useNavigate } from "react-router-dom";
// // import CartSidebar from "../../components/cartsidebar/cardSidebar";
// // // 🎯 সাইডবার কন্ট্রোল ও লাক্সারি ফিল্টারের জন্য রিঅ্যাক্ট আইকনস নিয়ে আসা হলো
// // import { FiFilter, FiX } from "react-icons/fi";
// // import Footer from "../../components/foter/Footer";

// // const Collection = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const navigate = useNavigate();

// //   // ফিল্টারিং স্টেট
// //   const [selectedColors, setSelectedColors] = useState([]);
// //   const [selectedSizes, setSelectedSizes] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState(
// //     searchParams.get("category") || "",
// //   );
// //   const [categories, setCategories] = useState([]);

// //   // 📱 মোবাইল সাইডবার ওপেন/ক্লোজ করার স্টেট
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   // cart component func
// //   const { addToCart } = useCart();

// //   // ================= 🛒 কুইক অ্যাড এর জন্য স্টেটসমূহ =================
// //   const [activeQuickAddId, setActiveQuickAddId] = useState(null);
// //   const [selectedQuickSize, setSelectedQuickSize] = useState("");
// //   const [selectedQuickColor, setSelectedQuickColor] = useState("");

// //   // ১. URL-এর ক্যাটাগরি প্যারামিটার চেঞ্জ হলে স্টেট আপডেট করা
// //   useEffect(() => {
// //     const categoryFromUrl = searchParams.get("category");
// //     setSelectedCategory(categoryFromUrl || "");
// //   }, [searchParams]);

// //   // ২. ডাটাবেজ থেকে ডাইনামিক ক্যাটাগরি লিস্ট নিয়ে আসা
// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         // ✅ FIX: template literal ব্যবহার করে env variable interpolate করা হলো
// //         const res = await axios.get(
// //           `${import.meta.env.VITE_API_URL}/api/products/categories`,
// //         );
// //         // ✅ FIX: fallback array যোগ করা হলো, response shape mismatch হলেও crash করবে না
// //         setCategories(Array.isArray(res.data?.data) ? res.data.data : []);
// //       } catch (error) {
// //         console.log("Error loading categories:", error);
// //         setCategories([]);
// //       }
// //     };
// //     fetchCategories();
// //   }, []);

// //   // ৩. প্রোডাক্ট ডাটা ফেচিং ফাংশন
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       setLoading(true);
// //       try {
// //         // ✅ FIX: template literal ব্যবহার করে env variable interpolate করা হলো
// //         const url = `${import.meta.env.VITE_API_URL}/api/products`;

// //         const response = await axios.get(url, {
// //           params: {
// //             category: selectedCategory || undefined,
// //           },
// //         });

// //         // ✅ FIX: response shape mismatch হলেও data সবসময় array থাকবে
// //         let data = Array.isArray(response.data?.data) ? response.data.data : [];

// //         // কালার ফিল্টারিং
// //         if (selectedColoTk.length > 0) {
// //           data = data.filter((product) =>
// //             product.colors?.some((color) => selectedColoTk.includes(color)),
// //           );
// //         }

// //         // সাইজ ফিল্টারিং
// //         if (selectedSizes.length > 0) {
// //           data = data.filter((product) =>
// //             product.sizes?.some((size) => selectedSizes.includes(size)),
// //           );
// //         }

// //         setProducts(data);
// //       } catch (error) {
// //         console.error("Error loading products:", error);
// //         // ✅ FIX: error হলেও products কে খালি array করে দেওয়া হলো, undefined না
// //         setProducts([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, [selectedColors, selectedSizes, selectedCategory]);

// //   const handleAddToCart = (product) => {
// //     if (!selectedQuickSize || !selectedQuickColor) {
// //       alert("Please select both Size and Color!");
// //       return;
// //     }
// //     addToCart(product, selectedQuickSize, selectedQuickColor);
// //     setActiveQuickAddId(null);
// //   };

// //   const handleCategoryChange = (value) => {
// //     setSelectedCategory(value);
// //     if (value) {
// //       setSearchParams({ category: value });
// //     } else {
// //       setSearchParams({});
// //     }
// //   };

// //   const handleColorToggle = (color) => {
// //     if (selectedColoTk.includes(color)) {
// //       setSelectedColors(selectedColoTk.filter((c) => c !== color));
// //     } else {
// //       setSelectedColors([...selectedColors, color]);
// //     }
// //   };

// //   const handleSizeToggle = (size) => {
// //     if (selectedSizes.includes(size)) {
// //       setSelectedSizes(selectedSizes.filter((s) => s !== size));
// //     } else {
// //       setSelectedSizes([...selectedSizes, size]);
// //     }
// //   };

// //   const handleClearAll = () => {
// //     setSelectedColors([]);
// //     setSelectedSizes([]);
// //     setSelectedCategory("");
// //     setSearchParams({});
// //   };

// //   const filterColors = [
// //     "Red",
// //     "Maroon",
// //     "Black",
// //     "White",
// //     "Emerald Green",
// //     "Navy Blue",
// //     "Pink",
// //     "Mustard",
// //   ];
// //   const filterSizes = [
// //     "XS / 34",
// //     "S / 36",
// //     "M / 38",
// //     "L / 40",
// //     "XL / 42",
// //     "XXL / 44",
// //   ];

// //   return (
// // <div>
// //       <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white select-none">
// //       {/* হেডার */}
// //       <div className="text-center border-b border-gray-100 pb-8 mb-8">
// //         <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-gray-900">
// //           Ready To Wear
// //         </h1>
// //         <p className="text-xs tracking-wider text-gray-400 uppercase mt-2">
// //           FC Luxury Premium Pret Kaftan & Suits
// //         </p>
// //       </div>

// //       {/* 📱 মোবাইল ডিভাইসের জন্য ফিল্টার বাটন (বড় স্ক্রিনে লুকানো থাকবে) */}
// //       <div className="lg:hidden w-full mb-6">
// //         <button
// //           onClick={() => setIsSidebarOpen(true)}
// //           className="w-full py-3.5 px-5 bg-neutral-50 border border-gray-200 rounded-lg flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:bg-neutral-100 transition-all active:scale-[0.98]"
// //         >
// //           <span className="flex items-center gap-2">
// //             <FiFilter size={14} /> Filter By
// //           </span>
// //           {(selectedColors.length > 0 ||
// //             selectedSizes.length > 0 ||
// //             selectedCategory) && (
// //             <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
// //           )}
// //         </button>
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
// //         {/* ================= 💻 ১. ডেক্সটপ ফিল্টার প্যানেল (বড় স্ক্রিনে ফিক্সড থাকবে) ================= */}
// //         <div className="hidden lg:block space-y-8 lg:sticky lg:top-6 h-fit bg-white">
// //           <FilterContent
// //             selectedColors={selectedColors}
// //             selectedSizes={selectedSizes}
// //             selectedCategory={selectedCategory}
// //             handleClearAll={handleClearAll}
// //             categories={categories}
// //             handleCategoryChange={handleCategoryChange}
// //             filterColors={filterColors}
// //             handleColorToggle={handleColorToggle}
// //             filterSizes={filterSizes}
// //             handleSizeToggle={handleSizeToggle}
// //           />
// //         </div>

// //         {/* ================= 📱 ২. মোবাইল রাইট সাইডবার ড্রয়ার (স্ক্রিনের ৭৫% জায়গা নিবে) ================= */}
// //         {/* ব্যাকড্রপ ওভারলে */}
// //         <div
// //           className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 lg:hidden ${
// //             isSidebarOpen
// //               ? "opacity-100 pointer-events-auto"
// //               : "opacity-0 pointer-events-none"
// //           }`}
// //           onClick={() => setIsSidebarOpen(false)}
// //         />

// //         {/* মেইন স্লাইড-আউট সাইডবার ড্রয়ার */}
// //         <div
// //           className={`fixed top-0 right-0 h-full w-[75vw] sm:max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden flex flex-col ${
// //             isSidebarOpen ? "translate-x-0" : "translate-x-full"
// //           }`}
// //         >
// //           {/* সাইডবার হেডার */}
// //           <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
// //             <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 flex items-center gap-2">
// //               <FiFilter size={14} /> Filter By
// //             </h2>
// //             <button
// //               onClick={() => setIsSidebarOpen(false)}
// //               className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
// //             >
// //               <FiX size={18} />
// //             </button>
// //           </div>

// //           {/* সাইডবারের ভেতরের ফিল্টার সামগ্রী */}
// //           <div className="flex-1 overflow-y-auto p-6 space-y-8">
// //             <FilterContent
// //               selectedColors={selectedColors}
// //               selectedSizes={selectedSizes}
// //               selectedCategory={selectedCategory}
// //               handleClearAll={() => {
// //                 handleClearAll();
// //                 setIsSidebarOpen(false);
// //               }}
// //               categories={categories}
// //               handleCategoryChange={handleCategoryChange}
// //               filterColors={filterColors}
// //               handleColorToggle={handleColorToggle}
// //               filterSizes={filterSizes}
// //               handleSizeToggle={handleSizeToggle}
// //             />
// //           </div>
// //         </div>

// //         {/* ================= 🛍️ ৩. প্রোডাক্ট গ্রিড সেকশন ================= */}
// //         <div className="lg:col-span-3">
// //           {loading ? (
// //             <div className="flex justify-center items-center h-64">
// //               <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-red-600"></div>
// //             </div>
// //           ) : products.length === 0 ? (
// //             <div className="text-center py-16 border border-dashed border-gray-200 bg-gray-50 rounded-xl">
// //               <p className="text-xs tracking-widest text-gray-400 uppercase">
// //                 No items match your Filter.
// //               </p>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
// //               {products?.map((product) => {
// //                 const isQuickAddOpen = activeQuickAddId === product._id;

// //                 return (
// //                   <div
// //                     key={product._id}
// //                     className="group flex flex-col bg-white relative"
// //                   >
// //                     {/* ইমেজ এবং কুইক অ্যাড এরিয়া */}
// //                     <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3 border border-gray-100">
          

// //                       <img
// //                         src={
// //                           !product?.mainImage
// //                             ? "https://placehold.co/300x400/png?text=No+Image"
// //                             : product.mainImage.startsWith("http")
// //                               ? product.mainImage  
// //                               : product.mainImage.startsWith("/")
// //                                 ? `${import.meta.env.VITE_API_URL || "https://fc-server-side.onrender.com"}${product.mainImage}` // ২. যদি আগে থেকেই শুরুতে / থাকে (যেমন: /uploads/abc.jpg)
// //                                 : `${import.meta.env.VITE_API_URL || "https://fc-server-side.onrender.com"}/${product.mainImage}` // ৩. যদি সাধারণ নাম বা uploads/abc.jpg থাকে
// //                         }
// //                         alt={product?.title || "Product Image"}
// //                         onClick={() => navigate(`/product/${product._id}`)}
// //                         onError={(e) => {
// //                           e.currentTarget.onerror = null;
// //                           e.currentTarget.src =
// //                             "https://placehold.co/300x400/png?text=No+Image";
// //                         }}
// //                         className="w-full h-full object-cover object-top cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
// //                       />

// //                       {product.inStock === false && (
// //                         <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
// //                           Sold Out
// //                         </span>
// //                       )}

// //                       {/* কুইক অ্যাড বাটন */}
// //                       {!isQuickAddOpen && (
// //                         <button
// //                           disabled={product?.inStock === false}
// //                           onClick={() => {
// //                             setActiveQuickAddId(product._id);
// //                             setSelectedQuickSize(product?.sizes?.[0] || "");
// //                             setSelectedQuickColor(product?.colors?.[0] || "");
// //                           }}
// //                           className={`absolute bottom-0 left-0 w-full text-[11px] tracking-[0.2em] uppercase py-3 font-medium transition-transform duration-300 ease-in-out ${
// //                             product.inStock === false
// //                               ? "bg-gray-300 text-gray-500 cursor-not-allowed transform translate-y-full group-hover:translate-y-0"
// //                               : "bg-black/80 text-white transform translate-y-full group-hover:translate-y-0 hover:bg-neutral-900"
// //                           }`}
// //                         >
// //                           {product?.inStock === false
// //                             ? "Sold Out"
// //                             : "Quick Add"}
// //                         </button>
// //                       )}

// //                       {/* কুইক অ্যাড একটিভ প্যানেল */}
// //                       {isQuickAddOpen && (
// //                         <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 flex flex-col justify-between z-10 animate-fadeIn">
// //                           <div className="flex justify-end">
// //                             <button
// //                               onClick={() => setActiveQuickAddId(null)}
// //                               className="text-gray-400 hover:text-black text-[10px] font-bold uppercase tracking-widest"
// //                             >
// //                               ✕ Close
// //                             </button>
// //                           </div>

// //                           <div className="space-y-4 my-auto">
// //                             <div>
// //                               <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">
// //                                 Select Size:
// //                               </p>
// //                               <div className="flex flex-wrap gap-1.5 justify-center">
// //                                 {product.sizes?.map((size) => (
// //                                   <button
// //                                     key={size}
// //                                     onClick={() => setSelectedQuickSize(size)}
// //                                     className={`px-2 py-1 text-[10px] border transition-all ${
// //                                       selectedQuickSize === size
// //                                         ? "border-black bg-black text-white font-bold"
// //                                         : "border-gray-200 text-gray-600 hover:border-gray-400"
// //                                     }`}
// //                                   >
// //                                     {size}
// //                                   </button>
// //                                 ))}
// //                               </div>
// //                             </div>

// //                             <div>
// //                               <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">
// //                                 Select Color:
// //                               </p>
// //                               <div className="flex flex-wrap gap-1.5 justify-center">
// //                                 {product.colors?.map((color) => (
// //                                   <button
// //                                     key={color}
// //                                     onClick={() => setSelectedQuickColor(color)}
// //                                     className={`px-2 py-1 text-[10px] border transition-all ${
// //                                       selectedQuickColor === color
// //                                         ? "border-black bg-black text-white font-bold"
// //                                         : "border-gray-200 text-gray-600 hover:border-gray-400"
// //                                     }`}
// //                                   >
// //                                     {color}
// //                                   </button>
// //                                 ))}
// //                               </div>
// //                             </div>
// //                           </div>

// //                           <button
// //                             onClick={() => handleAddToCart(product)}
// //                             className="w-full bg-neutral-900 text-white text-[10px] tracking-widest uppercase py-2.5 font-medium hover:bg-black transition-colors"
// //                           >
// //                             Add to Cart
// //                           </button>
// //                         </div>
// //                       )}
// //                     </div>

// //                     <div className="text-center px-2 py-3 space-y-1.5">
// //                       <h1
// //                         onClick={() => navigate(`/product/${product._id}`)}
// //                         className="text-[16px] sm:text-[18px] md:text-[19px] font-medium text-gray-950 hover:text-[#b5832a] cursor-pointer tracking-widest uppercase line-clamp-2 h-[50px] overflow-hidden min-h-[48px]"
// //                       >
// //                         {product.title}
// //                       </h1>

// //                       {/* 🔹 SKU Code Added */}
// //                       {product.sku && (
// //                         <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium tracking-wide uppercase">
// //                           SKU: {product.sku}
// //                         </p>
// //                       )}

// //                       <p className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-gray-900 tracking-wider">
// //                         Tk. {product.price?.toLocaleString()}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       <CartSidebar />
// //     </div>
// //     <Footer></Footer>
// // </div>
// //   );
// // };

// // // =========================================================================
// // //  ফিল্টার সামগ্রী আলাদা কম্পোনেন্টে রাখা হলো
// // // =========================================================================
// // const FilterContent = ({
// //   selectedColors,
// //   selectedSizes,
// //   selectedCategory,
// //   handleClearAll,
// //   categories,
// //   handleCategoryChange,
// //   filterColors,
// //   handleColorToggle,
// //   filterSizes,
// //   handleSizeToggle,
// // }) => (
// //   <>
// //     <div>
// //       <div className="flex justify-between items-center border-b border-gray-200 pb-4">
// //         <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900">
// //           Filter By
// //         </h2>
// //         {(selectedColors.length > 0 ||
// //           selectedSizes.length > 0 ||
// //           selectedCategory) && (
// //           <button
// //             onClick={handleClearAll}
// //             className="text-[11px] font-bold text-red-600 uppercase tracking-wider underline underline-offset-4 hover:text-red-700"
// //           >
// //             Clear All
// //           </button>
// //         )}
// //       </div>

// //       {/* ক) ক্যাটাগরি ফিল্টার ড্রপডাউন */}
// //       <div>
// //         <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">
// //           Collection
// //         </h3>
// //         <select
// //           value={selectedCategory}
// //           onChange={(e) => handleCategoryChange(e.target.value)}
// //           className="w-full p-3.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 outline-none focus:border-black uppercase tracking-wider cursor-pointer"
// //         >
// //           <option value="">All Collections</option>
// //           {categories?.map((cat) => (
// //             <option key={cat} value={cat}>
// //               {cat}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* খ) কালার ফিল্টার */}
// //       <div className="border-t border-gray-100 pt-6">
// //         <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
// //           Color
// //         </h3>
// //         <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
// //           {filterColors.map((color) => {
// //             const isChecked = selectedColors.includes(color);
// //             return (
// //               <label
// //                 key={color}
// //                 className="flex items-center gap-3 cursor-pointer text-xs uppercase tracking-wider"
// //               >
// //                 <input
// //                   type="checkbox"
// //                   checked={isChecked}
// //                   onChange={() => handleColorToggle(color)}
// //                   className="accent-black w-4 h-4 cursor-pointer"
// //                 />
// //                 <span
// //                   className={
// //                     isChecked ? "font-bold text-black" : "text-gray-600"
// //                   }
// //                 >
// //                   {color}
// //                 </span>
// //               </label>
// //             );
// //           })}
// //         </div>
// //       </div>

// //       {/* গ) সাইজ ফিল্টার */}
// //       <div className="border-t border-gray-100 pt-6">
// //         <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
// //           Size
// //         </h3>
// //         <div className="grid grid-cols-3 gap-2">
// //           {filterSizes?.map((size) => {
// //             const isSelected = selectedSizes.includes(size);
// //             return (
// //               <button
// //                 key={size}
// //                 onClick={() => handleSizeToggle(size)}
// //                 className={`py-3 text-xs font-medium border uppercase tracking-wider transition-all rounded-md ${
// //                   isSelected
// //                     ? "bg-black text-white border-black font-bold shadow-sm"
// //                     : "bg-white text-gray-600 border-gray-200 hover:border-black"
// //                 }`}
// //               >
// //                 {size}
// //               </button>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   </>
// // );

// // export default Collection;








































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useCart } from "../../context/CartContext";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import CartSidebar from "../../components/cartsidebar/cardSidebar";
// // 🎯 সাইডবার কন্ট্রোল ও লাক্সারি ফিল্টারের জন্য রিঅ্যাক্ট আইকনস
// import { FiFilter, FiX } from "react-icons/fi";
// import Footer from "../../components/foter/Footer";

// const Collection = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();

//   // ফিল্টারিং স্টেট
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(
//     searchParams.get("category") || ""
//   );
//   const [categories, setCategories] = useState([]);

//   // 📱 মোবাইল সাইডবার ওপেন/ক্লোজ করার স্টেট
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // cart component func
//   const { addToCart } = useCart();

//   // ================= 🛒 কুইক অ্যাড এর জন্য স্টেটসমূহ =================
//   const [activeQuickAddId, setActiveQuickAddId] = useState(null);
//   const [selectedQuickSize, setSelectedQuickSize] = useState("");
//   const [selectedQuickColor, setSelectedQuickColor] = useState("");

//   // ১. URL-এর ক্যাটাগরি প্যারামিটার চেঞ্জ হলে স্টেট আপডেট করা
//   useEffect(() => {
//     const categoryFromUrl = searchParams.get("category");
//     setSelectedCategory(categoryFromUrl || "");
//   }, [searchParams]);

//   // ২. ডাটাবেজ থেকে ডাইনামিক ক্যাটাগরি লিস্ট নিয়ে আসা
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/products/categories`
//         );
//         setCategories(Array.isArray(res.data?.data) ? res.data.data : []);
//       } catch (error) {
//         console.log("Error loading categories:", error);
//         setCategories([]);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // ৩. প্রোডাক্ট ডাটা ফেচিং ফাংশন
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const url = `${import.meta.env.VITE_API_URL}/api/products`;

//         const response = await axios.get(url, {
//           params: {
//             category: selectedCategory || undefined,
//           },
//         });

//         let data = Array.isArray(response.data?.data) ? response.data.data : [];

//         // ✅ FIX 1: selectedColoTk এর জায়গায় selectedColors ব্যবহার করা হয়েছে
//         if (selectedColors.length > 0) {
//           data = data.filter((product) =>
//             product.colors?.some((color) => selectedColors.includes(color))
//           );
//         }

//         // সাইজ ফিল্টারিং
//         if (selectedSizes.length > 0) {
//           data = data.filter((product) =>
//             product.sizes?.some((size) => selectedSizes.includes(size))
//           );
//         }

//         setProducts(data);
//       } catch (error) {
//         console.error("Error loading products:", error);
//         setProducts([]);
//       } fontFinally: {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [selectedColors, selectedSizes, selectedCategory]);

//   const handleAddToCart = (product) => {
//     if (!selectedQuickSize || !selectedQuickColor) {
//       alert("Please select both Size and Color!");
//       return;
//     }
//     addToCart(product, selectedQuickSize, selectedQuickColor);
//     setActiveQuickAddId(null);
//   };

//   const handleCategoryChange = (value) => {
//     setSelectedCategory(value);
//     if (value) {
//       setSearchParams({ category: value });
//     } else {
//       setSearchParams({});
//     }
//   };

//   // ✅ FIX 2: handleColorToggle এ সঠিক ভেরিয়েবল নাম (selectedColors) দেওয়া হয়েছে
//   const handleColorToggle = (color) => {
//     if (selectedColors.includes(color)) {
//       setSelectedColors(selectedColors.filter((c) => c !== color));
//     } else {
//       setSelectedColors([...selectedColors, color]);
//     }
//   };

//   const handleSizeToggle = (size) => {
//     if (selectedSizes.includes(size)) {
//       setSelectedSizes(selectedSizes.filter((s) => s !== size));
//     } else {
//       setSelectedSizes([...selectedSizes, size]);
//     }
//   };

//   const handleClearAll = () => {
//     setSelectedColors([]);
//     setSelectedSizes([]);
//     setSelectedCategory("");
//     setSearchParams({});
//   };

//   const filterColors = [
//     "Red",
//     "Maroon",
//     "Black",
//     "White",
//     "Emerald Green",
//     "Navy Blue",
//     "Pink",
//     "Mustard",
//   ];
//   const filterSizes = [
//     "XS / 34",
//     "S / 36",
//     "M / 38",
//     "L / 40",
//     "XL / 42",
//     "XXL / 44",
//   ];

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white select-none">
//         {/* হেডার */}
//         <div className="text-center border-b border-gray-100 pb-8 mb-8">
//           <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-gray-900">
//             Ready To Wear
//           </h1>
//           <p className="text-xs tracking-wider text-gray-400 uppercase mt-2">
//             FC Luxury Premium Pret Kaftan & Suits
//           </p>
//         </div>

//         {/* 📱 মোবাইল ফিল্টার বাটন */}
//         <div className="lg:hidden w-full mb-6">
//           <button
//             onClick={() => setIsSidebarOpen(true)}
//             className="w-full py-3.5 px-5 bg-neutral-50 border border-gray-200 rounded-lg flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:bg-neutral-100 transition-all active:scale-[0.98]"
//           >
//             <span className="flex items-center gap-2">
//               <FiFilter size={14} /> Filter By
//             </span>
//             {(selectedColors.length > 0 ||
//               selectedSizes.length > 0 ||
//               selectedCategory) && (
//               <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
//             )}
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* 💻 ১. ডেক্সটপ ফিল্টার প্যানেল */}
//           <div className="hidden lg:block space-y-8 lg:sticky lg:top-6 h-fit bg-white">
//             <FilterContent
//               selectedColors={selectedColors}
//               selectedSizes={selectedSizes}
//               selectedCategory={selectedCategory}
//               handleClearAll={handleClearAll}
//               categories={categories}
//               handleCategoryChange={handleCategoryChange}
//               filterColors={filterColors}
//               handleColorToggle={handleColorToggle}
//               filterSizes={filterSizes}
//               handleSizeToggle={handleSizeToggle}
//             />
//           </div>

//           {/* 📱 ২. মোবাইল রাইট সাইডবার ড্রয়ার */}
//           <div
//             className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 lg:hidden ${
//               isSidebarOpen
//                 ? "opacity-100 pointer-events-auto"
//                 : "opacity-0 pointer-events-none"
//             }`}
//             onClick={() => setIsSidebarOpen(false)}
//           />

//           <div
//             className={`fixed top-0 right-0 h-full w-[75vw] sm:max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden flex flex-col ${
//               isSidebarOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
//               <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 flex items-center gap-2">
//                 <FiFilter size={14} /> Filter By
//               </h2>
//               <button
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
//               >
//                 <FiX size={18} />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6 space-y-8">
//               <FilterContent
//                 selectedColors={selectedColors}
//                 selectedSizes={selectedSizes}
//                 selectedCategory={selectedCategory}
//                 handleClearAll={() => {
//                   handleClearAll();
//                   setIsSidebarOpen(false);
//                 }}
//                 categories={categories}
//                 handleCategoryChange={handleCategoryChange}
//                 filterColors={filterColors}
//                 handleColorToggle={handleColorToggle}
//                 filterSizes={filterSizes}
//                 handleSizeToggle={handleSizeToggle}
//               />
//             </div>
//           </div>

//           {/* 🛍️ ৩. প্রোডাক্ট গ্রিড সেকশন */}
//           <div className="lg:col-span-3">
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-red-600"></div>
//               </div>
//             ) : products.length === 0 ? (
//               <div className="text-center py-16 border border-dashed border-gray-200 bg-gray-50 rounded-xl">
//                 <p className="text-xs tracking-widest text-gray-400 uppercase">
//                   No items match your Filter.
//                 </p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
//                 {products?.map((product) => {
//                   const isQuickAddOpen = activeQuickAddId === product._id;

//                   return (
//                     <div
//                       key={product._id}
//                       className="group flex flex-col bg-white relative"
//                     >
//                       {/* ইমেজ এবং কুইক অ্যাড এরিয়া */}
//                       <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3 border border-gray-100">
//                         <img
//                           src={
//                             !product?.mainImage
//                               ? "https://placehold.co/300x400/png?text=No+Image"
//                               : product.mainImage.startsWith("http")
//                               ? product.mainImage
//                               : product.mainImage.startsWith("/")
//                               ? `${import.meta.env.VITE_API_URL || "https://fc-server-side.onrender.com"}${product.mainImage}`
//                               : `${import.meta.env.VITE_API_URL || "https://fc-server-side.onrender.com"}/${product.mainImage}`
//                           }
//                           alt={product?.title || "Product Image"}
//                           onClick={() => navigate(`/product/${product._id}`)}
//                           onError={(e) => {
//                             e.currentTarget.onerror = null;
//                             e.currentTarget.src =
//                               "https://placehold.co/300x400/png?text=No+Image";
//                           }}
//                           className="w-full h-full object-cover object-top cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
//                         />

//                         {product.inStock === false && (
//                           <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
//                             Sold Out
//                           </span>
//                         )}

//                         {/* কুইক অ্যাড বাটন */}
//                         {!isQuickAddOpen && (
//                           <button
//                             disabled={product?.inStock === false}
//                             onClick={() => {
//                               setActiveQuickAddId(product._id);
//                               setSelectedQuickSize(product?.sizes?.[0] || "");
//                               setSelectedQuickColor(product?.colors?.[0] || "");
//                             }}
//                             className={`absolute bottom-0 left-0 w-full text-[11px] tracking-[0.2em] uppercase py-3 font-medium transition-transform duration-300 ease-in-out ${
//                               product.inStock === false
//                                 ? "bg-gray-300 text-gray-500 cursor-not-allowed transform translate-y-full group-hover:translate-y-0"
//                                 : "bg-black/80 text-white transform translate-y-full group-hover:translate-y-0 hover:bg-neutral-900"
//                             }`}
//                           >
//                             {product?.inStock === false
//                               ? "Sold Out"
//                               : "Quick Add"}
//                           </button>
//                         )}

//                         {/* কুইক অ্যাড এক্টিভ প্যানেল */}
//                         {isQuickAddOpen && (
//                           <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 flex flex-col justify-between z-10 animate-fadeIn">
//                             <div className="flex justify-end">
//                               <button
//                                 onClick={() => setActiveQuickAddId(null)}
//                                 className="text-gray-400 hover:text-black text-[10px] font-bold uppercase tracking-widest"
//                               >
//                                 ✕ Close
//                               </button>
//                             </div>

//                             <div className="space-y-4 my-auto">
//                               <div>
//                                 <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">
//                                   Select Size:
//                                 </p>
//                                 <div className="flex flex-wrap gap-1.5 justify-center">
//                                   {product.sizes?.map((size) => (
//                                     <button
//                                       key={size}
//                                       onClick={() => setSelectedQuickSize(size)}
//                                       className={`px-2 py-1 text-[10px] border transition-all ${
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

//                               <div>
//                                 <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">
//                                   Select Color:
//                                 </p>
//                                 <div className="flex flex-wrap gap-1.5 justify-center">
//                                   {product.colors?.map((color) => (
//                                     <button
//                                       key={color}
//                                       onClick={() => setSelectedQuickColor(color)}
//                                       className={`px-2 py-1 text-[10px] border transition-all ${
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
//                             </div>

//                             <button
//                               onClick={() => handleAddToCart(product)}
//                               className="w-full bg-neutral-900 text-white text-[10px] tracking-widest uppercase py-2.5 font-medium hover:bg-black transition-colors"
//                             >
//                               Add to Cart
//                             </button>
//                           </div>
//                         )}
//                       </div>

//                       <div className="text-center px-2 py-3 space-y-1.5">
//                         <h1
//                           onClick={() => navigate(`/product/${product._id}`)}
//                           className="text-[16px] sm:text-[18px] md:text-[19px] font-medium text-gray-950 hover:text-[#b5832a] cursor-pointer tracking-widest uppercase line-clamp-2 h-[50px] overflow-hidden min-h-[48px]"
//                         >
//                           {product.title}
//                         </h1>

//                         {product.sku && (
//                           <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium tracking-wide uppercase">
//                             SKU: {product.sku}
//                           </p>
//                         )}

//                         <p className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-gray-900 tracking-wider">
//                           Tk. {product.price?.toLocaleString()}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//         <CartSidebar />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// // =========================================================================
// //  ফিল্টার সামগ্রী 컴পোনেন্ট
// // =========================================================================
// const FilterContent = ({
//   selectedColors,
//   selectedSizes,
//   selectedCategory,
//   handleClearAll,
//   categories,
//   handleCategoryChange,
//   filterColors,
//   handleColorToggle,
//   filterSizes,
//   handleSizeToggle,
// }) => (
//   <div className="space-y-6">
//     <div className="flex justify-between items-center border-b border-gray-200 pb-4">
//       <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900">
//         Filter By
//       </h2>
//       {(selectedColors.length > 0 ||
//         selectedSizes.length > 0 ||
//         selectedCategory) && (
//         <button
//           onClick={handleClearAll}
//           className="text-[11px] font-bold text-red-600 uppercase tracking-wider underline underline-offset-4 hover:text-red-700"
//         >
//           Clear All
//         </button>
//       )}
//     </div>

//     {/* ক) ক্যাটাগরি ফিল্টার ড্রপডাউন */}
//     <div>
//       <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">
//         Collection
//       </h3>
//       <select
//         value={selectedCategory}
//         onChange={(e) => handleCategoryChange(e.target.value)}
//         className="w-full p-3.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 outline-none focus:border-black uppercase tracking-wider cursor-pointer"
//       >
//         <option value="">All Collections</option>
//         {categories?.map((cat) => (
//           <option key={cat} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>
//     </div>

//     {/* খ) কালার ফিল্টার */}
//     <div className="border-t border-gray-100 pt-6">
//       <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
//         Color
//       </h3>
//       <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
//         {filterColors.map((color) => {
//           const isChecked = selectedColors.includes(color);
//           return (
//             <label
//               key={color}
//               className="flex items-center gap-3 cursor-pointer text-xs uppercase tracking-wider"
//             >
//               <input
//                 type="checkbox"
//                 checked={isChecked}
//                 onChange={() => handleColorToggle(color)}
//                 className="accent-black w-4 h-4 cursor-pointer"
//               />
//               <span
//                 className={
//                   isChecked ? "font-bold text-black" : "text-gray-600"
//                 }
//               >
//                 {color}
//               </span>
//             </label>
//           );
//         })}
//       </div>
//     </div>

//     {/* গ) সাইজ ফিল্টার */}
//     <div className="border-t border-gray-100 pt-6">
//       <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
//         Size
//       </h3>
//       <div className="grid grid-cols-3 gap-2">
//         {filterSizes?.map((size) => {
//           const isSelected = selectedSizes.includes(size);
//           return (
//             <button
//               key={size}
//               onClick={() => handleSizeToggle(size)}
//               className={`py-3 text-xs font-medium border uppercase tracking-wider transition-all rounded-md ${
//                 isSelected
//                   ? "bg-black text-white border-black font-bold shadow-sm"
//                   : "bg-white text-gray-600 border-gray-200 hover:border-black"
//               }`}
//             >
//               {size}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// );

// export default Collection;

















































import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { useSearchParams, useNavigate } from "react-router-dom";
import CartSidebar from "../../components/cartsidebar/cardSidebar";
import { FiFilter, FiX } from "react-icons/fi";
import Footer from "../../components/foter/Footer";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // ফিল্টারিং স্টেট
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );
  const [categories, setCategories] = useState([]);

  // 💰 প্রাইস ফিল্টার স্টেট
  // maxPrice      -> ডাটা থেকে পাওয়া সর্বোচ্চ দাম
  // priceRange    -> "কমিটেড" ভ্যালু, এটাই আসলে প্রোডাক্ট ফিল্টার/ফেচ ট্রিগার করে
  // sliderValue   -> স্লাইডার ড্র্যাগ করার সময় শুধু চোখে দেখানোর জন্য (লাইভ), ছাড়ার আগ পর্যন্ত ফিল্টার আপডেট হয় না
  const [maxPrice, setMaxPrice] = useState(10000);
  const [priceRange, setPriceRange] = useState(10000);
  const [sliderValue, setSliderValue] = useState(10000);
  const [isDraggingPrice, setIsDraggingPrice] = useState(false);

  // 📱 মোবাইল সাইডবার স্টেট
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Cart Context
  const { addToCart } = useCart();

  // 🛒 কুইক অ্যাড এর জন্য স্টেট
  const [activeQuickAddId, setActiveQuickAddId] = useState(null);
  const [selectedQuickSize, setSelectedQuickSize] = useState("");
  const [selectedQuickColor, setSelectedQuickColor] = useState("");

  // ১. URL ক্যাটাগরি আপডেট
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    setSelectedCategory(categoryFromUrl || "");
  }, [searchParams]);

  // ২. ক্যাটাগরি লোড করা
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/categories`
        );
        setCategories(Array.isArray(res.data?.data) ? res.data.data : []);
      } catch (error) {
        console.log("Error loading categories:", error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  // ৩. প্রোডাক্ট ডাটা ফেচিং ও ফিল্টারিং
  // ⚠️ লক্ষ্য করুন: dependency array-তে এখনো "priceRange" আছে, "sliderValue" নেই।
  // মানে স্লাইডার ড্র্যাগ করার সময় প্রতিটা পিক্সেল মুভমেন্টে এই ইফেক্ট রি-রান হবে না,
  // শুধুমাত্র ইউজার হাত ছাড়ার (mouse up / touch end) পরে priceRange আপডেট হলে তখন রান হবে।
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`;

        const response = await axios.get(url, {
          params: {
            category: selectedCategory || undefined,
          },
        });

        let data = Array.isArray(response.data?.data) ? response.data.data : [];

        // সর্বোচ্চ দাম নির্ধারণ
        if (data.length > 0) {
          const highestPrice = Math.max(...data.map((p) => p.price || 0));
          if (highestPrice > 0 && maxPrice === 10000) {
            setMaxPrice(highestPrice);
            setPriceRange(highestPrice);
            setSliderValue(highestPrice);
          }
        }

        // কালার ফিল্টারিং
        if (selectedColors.length > 0) {
          data = data.filter((product) =>
            product.colors?.some((color) => selectedColors.includes(color))
          );
        }

        // সাইজ ফিল্টারিং
        if (selectedSizes.length > 0) {
          data = data.filter((product) =>
            product.sizes?.some((size) => selectedSizes.includes(size))
          );
        }

        // কমিটেড প্রাইস দিয়ে ফিল্টারিং (শুধু হাত ছাড়ার পর আপডেট হয়)
        data = data.filter((product) => (product.price || 0) <= priceRange);

        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedColors, selectedSizes, selectedCategory, priceRange]);

  const handleAddToCart = (product) => {
    if (!selectedQuickSize || !selectedQuickColor) {
      alert("Please select both Size and Color!");
      return;
    }
    addToCart(product, selectedQuickSize, selectedQuickColor);
    setActiveQuickAddId(null);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    if (value) {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  const handleColorToggle = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSizeToggle = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  // শুধু ভিজ্যুয়াল আপডেট — এখনো ফিল্টার/ফেচ ট্রিগার হয়নি
  const handlePriceDrag = (e) => {
    setSliderValue(Number(e.target.value));
  };

  // ইউজার হাত ছাড়লে (mouse up / touch end) অথবা কীবোর্ড দিয়ে ভ্যালু ছাড়লে
  // — তখনই আসল ফিল্টার কমিট হয়ে প্রোডাক্ট লিস্ট আপডেট হয়
  const commitPriceRange = () => {
    setIsDraggingPrice(false);
    setPriceRange(sliderValue);
  };

  const handleClearAll = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategory("");
    setPriceRange(maxPrice);
    setSliderValue(maxPrice);
    setSearchParams({});
  };

  const filterColors = [
    "Red",
    "Maroon",
    "Black",
    "White",
    "Emerald Green",
    "Navy Blue",
    "Pink",
    "Mustard",
  ];
  const filterSizes = [
    "XS / 34",
    "S / 36",
    "M / 38",
    "L / 40",
    "XL / 42",
    "XXL / 44",
  ];

  return (
    <div>
      <div className="max-w-[1650px] mx-auto px-3 md:px-6 py-8 font-sans text-gray-900 bg-white select-none">
        {/* হেডার */}
        <div className="text-center border-b border-gray-100 pb-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.25em] uppercase text-gray-900">
            Ready To Wear
          </h1>
          <p className="text-[11px] md:text-xs tracking-[0.2em] text-gray-400 uppercase mt-2">
            FC Luxury Premium Pret Kaftan &amp; Suits
          </p>
        </div>

        {/* 📱 মোবাইল ফিল্টার বাটন */}
        <div className="lg:hidden w-full mb-5">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-full py-3 px-5 bg-black text-white rounded-lg flex items-center justify-between text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 active:scale-[0.99] transition-all shadow-sm"
          >
            <span className="flex items-center gap-2">
              <FiFilter size={14} /> Filter Products
            </span>
            {(selectedColors.length > 0 ||
              selectedSizes.length > 0 ||
              selectedCategory ||
              priceRange < maxPrice) && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10">
          {/* 💻 ১. ডেক্সটপ ফিল্টার প্যানেল */}
          <div className="hidden lg:block lg:col-span-1 lg:sticky lg:top-6 h-fit bg-white">
            {loading && !products.length ? (
              <FilterSkeleton />
            ) : (
              <FilterContent
                selectedColors={selectedColors}
                selectedSizes={selectedSizes}
                selectedCategory={selectedCategory}
                handleClearAll={handleClearAll}
                categories={categories}
                handleCategoryChange={handleCategoryChange}
                filterColors={filterColors}
                handleColorToggle={handleColorToggle}
                filterSizes={filterSizes}
                handleSizeToggle={handleSizeToggle}
                sliderValue={sliderValue}
                handlePriceDrag={handlePriceDrag}
                commitPriceRange={commitPriceRange}
                isDraggingPrice={isDraggingPrice}
                setIsDraggingPrice={setIsDraggingPrice}
                maxPrice={maxPrice}
              />
            )}
          </div>

          {/* 📱 ২. মোবাইল সাইডবার */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50 transition-opacity duration-300 lg:hidden ${
              isSidebarOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          />

          <div
            className={`fixed top-0 right-0 h-full w-[85vw] sm:max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden flex flex-col ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 flex items-center gap-2">
                <FiFilter size={14} /> Filter By
              </h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-gray-600 hover:text-black hover:bg-neutral-200 transition-colors"
              >
                <FiX size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-7">
              <FilterContent
                selectedColors={selectedColors}
                selectedSizes={selectedSizes}
                selectedCategory={selectedCategory}
                handleClearAll={() => {
                  handleClearAll();
                }}
                categories={categories}
                handleCategoryChange={handleCategoryChange}
                filterColors={filterColors}
                handleColorToggle={handleColorToggle}
                filterSizes={filterSizes}
                handleSizeToggle={handleSizeToggle}
                sliderValue={sliderValue}
                handlePriceDrag={handlePriceDrag}
                commitPriceRange={commitPriceRange}
                isDraggingPrice={isDraggingPrice}
                setIsDraggingPrice={setIsDraggingPrice}
                maxPrice={maxPrice}
              />
            </div>

            <div className="p-5 border-t border-gray-100">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="w-full py-3 bg-black text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Show {loading ? "..." : products.length} Results
              </button>
            </div>
          </div>

          {/* 🛍️ ৩. প্রোডাক্ট গ্রিড সেকশন */}
          <div className="lg:col-span-3 xl:col-span-4">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {[...Array(6)].map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-gray-200 bg-gray-50 rounded-xl">
                <p className="text-xs tracking-widest text-gray-400 uppercase font-medium">
                  No items match your selected filters.
                </p>
                <button
                  onClick={handleClearAll}
                  className="mt-4 text-xs font-bold text-black uppercase underline underline-offset-4 tracking-wider hover:text-neutral-600 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {products?.map((product) => {
                  const isQuickAddOpen = activeQuickAddId === product._id;

                  return (
                    <div
                      key={product._id}
                      className="group flex flex-col bg-white relative"
                    >
                      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3 border border-gray-100 rounded-md">
                        <img
                          src={
                            !product?.mainImage
                              ? "https://placehold.co/400x533/png?text=No+Image"
                              : product.mainImage.startsWith("http")
                              ? product.mainImage
                              : product.mainImage.startsWith("/")
                              ? `${import.meta.env.VITE_API_URL || "https://fc-server-side.onrender.com"}${product.mainImage}`
                              : `${import.meta.env.VITE_API_URL || "https://fc-server-side.onrender.com"}/${product.mainImage}`
                          }
                          alt={product?.title || "Product Image"}
                          onClick={() => navigate(`/product/${product._id}`)}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src =
                              "https://placehold.co/400x533/png?text=No+Image";
                          }}
                          className="w-full h-full object-cover object-top cursor-pointer transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        />

                        {product.inStock === false && (
                          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm z-10">
                            Sold Out
                          </span>
                        )}

                        {!isQuickAddOpen && (
                          <button
                            disabled={product?.inStock === false}
                            onClick={() => {
                              setActiveQuickAddId(product._id);
                              setSelectedQuickSize(product?.sizes?.[0] || "");
                              setSelectedQuickColor(product?.colors?.[0] || "");
                            }}
                            className={`absolute bottom-0 left-0 w-full text-[11px] tracking-[0.2em] uppercase py-3.5 font-bold transition-transform duration-300 ease-in-out ${
                              product.inStock === false
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-black/90 text-white transform translate-y-full group-hover:translate-y-0 hover:bg-black"
                            }`}
                          >
                            {product?.inStock === false
                              ? "Sold Out"
                              : "Quick Add"}
                          </button>
                        )}

                        {isQuickAddOpen && (
                          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 flex flex-col justify-between z-10 animate-fadeIn">
                            <div className="flex justify-end">
                              <button
                                onClick={() => setActiveQuickAddId(null)}
                                className="text-gray-400 hover:text-black text-[10px] font-bold uppercase tracking-widest"
                              >
                                ✕ Close
                              </button>
                            </div>

                            <div className="space-y-4 my-auto">
                              <div>
                                <p className="text-[10px] tracking-wider text-gray-500 uppercase mb-1.5 font-bold">
                                  Size:
                                </p>
                                <div className="flex flex-wrap gap-1.5 justify-center">
                                  {product.sizes?.map((size) => (
                                    <button
                                      key={size}
                                      onClick={() => setSelectedQuickSize(size)}
                                      className={`px-2.5 py-1 text-[10px] border rounded transition-all ${
                                        selectedQuickSize === size
                                          ? "border-black bg-black text-white font-bold"
                                          : "border-gray-200 text-gray-600 hover:border-black"
                                      }`}
                                    >
                                      {size}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <p className="text-[10px] tracking-wider text-gray-500 uppercase mb-1.5 font-bold">
                                  Color:
                                </p>
                                <div className="flex flex-wrap gap-1.5 justify-center">
                                  {product.colors?.map((color) => (
                                    <button
                                      key={color}
                                      onClick={() => setSelectedQuickColor(color)}
                                      className={`px-2.5 py-1 text-[10px] border rounded transition-all ${
                                        selectedQuickColor === color
                                          ? "border-black bg-black text-white font-bold"
                                          : "border-gray-200 text-gray-600 hover:border-black"
                                      }`}
                                    >
                                      {color}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => handleAddToCart(product)}
                              className="w-full bg-black text-white text-[11px] tracking-widest uppercase py-3 font-bold rounded hover:bg-neutral-800 transition-colors"
                            >
                              Add to Cart
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="text-center px-1.5 py-1 space-y-1.5">
                        <h1
                          onClick={() => navigate(`/product/${product._id}`)}
                          className="text-[15px] sm:text-[16px] font-medium text-gray-900 hover:text-[#b5832a] cursor-pointer tracking-wider uppercase line-clamp-2 min-h-[42px] transition-colors"
                        >
                          {product.title}
                        </h1>

                        {product.sku && (
                          <p className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
                            SKU: {product.sku}
                          </p>
                        )}

                        <p className="text-[15px] sm:text-[16px] font-bold text-gray-900 tracking-wider">
                          Tk. {product.price?.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <CartSidebar />
      </div>
      <Footer />
    </div>
  );
};

// =========================================================================
//  🎯 ফিল্টার সেকশন (রিলিজ-বেসড প্রাইস স্লাইডার — Drag করলেই আপডেট হয় না,
//  ছাড়লে/থামলে তবেই আপডেট হয়)
// =========================================================================
const FilterContent = ({
  selectedColors,
  selectedSizes,
  selectedCategory,
  handleClearAll,
  categories,
  handleCategoryChange,
  filterColors,
  handleColorToggle,
  filterSizes,
  handleSizeToggle,
  sliderValue,
  handlePriceDrag,
  commitPriceRange,
  isDraggingPrice,
  setIsDraggingPrice,
  maxPrice,
}) => {
  const percent = maxPrice > 0 ? Math.round((sliderValue / maxPrice) * 100) : 0;

  return (
    <div className="space-y-6 text-gray-900 bg-white rounded-xl">
      {/* ফিল্টার হেডার */}
      <div className="flex justify-between items-center border-b-2 border-gray-900 pb-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 flex items-center gap-2">
          <FiFilter size={14} /> Filters
        </h2>
        {(selectedColors.length > 0 ||
          selectedSizes.length > 0 ||
          selectedCategory ||
          sliderValue < maxPrice) && (
          <button
            onClick={handleClearAll}
            className="text-[10px] font-bold text-red-600 uppercase tracking-wider underline underline-offset-2 hover:text-red-700 transition-colors"
          >
            Reset All
          </button>
        )}
      </div>

      {/* ১. ক্যাটাগরি ফিল্টার */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
          Collection
        </h3>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className={`w-full p-3 text-xs bg-gray-50 border text-gray-900 rounded-lg outline-none uppercase tracking-wider cursor-pointer font-medium transition-all ${
            selectedCategory
              ? "border-black font-bold bg-neutral-100 shadow-sm"
              : "border-gray-300 focus:border-black"
          }`}
        >
          <option value="">All Collections</option>
          {categories?.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 💰 ২. প্রাইস ফিল্টার — ছেড়ে দিলে তবেই আপডেট হবে */}
      <div className="border-t border-gray-200 pt-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
            Max Price
          </h3>
          <span
            className={`text-xs font-extrabold px-2.5 py-1 rounded-md border-2 shadow-sm transition-all ${
              isDraggingPrice
                ? "border-[#b5832a] text-[#b5832a] bg-[#b5832a]/5 scale-105"
                : "border-black text-black bg-gray-50"
            }`}
          >
            Tk. {sliderValue.toLocaleString()}
          </span>
        </div>

        {/* ড্র্যাগেবল স্লাইডার — মুভ করার সময় শুধু ভিজ্যুয়াল আপডেট,
            mouse up / touch end / keyboard release এ আসল ফিল্টার কমিট হয় */}
        <input
          type="range"
          min="0"
          max={maxPrice}
          step="100"
          value={sliderValue}
          onChange={handlePriceDrag}
          onMouseDown={() => setIsDraggingPrice(true)}
          onTouchStart={() => setIsDraggingPrice(true)}
          onMouseUp={commitPriceRange}
          onTouchEnd={commitPriceRange}
          onKeyUp={commitPriceRange}
          style={{
            background: `linear-gradient(to right, #000 0%, #000 ${percent}%, #e5e5e5 ${percent}%, #e5e5e5 100%)`,
          }}
          className="w-full accent-black cursor-pointer h-1.5 rounded-full appearance-none transition-all"
        />

        <div className="flex justify-between text-[11px] text-gray-500 font-bold mt-2">
          <span>Tk. 0</span>
          <span>Tk. {maxPrice.toLocaleString()}</span>
        </div>

        {isDraggingPrice && (
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1.5">
            Release to apply
          </p>
        )}
      </div>

      {/* ৩. কালার ফিল্টার */}
      <div className="border-t border-gray-200 pt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
          Color {selectedColors.length > 0 && `(${selectedColors.length})`}
        </h3>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {filterColors.map((color) => {
            const isChecked = selectedColors.includes(color);
            return (
              <label
                key={color}
                className={`flex items-center justify-between p-2 rounded-md cursor-pointer text-xs uppercase tracking-wider transition-all ${
                  isChecked
                    ? "bg-black text-white font-bold pl-3 shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleColorToggle(color)}
                    className="accent-black w-4 h-4 cursor-pointer"
                  />
                  <span>{color}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* ৪. সাইজ ফিল্টার */}
      <div className="border-t border-gray-200 pt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
          Size {selectedSizes.length > 0 && `(${selectedSizes.length})`}
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {filterSizes?.map((size) => {
            const isSelected = selectedSizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`py-2.5 text-[10px] font-bold border uppercase tracking-wider transition-all rounded-md ${
                  isSelected
                    ? "bg-black text-white border-black shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-black hover:bg-gray-50"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
//  🌟 স্কেলেটন লোডার্স (Shimmer Effect)
// =========================================================================
const ProductSkeleton = () => (
  <div className="animate-pulse flex flex-col bg-white">
    <div className="aspect-[3/4] bg-gray-200 rounded-md mb-3 w-full" />
    <div className="h-3.5 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
    <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mb-2" />
    <div className="h-3.5 bg-gray-200 rounded w-1/3 mx-auto" />
  </div>
);

const FilterSkeleton = () => (
  <div className="animate-pulse space-y-6">
    <div className="h-4 bg-gray-200 rounded w-1/2" />
    <div className="h-11 bg-gray-200 rounded-lg w-full" />
    <div className="h-14 bg-gray-200 rounded-lg w-full" />
    <div className="space-y-2">
      <div className="h-3 bg-gray-200 rounded w-1/3" />
      <div className="h-6 bg-gray-200 rounded-md w-full" />
      <div className="h-6 bg-gray-200 rounded-md w-full" />
    </div>
  </div>
);

export default Collection;