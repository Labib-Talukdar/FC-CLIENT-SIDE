// src/utils/getImageUrl.js

export const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return "https://via.placeholder.com/400x600?text=No+Image";
  }

  // ১. ইমেজ যদি Cloudinary বা External URL (http/https) হয়
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // ২. Local Server URL থাকলে ডাবল স্ল্যাশ ফিক্স করবে
  const baseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
  const cleanPath = imagePath.replace(/^\//, "");

  return `${baseUrl}/${cleanPath}`;
};