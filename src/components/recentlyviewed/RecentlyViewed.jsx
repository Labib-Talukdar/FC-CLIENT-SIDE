 

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentlyViewed = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    const currentTime = new Date().getTime();
    const EXPIRE_TIME = 24 * 60 * 60 * 1000; // ২৪ ঘণ্টা

    const validProducts = savedProducts.filter((item) => {
      if (!item.viewedAt) return true;
      return currentTime - item.viewedAt < EXPIRE_TIME;
    });

    localStorage.setItem("recentlyViewed", JSON.stringify(validProducts));
    setRecentProducts(validProducts);
  }, []);

  if (recentProducts.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 mt-16 font-sans">
      {/* 🌟 CENTERED & GRAY TITLE */}
       <div className="flex items-center justify-center my-10 px-4">
  <div className="flex-grow border-t border-gray-300"></div>
  <h3 className="px-6 text-xl md:text-2xl font-semibold text-gray-600 uppercase tracking-widest whitespace-nowrap">
    Recently Viewed Items
  </h3>
  <div className="flex-grow border-t border-gray-300"></div>
</div>

      {/* 🌟 EXACTLY 1 LINE WITH 4 CARDS ON LARGE SCREENS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentProducts.slice(0, 4).map((item) => (
          <Link
            key={item._id}
            to={`/product/${item._id}`}
            className="group block border border-gray-100 p-3 rounded hover:shadow-xl transition-all duration-300 bg-white"
          >
            {/* 🌟 LARGE CENTERED IMAGE CONTAINER */}
            <div className="w-full aspect-[2/3] bg-gray-50 overflow-hidden   mb-3">
              <img
                src={
                  item.mainImage?.startsWith("http")
                    ? item.mainImage
                    : `${import.meta.env.VITE_API_URL?.replace(/\/$/, "")}/${item.mainImage?.replace(/^\//, "")}`
                }
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x800?text=No+Image";
                }}
              />
            </div>

            {/* 🌟 TEXT DETAILS */}
            <div className="space-y-1 text-center px-1 pb-1">
              <h4 className="text-sm md:text-base font-semibold text-gray-700 truncate group-hover:text-black transition-colors">
                {item.title}
              </h4>
              <p className="text-sm md:text-base font-bold text-gray-900">
                Tk. {item.price?.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;