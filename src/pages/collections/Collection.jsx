// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useSearchParams } from "react-router-dom";

// const  Collection= () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchParams, setSearchParams] = useSearchParams();
  
//   // আগা নূর স্টাইলে একাধিক ফিল্টার সিলেক্ট করার জন্য অ্যারে স্টেট
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
//   const [categories, setCategories] = useState([]);


//   // URL of change category param update for selectedCategory
//   useEffect(() => {
//     const categoryFromUrl = searchParams.get("category");
//     setSelectedCategory(categoryFromUrl || "");
//   }, [searchParams])


//   useEffect(() => {
//     const fetchCategories = async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/api/products/categories");
//             setCategories(res.data.data);
//         } catch (error) {
//             console.log("Error loading categories:", error);
//         }
//     };
//     fetchCategories();
//   }, [])

//   // ডাটা ফেচিং ফাংশন
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       setLoading(true);
// //       try {
// //         let url = "http://localhost:5000/api/products";
// //         // const queryParams = [];
// //         const response = await axios.get(url, {
// //             params: {
// //                 category: selectedCategory || undefined
// //             }
// //         })


// //         // ১. ব্যাকএন্ডের জন্য ক্যাটাগরি কুয়েরি
// //         if (selectedCategory) {
// //           queryParams.push(`category=${encodeURIComponent(selectedCategory)}`);
// //         }

// //         // এপিআই ইউআরএল তৈরি
// //         if (queryParams.length > 0) {
// //           url += `?${queryParams.join("&")}`;
// //         }

// //         const response = await axios.get(url);
// //         let data = response.data.data;

// //         // ২. ফ্রন্টএন্ড লেভেলে একাধিক কালার ফিল্টারিং (Agha Noor Multi-select Style)
// //         if (selectedColors.length > 0) {
// //           data = data.filter((product) =>
// //             product.colors.some((color) => selectedColors.includes(color))
// //           );
// //         }

// //         // ৩. ফ্রন্টএন্ড লেভেলে একাধিক সাইজ ফিল্টারিং
// //         if (selectedSizes.length > 0) {
// //           data = data.filter((product) =>
// //             product.sizes.some((size) => selectedSizes.includes(size))
// //           );
// //         }

// //         setProducts(data);
// //       } catch (error) {
// //         console.error("Error loading products:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //     // ডিপেনডেন্সি অ্যারে একদম ঠিক করা হয়েছে, এখন ফিল্টার চেঞ্জ করলেই ডাটা রি-লোড হবে
// //   }, [selectedColors, selectedSizes, selectedCategory]);



// // ডাটা ফেচিং ফাংশন (Clean & Fixed)
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const url = "http://localhost:5000/api/products";
        
//         // ১. ব্যাকএন্ডের জন্য কুয়েরি প্যারামিটার পাঠানো (একদম প্রফেশনাল ওয়ে)
//         const response = await axios.get(url, {
//           params: {
//             category: selectedCategory || undefined // ক্যাটাগরি থাকলে যাবে, না থাকলে কুয়েরি ক্লিন থাকবে
//           }
//         });

//         let data = response.data.data;

//         // ২. ফ্রন্টএন্ড লেভেলে একাধিক কালার ফিল্টারিং
//         if (selectedColors.length > 0) {
//           data = data.filter((product) =>
//             product.colors.some((color) => selectedColors.includes(color))
//           );
//         }

//         // ৩. ফ্রন্টএন্ড লেভেলে একাধিক সাইজ ফিল্টারিং
//         if (selectedSizes.length > 0) {
//           data = data.filter((product) =>
//             product.sizes.some((size) => selectedSizes.includes(size))
//           );
//         }

//         setProducts(data);
//       } catch (error) {
//         console.error("Error loading products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [selectedColors, selectedSizes, selectedCategory]);


//   const handleCategoryChange = (value) => {
//     setSelectedCategory(value);
//     if(value){
//         searchParams({category: value})
//     } else {
//         setSearchParams({})
//     }
//   };

//   // মাল্টিপল কালার সিলেক্ট/ডিসিলেক্ট হ্যান্ডলার
//   const handleColorToggle = (color) => {
//     if (selectedColors.includes(color)) {
//       setSelectedColors(selectedColors.filter((c) => c !== color));
//     } else {
//       setSelectedColors([...selectedColors, color]);
//     }
//   };

//   // মাল্টিপল সাইজ সিলেক্ট/ডিসিলেক্ট হ্যান্ডলার
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

//   const filterColors = ["Red", "Maroon", "Black", "White", "Emerald Green", "Navy Blue", "Pink", "Mustard"];
//   const filterSizes = ["XS", "S", "M", "L", "XL", "Unstitched"];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white">
      
