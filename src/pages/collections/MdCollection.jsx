 
import React from 'react';
import { Link } from 'react-router-dom';

// আপনার ক্যাটাগরির ইমেজগুলো এখানে ইম্পোর্ট করুন
import categoryImg1 from '../../assets/IMG MD-1.jpeg';
import categoryImg2 from '../../assets/IMG MD-2.jpeg';
import categoryImg3 from '../../assets/IMG MD-3.jpeg';
import categoryImg4 from '../../assets/IMG MD-4.jpeg';
import TrendingNow from './TrendingNow';
 

const MdCollection = () => {
  const categories = [
    {
      id: 1,
      name: "READY TO WEAR",
      img: categoryImg1,
      // এটি সরাসরি মূল কালেকশন পেজে যাবে
      link: "/collection" 
    },
    {
      id: 2,
      name: "Organza Items",
      img: categoryImg2,
      // এটি ক্যাটাগরি কুয়েরি সহ কালেকশন পেজে যাবে
      link: `/collection?category=${encodeURIComponent("Organza Items")}`
    },
    {
      id: 3,
      name: "Kids Collection",
      img: categoryImg3,
      link: `/collection?category=${encodeURIComponent("Kids Collection")}`
    },
    {
      id: 4,
      name: "Chiffon 2pis",
      img: categoryImg4,
      link: `/collection?category=${encodeURIComponent("Chiffon 2pis")}`
    }
  ];

  return (
    
    <div className="max-full mx-auto px-4 py-6">
     
      <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-800 tracking-widest mb-10 uppercase">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        { categories?.map((category) => (
          <Link 
            // প্রতিটি আইটেমের নিজস্ব ডাইনামিক বা স্ট্যাটিক লিংক এখানে সেট হবে
            to={category.link} 
            key={category.id} 
            className="group flex flex-col items-center cursor-pointer overflow-hidden"
          >
            <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm mb-4">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="text-center mt-2">
              <h3 className="text-sm md:text-base font-medium tracking-wider text-gray-900 group-hover:text-black transition-colors uppercase">
                {category.name}
              </h3>
              <span className="inline-block text-xs text-gray-500 tracking-widest mt-1 border-b border-transparent group-hover:border-black transition-all uppercase">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
      {/* <TrendingNow></TrendingNow> */}
    </div>
  );
};

export default MdCollection;