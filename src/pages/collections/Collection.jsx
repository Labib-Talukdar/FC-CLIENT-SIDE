// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useCart } from "../../context/CartContext";
// import { useSearchParams, useNavigate } from "react-router-dom"; // useNavigate যুক্ত করা হয়েছে
// import CartSidebar from "../../components/cartsidebar/cardSidebar";

// const Collection = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate(); // ডিটেইলস পেজে রিডাইরেক্ট করার জন্য

//   // ফিল্টারিং স্টেট
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(
//     searchParams.get("category") || "",
//   );
//   const [categories, setCategories] = useState([]);
//   // cart component func
//   const { addToCart } = useCart();

//   // ================= 🛒 কুইক অ্যাড এর জন্য নতুন স্টেটসমূহ =================
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
//           "http://localhost:5000/api/products/categories",
//         );
//         setCategories(res.data.data);
//       } catch (error) {
//         console.log("Error loading categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // ৩. প্রোডাক্ট ডাটা ফেচিং ফাংশন
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const url = "http://localhost:5000/api/products";

//         const response = await axios.get(url, {
//           params: {
//             category: selectedCategory || undefined,
//           },
//         });

//         let data = response.data.data;

//         // কালার ফিল্টারিং
//         if (selectedColors.length > 0) {
//           data = data.filter((product) =>
//             product.colors.some((color) => selectedColors.includes(color)),
//           );
//         }

//         // সাইজ ফিল্টারিং
//         if (selectedSizes.length > 0) {
//           data = data.filter((product) =>
//             product.sizes.some((size) => selectedSizes.includes(size)),
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

//   const handleAddToCart = (product) => {
//     // 🎯 শুধু মাত্র এই প্রোডাক্টের জন্য সিলেক্ট করা সাইজ এবং কালার চেক হবে
//     if (!selectedQuickSize || !selectedQuickColor) {
//       alert("Please select both Size and Color!");
//       return;
//     }

//     // 🎯 সঠিক সিরিয়ালে কনটেক্সটের ফাংশন কল (প্রথমে size, তারপর color)
//     addToCart(product, selectedQuickSize, selectedQuickColor);

//     // 🎯 প্রোডাক্ট অ্যাড হয়ে গেলে কুইক অ্যাড প্যানেলটি অটোমেটিক বন্ধ করে দেওয়ার জন্য:
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
//   const filterSizes = ["XS", "S", "M", "L", "XL", "Unstitched"];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white">
//       {/* হেডার */}
//       <div className="text-center border-b border-gray-100 pb-8 mb-8">
//         <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-gray-900">
//           Ready To Wear
//         </h1>
//         <p className="text-xs tracking-wider text-gray-400 uppercase mt-2">
//           FC Luxury Premium Pret Kaftan & Suits
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* ================= ১. ফিল্টার প্যানেল ================= */}
//         <div className="space-y-8 lg:sticky lg:top-6 h-fit bg-white">
//           <div className="flex justify-between items-center border-b border-gray-200 pb-4">
//             <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900">
//               Filter By
//             </h2>
//             {(selectedColors.length > 0 ||
//               selectedSizes.length > 0 ||
//               selectedCategory) && (
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
//             <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">
//               Collection
//             </h3>
//             <select
//               value={selectedCategory}
//               onChange={(e) => handleCategoryChange(e.target.value)}
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

//           {/* খ) কালার ফিল্টার */}
//           <div className="border-t border-gray-100 pt-6">
//             <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
//               Color
//             </h3>
//             <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2">
//               {filterColors.map((color) => {
//                 const isChecked = selectedColors.includes(color);
//                 return (
//                   <label
//                     key={color}
//                     className="flex items-center gap-3 cursor-pointer text-xs"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={isChecked}
//                       onChange={() => handleColorToggle(color)}
//                       className="accent-red-600 w-4 h-4"
//                     />
//                     <span
//                       className={
//                         isChecked ? "font-bold text-red-600" : "text-gray-600"
//                       }
//                     >
//                       {color}
//                     </span>
//                   </label>
//                 );
//               })}
//             </div>
//           </div>

