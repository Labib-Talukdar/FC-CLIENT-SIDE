import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../pages/utils/getImageUrl";

const CartSidebar = () => {
  const navigate = useNavigate();
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
  } = useCart();

  // ফ্রি শিপিং প্রোগ্রেস বারের লিমিট (যেমন: ২০,০০০ টাকার ওপরে ফ্রি শিপিং)
  // const freeShippingLimit = 20000;
  // const progressPercent = Math.min((subtotal / freeShippingLimit) * 100, 100);

  return (
    <>
      {/* ব্যাকড্রপ ওভারলে - সাইডবার ওপেন হলে পেজের বাকি অংশ ডার্ক হয়ে যাবে */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-500 z-50 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* স্লাইডিং কার্ট সাইডবার প্যানেল */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white shadow-2xl z-50 transition-transform duration-500 ease-out flex flex-col font-sans text-neutral-900 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* কার্ট হেডার */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium tracking-wide">Shopping Cart</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-black text-xl transition-colors p-1"
          >
            ✕
          </button>
        </div>

        {/* ফ্রি শিপিং প্রোগ্রেস বার (স্ক্রিনশটের মতো) */}
        {/* <div className="px-5 py-4 border-b border-gray-50 bg-neutral-50/50">
          <p className="text-[11px] tracking-wide text-neutral-700 font-medium">
            {subtotal >= freeShippingLimit ? (
              <span className="text-emerald-600 font-semibold">
                🎉 You qualify for free shipping!
              </span>
            ) : (
              `Spend Tk. ${(freeShippingLimit - subtotal).toLocaleString()} more for FREE SHIPPING`
            )}
          </p>
          <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            />
          </div>
        </div> */}

        {/* কার্ট আইটেম লিস্ট এরিয়া */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 division-y division-gray-100">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-xs tracking-widest uppercase">
              Your cart is empty
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item._id}-${item.size}-${item.color}`}
                className="flex gap-4 pb-4 border-b border-neutral-100 last:border-0"
              >
                {/* প্রোডাক্ট ইমেজ */}
                <div className="w-20 aspect-[3/4] bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src={getImageUrl(item.mainImage)}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* প্রোডাক্ট ডিটেইলস */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex justify-between gap-2">
                      <h3 className="text-xs font-normal text-neutral-800 line-clamp-2 leading-tight tracking-wide">
                        {item.title}
                      </h3>
                      <button
                        onClick={() =>
                          removeFromCart(item._id, item.size, item.color)
                        }
                        className="text-gray-400 hover:text-red-500 text-xs p-1"
                      >
                        ✕
                      </button>
                    </div>
                    {/* ভেরিয়েন্ট অপশনস */}
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1.5">
                      Size:{" "}
                      <span className="text-neutral-700 font-medium mr-3">
                        {item.size}
                      </span>
                      Color:{" "}
                      <span className="text-neutral-700 font-medium">
                        {item.color}
                      </span>
                    </p>
                  </div>

                  {/* কোয়ান্টিটি এবং প্রাইস */}
                  <div className="flex justify-between items-center mt-2">
                    {/* কোয়ান্টিটি টগল বাটন */}
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.size, item.color, -1)
                        }
                        className="px-2.5 py-1 text-gray-500 hover:bg-gray-50 text-xs"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-xs text-neutral-800 min-w-[24px] text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.size, item.color, 1)
                        }
                        className="px-2.5 py-1 text-gray-500 hover:bg-gray-50 text-xs"
                      >
                        +
                      </button>
                    </div>

                    {/* সিঙ্গেল/মাল্টিপল টোটাল প্রাইস */}
                    <span className="text-xs font-semibold tracking-wider text-neutral-900">
                      Tk. {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* কার্ট ফুটার (টোটাল ও চেকআউট) */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-neutral-50/50 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Subtotal
              </span>
              <span className="text-base font-bold tracking-wider">
                Tk. {subtotal.toLocaleString()}
              </span>
            </div>

            <p className="text-[10px] text-gray-400 text-center leading-normal">
              Tax included and shipping calculated at checkout
            </p>

            <div className="space-y-2.5 pt-2">
              <button onClick={() => navigate('/checkout')} className="w-full bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase py-4 font-medium hover:bg-black transition-colors shadow-sm">
                Checkout
              </button>

              <button
                onClick={() => {
                  setIsCartOpen(false);  
                  navigate("/cart"); 
                }}
                className="w-full bg-white text-neutral-900 border border-neutral-200 text-xs tracking-[0.2em] uppercase py-4 font-medium hover:bg-neutral-50 transition-colors"
              >
                View Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
