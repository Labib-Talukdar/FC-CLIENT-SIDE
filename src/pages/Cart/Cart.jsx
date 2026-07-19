import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  const navigate = useNavigate();

  // ফ্রি শিপিং লিমিট (সাইডবারের মতোই ২০,০০০ টাকা)
  const freeShippingLimit = 20000;
  const progressPercent = Math.min((subtotal / freeShippingLimit) * 100, 100);

  return (
   <div>
    <Navbar></Navbar>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans text-neutral-950 mt-10">
      {/* পেজ হেডার */}
      <h1 className="text-2xl sm:text-3xl font-normal text-center tracking-widest uppercase mb-2">Shopping Cart</h1>
      <p className="text-center text-sm text-gray-500 mb-10">
        {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
      </p>

      {cartItems.length === 0 ? (
        /* খালি কার্ট স্টেট */
        <div className="text-center py-20 space-y-5">
          <p className="text-sm tracking-widest uppercase text-gray-400">Your cart is currently empty.</p>
          <button
            onClick={() => navigate("/")}
            className="inline-block bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 font-medium hover:bg-black transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        /* কার্ট কন্টেন্ট এরিয়া */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* বাম পাশের অংশ: কার্ট আইটেম লিস্ট (২ কলাম জুড়ে থাকবে) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* ফ্রি শিপিং প্রোগ্রেস বার (লিংকের মতো প্রিমিয়াম লুক) */}
            <div className="p-5 border border-gray-100 bg-neutral-50/50 rounded-sm">
              <p className="text-xs tracking-wide text-neutral-800 font-medium">
                {subtotal >= freeShippingLimit ? (
                  <span className="text-emerald-600 font-semibold">🎉 Congratulations! You qualify for free shipping.</span>
                ) : (
                  `Spend Rs. ${(freeShippingLimit - subtotal).toLocaleString()} more to get FREE SHIPPING!`
                )}
              </p>
              <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2.5 overflow-hidden">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                />
              </div>
            </div>

            {/* প্রোডাক্ট টেবিল হেডার (ডেস্কটপের জন্য) */}
            <div className="hidden sm:grid grid-cols-5 text-[11px] tracking-widest uppercase text-gray-400 pb-3 border-b border-gray-100 font-bold">
              <div className="col-span-3">Product Details</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {/* কার্ট আইটেম লুপ */}
            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div key={`${item._id}-${item.size}-${item.color}`} className="grid grid-cols-1 sm:grid-cols-5 gap-4 py-6 items-center">
                  
                  {/* প্রোডাক্ট ইনফো (ইমেজ + টাইটেল + ভেরিয়েন্ট) */}
                  <div className="col-span-1 sm:col-span-3 flex gap-4">
                    <div className="w-20 sm:w-24 aspect-[3/4] bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                      <img
                        src={`VITE_API_URL${item.mainImage}`}
                        alt={item.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <h3 className="text-xs sm:text-sm font-normal text-neutral-800 tracking-wide leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-2">
                          Size: <span className="text-neutral-800 font-medium mr-3">{item.size}</span>
                          Color: <span className="text-neutral-800 font-medium">{item.color}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item._id, item.size, item.color)}
                        className="text-gray-400 hover:text-red-500 text-[11px] uppercase tracking-widest text-left mt-2 transition-colors w-fit"
                      >
                        ✕ Remove
                      </button>
                    </div>
                  </div>

                  {/* কোয়ান্টিটি টগল (মোবাইলে বামে, ডেস্কটপে সেন্টারে) */}
                  <div className="flex justify-start sm:justify-center items-center">
                    <div className="flex items-center border border-gray-200 bg-white">
                      <button
                        onClick={() => updateQuantity(item._id, item.size, item.color, -1)}
                        className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 text-sm"
                      >
                        -
                      </button>
                      <span className="px-4 py-1.5 text-xs text-neutral-800 min-w-[32px] text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item._id, item.size, item.color, 1)}
                        className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* টোটাল প্রাইস (ডেস্কটপে ডানে যাবে) */}
                  <div className="text-left sm:text-right text-sm font-semibold tracking-wider text-neutral-900">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ডান পাশের অংশ: অর্ডার সামারি (১ কলাম জুড়ে থাকবে) */}
          <div className="border border-gray-100 bg-neutral-50/60 p-6 sm:p-8 rounded-sm space-y-6 lg:sticky lg:top-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800 pb-3 border-b border-gray-200">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold tracking-wider">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-emerald-600 font-medium">
                  {subtotal >= freeShippingLimit ? "FREE" : "Calculated at next step"}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between items-baseline">
                <span className="text-sm font-bold uppercase tracking-widest text-neutral-700">Total</span>
                <span className="text-xl font-bold tracking-wider text-neutral-950">Rs. {subtotal.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 leading-normal text-center">
              Taxes and shipping fees will be finalized during secure checkout.
            </p>

            <div className="space-y-3 pt-2">
              <button onClick={() => navigate('/checkout')} className="w-full bg-neutral-950 cursor-pointer text-white text-xs tracking-[0.2em] uppercase py-4 font-medium hover:bg-black transition-colors shadow-sm">
                Proceed to Checkout
              </button>
              <button
                onClick={() => navigate("/collection")}
                className="w-full bg-transparent text-neutral-800 border cursor-pointer border-neutral-300 text-xs tracking-[0.2em] uppercase py-4 font-medium hover:bg-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
   </div>
  );
};

export default Cart;