//           {/* গ) সাইজ ফিল্টার */}
//           <div className="border-t border-gray-100 pt-6">
//             <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
//               Size
//             </h3>
//             <div className="grid grid-cols-3 gap-2">
//               {filterSizes.map((size) => {
//                 const isSelected = selectedSizes.includes(size);
//                 return (
//                   <button
//                     key={size}
//                     onClick={() => handleSizeToggle(size)}
//                     className={`py-2.5 text-xs font-medium border transition-all ${
//                       isSelected
//                         ? "bg-red-600 text-white border-red-600 font-bold"
//                         : "bg-white text-gray-600 border-gray-200 hover:border-red-600"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ================= ২. প্রোডাক্ট গ্রিড (হোভার এবং কুইক অ্যাড সহ আপডেট করা) ================= */}
//         <div className="lg:col-span-3">
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-red-600"></div>
//             </div>
//           ) : products.length === 0 ? (
//             <div className="text-center py-16 border border-dashed border-gray-200 bg-gray-50 rounded-xl">
//               <p className="text-xs tracking-widest text-gray-400 uppercase">
//                 No items match your filters.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
//               {products.map((product) => {
//                 console.log(product._id);
//                 const isQuickAddOpen = activeQuickAddId === product._id;

//                 return (
//                   <div
//                     key={product._id}
//                     className="group flex flex-col bg-white relative"
//                   >
//                     {/* ইমেজ এবং কুইক অ্যাড এরিয়া */}

//                     <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3 border border-gray-100">
//                       {/* মূল প্রোডাক্ট ইমেজ - সরাসরি ক্লিক করলে ডিটেইলস পেজে যাবে */}
//                       <img
//                         src={`${import.meta.env.VITE_API_URL}${product.mainImage}`}
//                         alt={product.title}
//                         onClick={() => navigate(`/product/${product._id}`)}

//                         className="w-full h-full object-cover object-top cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"

//                       />

//                       {
//                         product.inStock === false && (
//                           <span className="absolute top-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
//                             Sold Out</span>
//                         )
//                       }

//                       {/* মাউস হোভার করলে নিচ থেকে স্লাইড করে আসা Quick Add বাটন */}
//                       {!isQuickAddOpen &&  (
//                         <button
//                         disabled={product.inStock === false}
//                           onClick={() => {
//                             setActiveQuickAddId(product._id);
//                             setSelectedQuickSize(product.sizes[0] || "");
//                             setSelectedQuickColor(product.colors[0] || "");
//                           }}
//                           className={`absolute bottom-0 left-0 w-full text-[11px] tracking-[0.2em] uppercase py-3 font-medium transition-transform duration-300 ease-in-out ${
//         product.inStock === false
//           ? "bg-gray-300 text-gray-500 cursor-not-allowed transform translate-y-full group-hover:translate-y-0 " // ডিজেবল স্টেট
//           : "bg-black/80 text-white transform translate-y-full group-hover:translate-y-0 hover:bg-neutral-900" // একটিভ স্টেট
//       }`}
//     >
//       {product.inStock === false ? "Sold Out" : "Quick Add"}

//                         </button>
//                       )}

//                       {/* কুইক অ্যাড একটিভ হলে সাইজ/কালার সিলেক্ট করার ওভারলে */}
//                       {isQuickAddOpen && (
//                         <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 flex flex-col justify-between z-10 animate-fadeIn">
//                           {/* ক্লোজ বাটন */}
//                           <div className="flex justify-end">
//                             <button
//                               onClick={() => setActiveQuickAddId(null)}
//                               className="text-gray-400 hover:text-black text-[10px] font-bold uppercase tracking-widest"
//                             >
//                               ✕ Close
//                             </button>
//                           </div>

//                           {/* অপশনস কন্টেইনার */}
//                           <div className="space-y-4 my-auto">
//                             {/* সাইজ সিলেকশন */}
//                             <div>
//                               <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">
//                                 Select Size:
//                               </p>
//                               <div className="flex flex-wrap gap-1.5 justify-center">
//                                 {product.sizes.map((size) => (
//                                   <button
//                                     key={size}
//                                     onClick={() => setSelectedQuickSize(size)}
//                                     className={`px-2 py-1 text-[10px] border transition-all ${
//                                       selectedQuickSize === size
//                                         ? "border-black bg-black text-white font-bold"
//                                         : "border-gray-200 text-gray-600 hover:border-gray-400"
//                                     }`}
//                                   >
//                                     {size}
//                                   </button>
//                                 ))}
//                               </div>
//                             </div>

//                             {/* কালার সিলেকশন */}
//                             <div>
//                               <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">
//                                 Select Color:
//                               </p>
//                               <div className="flex flex-wrap gap-1.5 justify-center">
//                                 {product.colors.map((color) => (
//                                   <button
//                                     key={color}
//                                     onClick={() => setSelectedQuickColor(color)}
//                                     className={`px-2 py-1 text-[10px] border transition-all ${
//                                       selectedQuickColor === color
//                                         ? "border-black bg-black text-white font-bold"
//                                         : "border-gray-200 text-gray-600 hover:border-gray-400"
//                                     }`}
//                                   >
//                                     {color}
//                                   </button>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>