//       {/* আগা নূর স্টাইল মিনিমালিস্ট হেডার */}
//       <div className="text-center border-b border-gray-100 pb-8 mb-8">
//         <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-gray-900">
//           Ready To Wear
//         </h1>
//         <p className="text-xs tracking-wider text-gray-400 uppercase mt-2">
//           FC Luxury Premium Pret Kaftan & Suits
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
//         {/* ================= ১. আগা নূর স্টাইল ফিল্টার প্যানেল ================= */}
//         <div className="space-y-8 lg:sticky lg:top-6 h-fit bg-white">
//           <div className="flex justify-between items-center border-b border-gray-200 pb-4">
//             <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900">Filter By</h2>
//             {(selectedColors.length > 0 || selectedSizes.length > 0 || selectedCategory) && (
//               <button 
//                 onClick={handleClearAll} 
//                 className="text-[11px] font-bold text-red-600 uppercase tracking-wider underline underline-offset-4 hover:text-red-700"
//               >
//                 Clear All
//               </button>
//             )}
//           </div>

//           {/* ক) ক্যাটাগরি ফিল্টার ড্রপডাউন */}


//           <div>
//             <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">Collection</h3>
//             <select
//               value={selectedCategory}
//               onChange={(e) => handleCategoryChange(e.target.value)} // ✅ onChange এখন এখানে পারফেক্টলি কাজ করবে
//               className="w-full p-3 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 outline-none focus:border-red-600 uppercase tracking-wider"
//             >
//               <option value="">All Collections</option>
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* খ) কালার মাল্টি-সিলেক্ট চেক বক্স (আগা নূর টাইপ) */}
//           <div className="border-t border-gray-100 pt-6">
//             <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">Color</h3>
//             <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2 scrollbar-thin">
//               {filterColors.map((color) => {
//                 const isChecked = selectedColors.includes(color);
//                 return (
//                   <label key={color} className="flex items-center justify-between cursor-pointer group text-xs">
//                     <div className="flex items-center gap-3">
//                       <input
//                         type="checkbox"
//                         checked={isChecked}
//                         onChange={() => handleColorToggle(color)}
//                         className="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-gray-300 accent-red-600 cursor-pointer"
//                       />
//                       <span className={`text-gray-600 group-hover:text-red-600 transition-colors ${isChecked ? "font-bold text-red-600" : ""}`}>
//                         {color}
//                       </span>
//                     </div>
//                   </label>
//                 );
//               })}
//             </div>
//           </div>

//           {/* গ) সাইজ মাল্টি-সিলেক্ট গ্রিড */}
//           <div className="border-t border-gray-100 pt-6">
//             <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">Size</h3>
//             <div className="grid grid-cols-3 gap-2">
//               {filterSizes.map((size) => {
//                 const isSelected = selectedSizes.includes(size);
//                 return (
//                   <button
//                     key={size}
//                     onClick={() => handleSizeToggle(size)}
//                     className={`py-2.5 text-xs font-medium tracking-wide border transition-all duration-200 ${
//                       isSelected
//                         ? "bg-red-600 text-white border-red-600 font-bold"
//                         : "bg-white text-gray-600 border-gray-200 hover:border-red-600 hover:text-red-600"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ================= ২. প্রফেশনাল প্রোডাক্ট গ্রিড ডিসপ্লে ================= */}
//         <div className="lg:col-span-3">
//           {loading ? (
//             <div className="flex justify-center items-center h-96">
//               <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-red-600"></div>
//             </div>
//           ) : products.length === 0 ? (
//             <div className="text-center py-24 border border-dashed border-gray-200 bg-gray-50/50 rounded-xl">
//               <p className="text-xs tracking-widest text-gray-400 uppercase font-medium">
//                 No luxury items match your filters.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
//               {products.map((product) => (
//                 <div key={product._id} className="group flex flex-col justify-between bg-white relative">
                  
//                   {/* ই-কমার্স স্টাইল ইমেজিং থিম */}
//                   <div className="relative aspect-[3/4] w-full bg-gray-50 overflow-hidden cursor-pointer mb-4">
//                     <img
//                       src={`http://localhost:5000${product.mainImage}`}
//                       alt={product.title}
//                       className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700 ease-out"
//                     />
                    
