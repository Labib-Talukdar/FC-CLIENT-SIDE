 

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import CartSidebar from "../../components/cartsidebar/cardSidebar";
import Navbar from "../../components/navbar/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
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
        // ✅ FIX: repeated localhost prefix ar literal "VITE_API_URL" text bad diye
        // shudhu env variable ${import.meta.env.VITE_API_URL} diye interpolate kora holo
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/single/${id}`,
        );
        const productData = response.data?.data || response.data;

        setProduct(productData || null);
        setActiveImage(productData?.mainImage || "");

        if (productData?.sizes?.length > 0)
          setSelectedSize(productData.sizes[0]);
        if (productData?.colors?.length > 0)
          setSelectedColor(productData.colors[0]);
      } catch (error) {
        console.error("Error loading product details:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select both Size and Color!");
      return;
    }
    addToCart(product, selectedColor, selectedSize);
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

  // 🚨 আপনার ব্যাকএন্ড রাউটার অনুযায়ী সাব-ইমেজের ফিল্ডের নাম galleryImages
  const galleryImages = [
    product.mainImage,
    ...(product.galleryImages || []), // এখানে galleryImages ব্যবহার করা হলো
  ].filter(Boolean);

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-900 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* IMAGE GALLERY */}
          <div className="lg:col-span-7 space-y-4">
            <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden border border-gray-100">
              <img
                // ✅ FIX: template literal e env variable properly interpolate kora holo
                src={`${import.meta.env.VITE_API_URL}${activeImage}`}
                alt={product.title}
                className="w-full font-extrabold h-full object-cover object-top transition-all duration-500"
              />
            </div>

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
                    // ✅ FIX: template literal e env variable properly interpolate kora holo
                    src={`${import.meta.env.VITE_API_URL}${imgUrl}`}
                    alt={`Thumbnail ${index + 1}`}
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
              <p className="text-lg font-bold text-gray-900 mt-3 tracking-wider">
                Rs. {product.price?.toLocaleString()}
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
                    const isOutOfStock = product.inStock === false; // পুরো প্রোডাক্টই আউট অফ স্টক কি না
                    const isSelected = selectedSize === size;

                    return (
                      <button
                        key={size}
                        onClick={() => !isOutOfStock && setSelectedSize(size)}
                        disabled={isOutOfStock}
                        className={`px-4 w-16 h-12 py-2 text-xs font-medium border transition-all tracking-wider uppercase relative
              ${
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
                        className={`px-4 py-4 h-13 text-xs font-medium border transition-all tracking-wider uppercase relative
              ${
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
                  Product Description
                </h3>
                <p className="whitespace-pre-line text-[12]">{product.fabric}</p>
              </div>
            )}

            <div>
              <button
                disabled={product.inStock === false}
                onClick={handleAddToCart}
                className={`w-full p-4 text-[12px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase py-2.5 sm:py-3 font-medium transition-all duration-300 ease-in-out cursor-pointer
       
      relative opacity-100 translate-y-0 mt-2 block
      
      md:absolute md:bottom-0 md:left-0 md:mt-0 md:translate-y-full md:group-hover:translate-y-0
      
      ${
        product.inStock === false
          ? "bg-gray-200 text-gray-400 cursor-not-allowed" // ডিজেবল স্টেট
          : "bg-black text-white hover:bg-neutral-900 md:bg-black/80" // একটিভ স্টেট
      }`}
              >
                {product.inStock === false ? "Sold Out" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
        <CartSidebar></CartSidebar>
      </div>
    </div>
  );
};

export default ProductDetails;