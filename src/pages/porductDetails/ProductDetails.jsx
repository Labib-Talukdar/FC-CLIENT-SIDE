import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [activeImage, setActiveImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // 🎯 এখন ইউআরএল একদম ১০০% পারফেক্ট (ব্যাকএন্ডে /:id রুট যোগ করার পর)
        const response = await axios.get(`http://localhost:5000/api/products/single/${id}`);
        const productData = response.data.data || response.data;
        
        setProduct(productData);
        setActiveImage(productData.mainImage);
        
        if (productData.sizes?.length > 0) setSelectedSize(productData.sizes[0]);
        if (productData.colors?.length > 0) setSelectedColor(productData.colors[0]);
        
      } catch (error) {
        console.error("Error loading product details:", error);
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
    alert(`Successfully Added!\nProduct: ${product.title}\nSize: ${selectedSize}\nColor: ${selectedColor}`);
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

  // 🚨 আপনার ব্যাকএন্ড রাউটার অনুযায়ী সাব-ইমেজের ফিল্ডের নাম galleryImages
  const galleryImages = [
    product.mainImage,
    ...(product.galleryImages || []) // এখানে galleryImages ব্যবহার করা হলো
  ].filter(Boolean);

  return (
    
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-900 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* IMAGE GALLERY */}
        <div className="lg:col-span-7 space-y-4">
          <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden border border-gray-100">
            <img
              src={`http://localhost:5000${activeImage}`}
              alt={product.title}
              className="w-full h-full object-cover object-top transition-all duration-500"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {galleryImages.map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(imgUrl)}
                className={`aspect-[3/4] bg-gray-50 overflow-hidden border cursor-pointer transition-all ${
                  activeImage === imgUrl ? "border-black p-0.5" : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={`http://localhost:5000${imgUrl}`}
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

          {/* SIZES */}
          {product.sizes?.length > 0 && (
            <div className="border-b border-gray-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-3">Size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs font-medium border transition-all tracking-wider ${
                      selectedSize === size ? "bg-black text-white border-black font-bold" : "bg-white text-gray-600 border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* COLORS */}
          {product.colors?.length > 0 && (
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-xs font-medium border transition-all tracking-wider ${
                      selectedColor === color ? "bg-black text-white border-black font-bold" : "bg-white text-gray-600 border-gray-200 hover:border-black"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* DESCRIPTION */}
          {product.description && (
            <div className="text-gray-600 text-xs leading-relaxed tracking-wide space-y-2 border-b border-gray-100 pb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Product Description</h3>
              <p className="whitespace-pre-line">{product.description}</p>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={handleAddToCart}
              className="w-full bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase py-4 font-medium hover:bg-black transition-colors duration-300 shadow-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;