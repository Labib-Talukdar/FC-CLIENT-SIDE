// import React from 'react';

// const Logo = () => {
//     return (
//         <div>
//             <div 
//   className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer group select-none" 
 
// >
//   {/* লোগো ইমেজ এবং স্মুথ হোভার অ্যানিমেশন */}
//   <div className="transition-transform duration-300 group-hover:scale-105">
//     <img 
//       src='/src/assets/Fashion Classy.png' 
   
//       className=' w-52 h-48  bg-white bg-blend-normal mx-auto p-4' 
//       alt="Fashion Classy Logo"
//     />
//   </div>

  
// </div>
//         </div>
//     );
// };

// export default Logo;























import React from 'react';

const Logo = () => {
  return (
    <div>
      {/* এখানে absolute পজিশনটি রাখা হয়েছে, তবে রেসপন্সিভ সাইজ কন্ট্রোল করা হয়েছে */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer group select-none">
        
        {/* লোগো ইমেজ এবং স্মুথ হোভার অ্যানিমেশন */}
        <div className="transition-transform duration-300 group-hover:scale-105">
          <img 
            src='/src/assets/Fashion Classy.png' 
            // মোবাইলে (default): উইডথ w-28, হাইট h-24
            // বড় স্ক্রিনে (md:): উইডথ w-52, হাইট h-48
            className='w-28 h-24 md:w-52 md:h-48 bg-white bg-blend-normal mx-auto p-2 md:p-4 object-contain' 
            alt="Fashion Classy"
          />
        </div>

      </div>
    </div>
  );
};

export default Logo;