//                     {/* স্টকআউট ব্যাজ */}
//                     {!product.inStock && (
//                       <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                         <span className="bg-white text-gray-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm">
//                           Sold Out
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   {/* টেক্সট এবং প্রাইস এরিয়া (Agha Noor Minimalist Style) */}
//                   <div className="space-y-1 text-center">
//                     <h3 className="text-[13px] font-medium text-gray-800 tracking-wide line-clamp-1 group-hover:text-red-600 transition-colors cursor-pointer px-1">
//                       {product.title}
//                     </h3>
//                     <p className="text-[12px] font-bold text-gray-900 tracking-wider">
//                       Rs. {product.price.toLocaleString()}
//                     </p>
//                     <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
//                       SKU: {product.sku}
//                     </p>
//                   </div>
                  
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default  Collection;




























import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom"; // useNavigate যুক্ত করা হয়েছে

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate(); // ডিটেইলস পেজে রিডাইরেক্ট করার জন্য
  
  // ফিল্টারিং স্টেট
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [categories, setCategories] = useState([]);

  // ================= 🛒 কুইক অ্যাড এর জন্য নতুন স্টেটসমূহ =================
  const [activeQuickAddId, setActiveQuickAddId] = useState(null);
  const [selectedQuickSize, setSelectedQuickSize] = useState("");
  const [selectedQuickColor, setSelectedQuickColor] = useState("");

  // ১. URL-এর ক্যাটাগরি প্যারামিটার চেঞ্জ হলে স্টেট আপডেট করা
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    setSelectedCategory(categoryFromUrl || "");
  }, [searchParams]);

  // ২. ডাটাবেজ থেকে ডাইনামিক ক্যাটাগরি লিস্ট নিয়ে আসা
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/categories");
        setCategories(res.data.data);
      } catch (error) {
        console.log("Error loading categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // ৩. প্রোডাক্ট ডাটা ফেচিং ফাংশন
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = "http://localhost:5000/api/products";
        
        const response = await axios.get(url, {
          params: {
            category: selectedCategory || undefined
          }
        });

        let data = response.data.data;

        // কালার ফিল্টারিং
        if (selectedColors.length > 0) {
          data = data.filter((product) =>
            product.colors.some((color) => selectedColors.includes(color))
          );
        }

        // সাইজ ফিল্টারিং
        if (selectedSizes.length > 0) {
          data = data.filter((product) =>
            product.sizes.some((size) => selectedSizes.includes(size))
          );
        }

        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedColors, selectedSizes, selectedCategory]);

  // কার্ট কাউন্ট এবং কার্ট হ্যান্ডলার (টেস্ট করার জন্য অ্যালার্ট দেওয়া আছে)
  const handleAddToCart = (product) => {
    if (!selectedQuickSize || !selectedQuickColor) {
      alert("Please select both Size and Color!");
      return;
    }
    
    // 💡 এখানে পরবর্তীতে আপনার কার্ট কনটেক্সট/স্টেট (যেমন: addToCart(product, selectedQuickSize...)) ফাংশনটি বসবে
    alert(`Added to Cart: ${product.title}\nSize: ${selectedQuickSize}\nColor: ${selectedQuickColor}`);
    
    // সাকসেস হলে কুইক অ্যাড প্যানেল বন্ধ করা
    setActiveQuickAddId(null);
    setSelectedQuickSize("");
    setSelectedQuickColor("");
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

  const handleClearAll = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategory("");
    setSearchParams({});
  };

  const filterColors = ["Red", "Maroon", "Black", "White", "Emerald Green", "Navy Blue", "Pink", "Mustard"];
  const filterSizes = ["XS", "S", "M", "L", "XL", "Unstitched"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white">
      
      {/* হেডার */}
      <div className="text-center border-b border-gray-100 pb-8 mb-8">
        <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-gray-900">
          Ready To Wear
        </h1>
        <p className="text-xs tracking-wider text-gray-400 uppercase mt-2">
          FC Luxury Premium Pret Kaftan & Suits
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* ================= ১. ফিল্টার প্যানেল ================= */}
        <div className="space-y-8 lg:sticky lg:top-6 h-fit bg-white">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900">Filter By</h2>
            {(selectedColors.length > 0 || selectedSizes.length > 0 || selectedCategory) && (
              <button 
                onClick={handleClearAll} 
                className="text-[11px] font-bold text-red-600 uppercase tracking-wider underline underline-offset-4 hover:text-red-700"
              >
                Clear All
              </button>
            )}
          </div>

          {/* ক) ক্যাটাগরি ফিল্টার ড্রপডাউন */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">Collection</h3>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full p-3 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 outline-none focus:border-red-600 uppercase tracking-wider"
            >
              <option value="">All Collections</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* খ) কালার ফিল্টার */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">Color</h3>
            <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2">
              {filterColors.map((color) => {
                const isChecked = selectedColors.includes(color);
                return (
                  <label key={color} className="flex items-center gap-3 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleColorToggle(color)}
                      className="accent-red-600 w-4 h-4"
                    />
                    <span className={isChecked ? "font-bold text-red-600" : "text-gray-600"}>
                      {color}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* গ) সাইজ ফিল্টার */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {filterSizes.map((size) => {
                const isSelected = selectedSizes.includes(size);
                return (
                  <button
                    key={size}
                    onClick={() => handleSizeToggle(size)}
                    className={`py-2.5 text-xs font-medium border transition-all ${
                      isSelected
                        ? "bg-red-600 text-white border-red-600 font-bold"
                        : "bg-white text-gray-600 border-gray-200 hover:border-red-600"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= ২. প্রোডাক্ট গ্রিড (হোভার এবং কুইক অ্যাড সহ আপডেট করা) ================= */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-red-600"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-gray-200 bg-gray-50 rounded-xl">
              <p className="text-xs tracking-widest text-gray-400 uppercase">No items match your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
              {products.map((product) => {
                console.log(product._id);
                const isQuickAddOpen = activeQuickAddId === product._id;

                return (
                  <div key={product._id} className="group flex flex-col bg-white relative">
                    
                    {/* ইমেজ এবং কুইক অ্যাড এরিয়া */}
                    <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3 border border-gray-100">
                      
                      {/* মূল প্রোডাক্ট ইমেজ - সরাসরি ক্লিক করলে ডিটেইলস পেজে যাবে */}
                      <img
                        src={`http://localhost:5000${product.mainImage}`}
                        alt={product.title}
                        onClick={() => navigate(`/product/${product._id}`)}  
                        className="w-full h-full object-cover object-top cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />

                      {/* মাউস হোভার করলে নিচ থেকে স্লাইড করে আসা Quick Add বাটন */}
                      {!isQuickAddOpen && (
                        <button
                          onClick={() => {
                            setActiveQuickAddId(product._id);
                            setSelectedQuickSize(product.sizes[0] || ""); 
                            setSelectedQuickColor(product.colors[0] || "");
                          }}
                          className="absolute bottom-0 left-0 w-full bg-black/80 text-white text-[11px] tracking-[0.2em] uppercase py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out font-medium hover:bg-neutral-900"
                        >
                          Quick Add
                        </button>
                      )}

                      {/* কুইক অ্যাড একটিভ হলে সাইজ/কালার সিলেক্ট করার ওভারলে */}
                      {isQuickAddOpen && (
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 flex flex-col justify-between z-10 animate-fadeIn">
                          
                          {/* ক্লোজ বাটন */}
                          <div className="flex justify-end">
                            <button 
                              onClick={() => setActiveQuickAddId(null)} 
                              className="text-gray-400 hover:text-black text-[10px] font-bold uppercase tracking-widest"
                            >
                              ✕ Close
                            </button>
                          </div>

                          {/* অপশনস কন্টেইনার */}
                          <div className="space-y-4 my-auto">
                            {/* সাইজ সিলেকশন */}
                            <div>
                              <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">Select Size:</p>
                              <div className="flex flex-wrap gap-1.5 justify-center">
                                {product.sizes.map((size) => (
                                  <button
                                    key={size}
                                    onClick={() => setSelectedQuickSize(size)}
                                    className={`px-2 py-1 text-[10px] border transition-all ${
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

                            {/* কালার সিলেকশন */}
                            <div>
                              <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">Select Color:</p>
                              <div className="flex flex-wrap gap-1.5 justify-center">
                                {product.colors.map((color) => (
                                  <button
                                    key={color}
                                    onClick={() => setSelectedQuickColor(color)}
                                    className={`px-2 py-1 text-[10px] border transition-all ${
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
                          </div>

                          {/* ফাইনাল অ্যাড টু কার্ট বাটন */}
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-neutral-900 text-white text-[10px] tracking-widest uppercase py-2.5 font-medium hover:bg-black transition-colors"
                          >
                            Add to Cart
                          </button>

                        </div>
                      )}

                    </div>

                    {/* প্রোডাক্ট টাইটেল ও প্রাইস */}
                    <div className="text-center px-1">
                      <h3 
                        onClick={() => navigate(`/products/${product._id}`)}
                        className="text-[12px] sm:text-[13px] font-normal text-gray-800 hover:text-gray-500 cursor-pointer truncate tracking-wide"
                      >
                        {product.title}
                      </h3>
                      <p className="text-[12px] font-semibold text-gray-900 mt-1 tracking-wider">
                        Rs. {product.price.toLocaleString()}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Collection;