//                           <button
//                             onClick={() => handleAddToCart(product)}
//                             className="w-full bg-neutral-900 text-white text-[10px] tracking-widest uppercase py-2.5 font-medium hover:bg-black transition-colors"
//                           >
//                             Add to Cart
//                           </button>
//                         </div>
//                       )}
//                     </div>

//                     {/* প্রোডাক্ট টাইটেল ও প্রাইস */}
//                     <div className="text-center px-1">
//                       <h1
//                         onClick={() => navigate(`/product/${product._id}`)}
//                         className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-gray-950 hover:text-gray-500 cursor-pointer truncate tracking-wide"
//                       >
//                         {product.title}
//                       </h1>
//                       <p className="text-[17px] font-semibold text-gray-900 mt-1 tracking-wider">
//                         Tk. {product.price.toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//       <CartSidebar></CartSidebar>
//     </div>
//   );
// };

// export default Collection;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { useSearchParams, useNavigate } from "react-router-dom";
import CartSidebar from "../../components/cartsidebar/cardSidebar";
// 🎯 সাইডবার কন্ট্রোল ও লাক্সারি ফিল্টারের জন্য রিঅ্যাক্ট আইকনস নিয়ে আসা হলো
import { FiFilter, FiX } from "react-icons/fi";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // ফিল্টারিং স্টেট
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "",
  );
  const [categories, setCategories] = useState([]);

  // 📱 মোবাইল সাইডবার ওপেন/ক্লোজ করার স্টেট
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // cart component func
  const { addToCart } = useCart();

  // ================= 🛒 কুইক অ্যাড এর জন্য স্টেটসমূহ =================
  const [activeQuickAddId, setActiveQuickAddId] = useState(null);
  const [selectedQuickSize, setSelectedQuickSize] = useState("");
  const [selectedQuickColor, setSelectedQuickColor] = useState("");

  // ১. URL-এর ক্যাটাগরি প্যারামিটার চেঞ্জ হলে স্টেট আপডেট করা
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    setSelectedCategory(categoryFromUrl || "");
  }, [searchParams]);

  // ২. ডাটাবেজ থেকে ডাইনামিক ক্যাটাগরি লিস্ট নিয়ে আসা
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/categories",
        );
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
            category: selectedCategory || undefined,
          },
        });

        let data = response.data.data;

        // কালার ফিল্টারিং
        if (selectedColors.length > 0) {
          data = data.filter((product) =>
            product.colors.some((color) => selectedColors.includes(color)),
          );
        }

        // সাইজ ফিল্টারিং
        if (selectedSizes.length > 0) {
          data = data.filter((product) =>
            product.sizes.some((size) => selectedSizes.includes(size)),
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

  const handleClearAll = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategory("");
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
  const filterSizes = ["XS", "S", "M", "L", "XL", "Unstitched"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white select-none">
      {/* হেডার */}
      <div className="text-center border-b border-gray-100 pb-8 mb-8">
        <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-gray-900">
          Ready To Wear
        </h1>
        <p className="text-xs tracking-wider text-gray-400 uppercase mt-2">
          FC Luxury Premium Pret Kaftan & Suits
        </p>
      </div>

      {/* 📱 মোবাইল ডিভাইসের জন্য ফিল্টার বাটন (বড় স্ক্রিনে লুকানো থাকবে) */}
      <div className="lg:hidden w-full mb-6">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="w-full py-3.5 px-5 bg-neutral-50 border border-gray-200 rounded-lg flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:bg-neutral-100 transition-all active:scale-[0.98]"
        >
          <span className="flex items-center gap-2">
            <FiFilter size={14} /> Filter By
          </span>
          {(selectedColors.length > 0 ||
            selectedSizes.length > 0 ||
            selectedCategory) && (
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* ================= 💻 ১. ডেক্সটপ ফিল্টার প্যানেল (বড় স্ক্রিনে ফিক্সড থাকবে) ================= */}
        <div className="hidden lg:block space-y-8 lg:sticky lg:top-6 h-fit bg-white">
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
          />
        </div>

        {/* ================= 📱 ২. মোবাইল রাইট সাইডবার ড্রয়ার (স্ক্রিনের ৭৫% জায়গা নিবে) ================= */}
        {/* ব্যাকড্রপ ওভারলে */}
        <div
          className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 lg:hidden ${
            isSidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* মেইন স্লাইড-আউট সাইডবার ড্রয়ার */}
        <div
          className={`fixed top-0 right-0 h-full w-[75vw] sm:max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden flex flex-col ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* সাইডবার হেডার */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 flex items-center gap-2">
              <FiFilter size={14} /> Filter By
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* সাইডবারের ভেতরের ফিল্টার সামগ্রী */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <FilterContent
              selectedColors={selectedColors}
              selectedSizes={selectedSizes}
              selectedCategory={selectedCategory}
              handleClearAll={() => {
                handleClearAll();
                setIsSidebarOpen(false);
              }}
              categories={categories}
              handleCategoryChange={handleCategoryChange}
              filterColors={filterColors}
              handleColorToggle={handleColorToggle}
              filterSizes={filterSizes}
              handleSizeToggle={handleSizeToggle}
            />
          </div>
        </div>

        {/* ================= 🛍️ ৩. প্রোডাক্ট গ্রিড সেকশন ================= */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-red-600"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-gray-200 bg-gray-50 rounded-xl">
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                No items match your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
              {products.map((product) => {
                const isQuickAddOpen = activeQuickAddId === product._id;

                return (
                  <div
                    key={product._id}
                    className="group flex flex-col bg-white relative"
                  >
                    {/* ইমেজ এবং কুইক অ্যাড এরিয়া */}
                    <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3 border border-gray-100">
                      <img
                        src={`${import.meta.env.VITE_API_URL}${product.mainImage}`}
                        alt={product.title}
                        onClick={() => navigate(`/product/${product._id}`)}
                        className="w-full h-full object-cover object-top cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
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
                            setSelectedQuickSize(product.sizes[0] || "");
                            setSelectedQuickColor(product.colors[0] || "");
                          }}
                          className={`absolute bottom-0 left-0 w-full text-[11px] tracking-[0.2em] uppercase py-3 font-medium transition-transform duration-300 ease-in-out ${
                            product.inStock === false
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed transform translate-y-full group-hover:translate-y-0"
                              : "bg-black/80 text-white transform translate-y-full group-hover:translate-y-0 hover:bg-neutral-900"
                          }`}
                        >
                          {product.inStock === false ? "Sold Out" : "Quick Add"}
                        </button>
                      )}

                      {/* কুইক অ্যাড একটিভ প্যানেল */}
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
                              <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">
                                Select Size:
                              </p>
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

                            <div>
                              <p className="text-[10px] tracking-wider text-gray-400 uppercase mb-1.5 font-bold">
                                Select Color:
                              </p>
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

                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-neutral-900 text-white text-[10px] tracking-widest uppercase py-2.5 font-medium hover:bg-black transition-colors"
                          >
                            Add to Cart
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 👑 প্রোডাক্ট টাইটেল ও প্রাইস (আপনার রিকোয়ারমেন্ট অনুযায়ী সুন্দর বড় সাইজ করা হয়েছে) */}
                    {/* 👑 প্রোডাক্ট টাইটেল ও প্রাইস */}
                    <div className="text-center px-2 py-3 space-y-1.5">
                      <h1
                        onClick={() => navigate(`/product/${product._id}`)}
                        className="text-[16px] sm:text-[18px] md:text-[19px] font-medium text-gray-950 hover:text-[#b5832a] cursor-pointer tracking-widest uppercase line-clamp-2 h-[50px] overflow-hidden min-h-[48px]"
                      >
                        {product.title}
                      </h1>
                      <p className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-gray-900 tracking-wider">
                        Tk. {product.price.toLocaleString()}
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
  );
};

// =========================================================================
//  ফিল্টার সামগ্রী আলাদা কম্পোনেন্টে রাখা হলো
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
}) => (
  <>
    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900">
        Filter By
      </h2>
      {(selectedColors.length > 0 ||
        selectedSizes.length > 0 ||
        selectedCategory) && (
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
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">
        Collection
      </h3>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="w-full p-3.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 outline-none focus:border-black uppercase tracking-wider cursor-pointer"
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
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
        Color
      </h3>
      <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
        {filterColors.map((color) => {
          const isChecked = selectedColors.includes(color);
          return (
            <label
              key={color}
              className="flex items-center gap-3 cursor-pointer text-xs uppercase tracking-wider"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleColorToggle(color)}
                className="accent-black w-4 h-4 cursor-pointer"
              />
              <span
                className={isChecked ? "font-bold text-black" : "text-gray-600"}
              >
                {color}
              </span>
            </label>
          );
        })}
      </div>
    </div>

    {/* গ) সাইজ ফিল্টার */}
    <div className="border-t border-gray-100 pt-6">
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
        Size
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {filterSizes.map((size) => {
          const isSelected = selectedSizes.includes(size);
          return (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`py-3 text-xs font-medium border uppercase tracking-wider transition-all rounded-md ${
                isSelected
                  ? "bg-black text-white border-black font-bold shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-black"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  </>
);

export default Collection;
