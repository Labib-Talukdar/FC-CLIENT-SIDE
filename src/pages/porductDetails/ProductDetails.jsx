 


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import CartSidebar from "../../components/cartsidebar/cardSidebar";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/foter/Footer";
import RecentlyViewed from "../../components/recentlyviewed/RecentlyViewed"; // 👈 RecentlyViewed কম্পোনেন্ট ইমপোর্ট

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [activeImage, setActiveImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/single/${id}`
        );
        const productData = response.data?.data || response.data;

        setProduct(productData || null);
        setActiveImage(productData?.mainImage || "");

        if (productData?.sizes?.length > 0)
          setSelectedSize(productData.sizes[0]);
        if (productData?.colors?.length > 0)
          setSelectedColor(productData.colors[0]);

        // 🌟 RECENTLY VIEWED LOGIC STARTS HERE
        if (productData && productData._id) {
          const existingViewed =
            JSON.parse(localStorage.getItem("recentlyViewed")) || [];

          // আগের সেম প্রোডাক্ট থাকলে সরিয়ে দেওয়া (ডুপ্লিকেট এড়াতে)
          const filteredList = existingViewed.filter(
            (item) => item._id !== productData._id
          );

          const productWithTime = {
            ...productData,
            viewedAt: new Date().getTime(),
          }

          // নতুন প্রোডাক্টটিকে সবার সামনে (Top) যুক্ত করা
          const updatedList = [productWithTime, ...filteredList];

          // সর্বোচ্চ ১০টি প্রোডাক্ট ব্রাউজারে রাখবে
          if (updatedList.length > 10) {
            updatedList.pop();
          }

          localStorage.setItem("recentlyViewed", JSON.stringify(updatedList));
        }
        // 🌟 RECENTLY VIEWED LOGIC ENDS HERE

      } catch (error) {
        console.error("Error loading product details:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Add to Cart Handler
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select both Size and Color!");
      return false;
    }
    addToCart(product, selectedColor, selectedSize);
    return true;
  };

  // Order Now Handler (Direct Checkout)
  const handleOrderNow = () => {
    const isAdded = handleAddToCart();
    if (isAdded) {
      navigate("/checkout"); // সরাসরি চেকআউট পেজে রিডাইরেক্ট করবে
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 font-sans tracking-widest text-gray-500 uppercase">
        Product Not Found!
      </div>
    );
  }

  const galleryImages = [
    product.mainImage,
    ...(product.galleryImages || []),
  ].filter(Boolean);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-900 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* IMAGE GALLERY */}
          <div className="lg:col-span-7 space-y-4">
            {/* MAIN IMAGE CONTAINER */}
            <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden border border-gray-100">
              <img
                src={
                  !activeImage
                    ? "https://via.placeholder.com/600x800?text=No+Image"
                    : activeImage.startsWith("http")
                    ? activeImage
                    : `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/${activeImage.replace(/^\//, "")}`
                }
                alt={product.title}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x800?text=Image+Error";
                }}
                className="w-full h-full object-cover object-top transition-all duration-500"
              />
            </div>

            {/* THUMBNAILS GRID */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((imgUrl, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`aspect-[3/4] bg-gray-50 overflow-hidden border cursor-pointer transition-all ${
                    activeImage === imgUrl
                      ? "border-black p-0.5"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={
                      !imgUrl
                        ? "https://via.placeholder.com/150?text=No+Image"
                        : imgUrl.startsWith("http")
                        ? imgUrl
                        : `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/${imgUrl.replace(/^\//, "")}`
                    }
                    alt={`Thumbnail ${index + 1}`}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150?text=Error";
                    }}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6 lg:sticky lg:top-8 h-fit">
            <div className="border-b border-gray-100 pb-6">
              <h1 className="text-xl md:text-2xl font-normal tracking-wide text-gray-800 leading-tight">
                {product.title}
              </h1>
              <p className="text-xl font-bold text-gray-900 mt-3 tracking-wider">
                Tk. {product.price?.toLocaleString()}
              </p>
            </div>

            {/* SIZE */}
            {product.sizes?.length > 0 && (
              <div className="border-b border-gray-100 pb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-3">
                  Size
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const isOutOfStock = product.inStock === false;
                    const isSelected = selectedSize === size;

                    return (
                      <button
                        key={size}
                        onClick={() => !isOutOfStock && setSelectedSize(size)}
                        disabled={isOutOfStock}
                        className={`px-4 w-20 h-12 py-2 text-xs font-medium border transition-all tracking-wider uppercase relative ${
                          isOutOfStock
                            ? "text-gray-400 border-gray-300 bg-[linear-gradient(to_top_right,transparent_49%,#fca5a5_49%,#fca5a5_51%,transparent_51%)] cursor-not-allowed"
                            : isSelected
                            ? "bg-black text-white border-black font-bold"
                            : "bg-white text-gray-600 border-gray-200 hover:border-black"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* COLOR */}
            {product.colors?.length > 0 && (
              <div className="border-b border-gray-100 pb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-3">
                  COLOR
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => {
                    const isOutOfStockColor = product.inStock === false;
                    const isSelected = selectedColor === color;

                    return (
                      <button
                        key={color}
                        onClick={() =>
                          !isOutOfStockColor && setSelectedColor(color)
                        }
                        className={`px-4 py-4 h-13 text-xs font-medium border transition-all tracking-wider uppercase relative ${
                          isOutOfStockColor
                            ? "text-gray-400 border-gray-300 bg-[linear-gradient(to_top_right,transparent_49%,#fca5a5_49%,#fca5a5_51%,transparent_51%)] cursor-not-allowed"
                            : isSelected
                            ? "bg-black text-white border-black font-bold"
                            : "bg-white text-gray-600 border-gray-200 hover:border-black"
                        }`}
                      >
                        {color}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* DESCRIPTION */}
            {product.fabric && (
              <div className="text-gray-600 text-xs leading-relaxed tracking-wide space-y-2 border-b border-gray-100 pb-6">
                <h3 className="text-[16px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Product Fabric
                </h3>
                <p className="whitespace-pre-line text-[12px]">
                  {product.fabric}
                </p>
              </div>
            )}
            {product.description && (
              <div className="text-gray-600 text-xs leading-relaxed tracking-wide space-y-2 border-b border-gray-100 pb-6">
                <h3 className="text-[16px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Product Description
                </h3>
                <p className="whitespace-pre-line text-[12px]">
                  {product.description}
                </p>
              </div>
            )}
            {product.disclaimer && (
              <div className="text-gray-600 text-xs leading-relaxed tracking-wide space-y-2 border-b border-gray-100 pb-6">
                <h3 className="text-[16px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Product Disclaimer
                </h3>
                <p className="whitespace-pre-line text-[12px]">
                  {product.disclaimer}
                </p>
              </div>
            )}

            {/* ACTION BUTTONS (ADD TO CART & ORDER NOW) */}
            <div className="space-y-3 pt-2">
              {/* ADD TO CART BUTTON */}
              <button
                disabled={product.inStock === false}
                onClick={handleAddToCart}
                className={`w-full py-4 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 ease-in-out cursor-pointer border ${
                  product.inStock === false
                    ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "bg-white text-black border-black hover:bg-black hover:text-white"
                }`}
              >
                {product.inStock === false ? "Sold Out" : "Add to Cart"}
              </button>

              {/* ORDER NOW BUTTON */}
              <button
                disabled={product.inStock === false}
                onClick={handleOrderNow}
                className={`w-full py-4 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 ease-in-out cursor-pointer ${
                  product.inStock === false
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white hover:bg-neutral-800 shadow-md active:scale-[0.99]"
                }`}
              >
                {product.inStock === false ? "Out of Stock" : "Order Now"}
              </button>
            </div>
          </div>
        </div>

        {/* 🌟 RECENTLY VIEWED SECTION */}
        <RecentlyViewed />

        <CartSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;