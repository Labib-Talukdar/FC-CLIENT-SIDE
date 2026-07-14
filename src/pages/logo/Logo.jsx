import React from 'react';

const Logo = () => {
    return (
        <div>
            <div 
  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer group select-none" 
 
>
  {/* লোগো ইমেজ এবং স্মুথ হোভার অ্যানিমেশন */}
  <div className="transition-transform duration-300 group-hover:scale-105">
    <img 
      src='/src/assets/Fashion Classy.png' 
   
      className='h-48 w-52  bg-white bg-blend-normal mx-auto p-4' 
      alt="Fashion Classy Logo"
    />
  </div>

  
</div>
        </div>
    );
};

export default Logo;