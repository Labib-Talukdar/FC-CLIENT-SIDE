 
// import React, { useState, useEffect, useRef } from 'react';

//   import image1 from '../../assets/Fashion Classy-1.png'
//  import image2 from '../../assets/Fashion Classy-2.png'
//  import image3 from '../../assets/Fashion Classy-3.png'

// const AutoplaySlider = () => {
//   const slides = [
//     { id: 1, src: image1, alt: "Nature image 1" },
//     { id: 2, src: image2, alt: "City image 2" },
//     { id: 3, src: image3, alt: "Tech image 3" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const timeoutRef = useRef(null);
//   const delay = 3000; 

//   const resetTimeout = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setCurrentIndex((prevIndex) =>
//           prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [currentIndex, slides.length]);

//   return (
//     <div className="w-full h-screen overflow-hidden relative group">
      
//       <div
//         className="flex transition-transform duration-1000 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide) => (
//           <div key={slide.id} className="w-full h-full flex-shrink-0">
//             {/* ১. এখানে className এ w-full h-full object-stretch ব্যবহার করা হয়েছে */}
//             <img
//               src={slide.src}
//               alt={slide.alt}
//               className="w-full h-full object-stretch" 
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
//         className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//       >
//         ❮
//       </button>
//       <button
//         onClick={() => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
//         className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//       >
//         ❯
//       </button>

//       <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`h-3 w-3 rounded-full transition-all duration-300 shadow-lg ${
//               currentIndex === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AutoplaySlider;


















// import React, { useState, useEffect, useRef } from 'react';

// // আপনার assets ফোল্ডার থেকে ছবিগুলো ইম্পোর্ট করুন
//    import image1 from '../../assets/Fashion Classy-1.png'
//  import image2 from '../../assets/Fashion Classy-2.png'
//  import image3 from '../../assets/Fashion Classy-3.png'

// const AutoplaySlider = () => {
//   const slides = [
//     { id: 1, src: image1, alt: "Nature image 1" },
//     { id: 2, src: image2, alt: "City image 2" },
//     { id: 3, src: image3, alt: "Tech image 3" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const timeoutRef = useRef(null);
//   const delay = 3500; // স্লাইড ৩.৫ সেকেন্ড থাকবে (এর মধ্যে ১ সেকেন্ড চেঞ্জ হতে সময় নিবে)

//   const resetTimeout = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setCurrentIndex((prevIndex) =>
//           prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [currentIndex, slides.length]);

//   return (
//     <div className="w-full h-screen overflow-hidden relative group bg-black">
      
//       {/* স্লাইড কন্টেইনার */}
//       <div className="relative w-full h-full">
//         {slides.map((slide, idx) => (
//           <div
//             key={slide.id}
//             // ১. absolute দিয়ে সব ছবি একটার ওপর আরেকটা রাখা হয়েছে।
//             // ২. transition-opacity duration-1000 ease-in-out দিয়ে ১ সেকেন্ডের স্মুথ Fade অ্যানিমেশন দেওয়া হয়েছে।
//             // ৩. কারেন্ট ইনডেক্স মিললে opacity-100 (দেখা যাবে), না মিললে opacity-0 (লুকিয়ে থাকবে)।
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <img
//               src={slide.src}
//               alt={slide.alt}
//               className="w-full h-full object-cover" // আপনি চাইলে আপনার পছন্দমতো object-stretch ও রাখতে পারেন
//             />
//           </div>
//         ))}
//       </div>

//       {/* ম্যানুয়াল নেভিগেশন (Previous & Next Arrow) - z-20 দেওয়া হয়েছে যেন ছবির ওপরে থাকে */}
//       <button
//         onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
//         className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
//       >
//         ❮
//       </button>
//       <button
//         onClick={() => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
//         className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
//       >
//         ❯
//       </button>

//       {/* নিচে গোল ডট ইন্ডিকেটর - z-20 দেওয়া হয়েছে */}
//       <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`h-3 w-3 rounded-full transition-all duration-300 shadow-lg ${
//               currentIndex === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AutoplaySlider;






import React, { useState, useEffect, useRef } from 'react';

// আপনার assets ফোল্ডার থেকে ছবিগুলো ইম্পোর্ট করুন
 
   import image1 from '../../assets/Fashion Classy-1.png'
 import image2 from '../../assets/Fashion Classy-2.png'
 import image3 from '../../assets/Fashion Classy-3.png'

const AutoplaySlider = () => {
  const slides = [
    { id: 1, src: image1, alt: "Nature image 1" },
    { id: 2, src: image2, alt: "City image 2" },
    { id: 3, src: image3, alt: "Tech image 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3500; 

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, slides.length]);

  return (
    // রেসপনসিভ হাইট: মোবাইলে স্ক্রিনের ৬০% (h-[60vh]), ট্যাবলেটে ৮০% (sm:h-[80vh]), ডেস্কটপে ফুল স্ক্রিন (md:h-screen)
    <div className="w-full h-[40vh] sm:h-[30vh]  md:h-screen overflow-hidden relative group bg-black">
      
      {/* স্লাইড কন্টেইনার */}
      <div className="relative w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              // object-cover দেওয়া হয়েছে যাতে ছবি স্ক্রিনের সাইজ অনুযায়ী নিজে থেকেই সুন্দরভাবে ফিট হয়ে যায়, চ্যাপ্টা না হয়।
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>

      {/* ম্যানুয়াল নেভিগেশন (Previous & Next Arrow) */}
      {/* মোবাইলে বাটনগুলো কিছুটা ছোট (p-2) এবং ডেস্কটপে বড় (md:p-4) করা হয়েছে */}
      <button
        onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-sm md:text-base"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-sm md:text-base"
      >
        ❯
      </button>

      {/* নিচে গোল ডট ইন্ডিকেটর */}
      {/* মোবাইলে ডটগুলো একটু নিচে থাকবে এবং সাইজ রেসপনসিভ করা হয়েছে */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center space-x-2 md:space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 shadow-lg ${
              currentIndex === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoplaySlider;