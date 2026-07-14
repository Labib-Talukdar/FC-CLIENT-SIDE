import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, subtotal } = useCart();
  const navigate = useNavigate();

  // শিপিং ফর্মের স্টেট
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    shippingArea: "inside", // ডিফল্ট Inside Dhaka
    fullAddress: "",
    orderNote: "",
    paymentMethod: "cod" // ডিফল্ট Cash on Delivery (cod)
  });

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // শিপিং চার্জ নির্ধারণ (Inside Dhaka = 100, Outside = 150)
  const shippingCharge = formData.shippingArea === "inside" ? 100 : 150;
  const grandTotal = subtotal + shippingCharge;

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.fullAddress) {
      alert("Please fill in all the required fields (Name, Phone, and Address)!");
      return;
    }

    // অর্ডার ডাটা অবজেক্ট (এটি আপনার ব্যাকএন্ড API-তে পাঠানোর জন্য রেডি)
    const orderDetails = {
      customer: formData,
      items: cartItems,
      subtotal,
      shippingCharge,
      grandTotal,
    };

    console.log("Order Placed Successfully:", orderDetails);
    alert("Order submitted! We will contact you shortly.");
    // এখানে আপনার ব্যাকএন্ডে অডিশনাল axios.post() কল করতে পারেন।
  };

  if (cartItems.length === 0) {
    return (
        
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-sm tracking-widest uppercase text-gray-400">Your cart is empty. Cannot checkout.</p>
        <button onClick={() => navigate("/")} className="mt-5 bg-black text-white px-6 py-3 text-xs uppercase tracking-wider">
          Go To Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-neutral-950 font-sans mt-10">
      <h1 className="text-2xl font-light tracking-widest uppercase text-center mb-12">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ================= বাম পাশ: শিপিং ও পেমেন্ট ফর্ম (৭ কলাম) ================= */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* ১. শিপিং ইনফরমেশন */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 pb-3 border-b border-gray-100 mb-6">
              Shipping Details
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[15px] uppercase tracking-wider text-gray-950 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[15px] uppercase tracking-wider text-gray-950 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 017XXXXXXXX"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[15px] uppercase tracking-wider text-gray-950 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="yourname@gmail.com"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none transition-colors"
                />
              </div>

              {/* ড্রপডাউন: Inside Dhaka vs Outside Dhaka (আপনার মূল রিকোয়ারমেন্ট) */}
              <div>
                <label className="block text-[15px] uppercase tracking-wider text-gray-950 mb-1.5">Shipping Area *</label>
                <select
                  name="shippingArea"
                  value={formData.shippingArea}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none transition-colors bg-white cursor-pointer"
                >
                  <option value="inside">Inside Dhaka (100 TK)</option>
                  <option value="outside">Outside Dhaka (150 TK)</option>
                </select>
              </div>

              <div>
                <label className="block text-[15px] uppercase tracking-wider text-gray-950 mb-1.5">Full Delivery Address *</label>
                <textarea
                  name="fullAddress"
                  required
                  rows="3"
                  value={formData.fullAddress}
                  onChange={handleInputChange}
                  placeholder="House no, Road no, Area name, City..."
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-[15px] uppercase tracking-wider text-gray-950 mb-1.5">Order Note (Optional)</label>
                <textarea
                  name="orderNote"
                  rows="2"
                  value={formData.orderNote}
                  onChange={handleInputChange}
                  placeholder="Notes about your delivery, e.g. special instructions."
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* ২. পেমেন্ট মেথড (কন্ডিশনাল কড/ডাইরেক্ট পেমেন্ট) */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 pb-3 border-b border-gray-100 mb-6">
              Payment Method
            </h2>

            <div className="space-y-3">
              {/* Cash on Delivery */}
              <label className={`flex items-start gap-3 p-4 border rounded-sm cursor-pointer transition-colors ${formData.paymentMethod === 'cod' ? 'border-neutral-900 bg-neutral-50/50' : 'border-gray-200'}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleInputChange}
                  className="mt-1 accent-black"
                />
                <div>
                  <span className="text-[16] font-semibold uppercase tracking-wider">Cash On Delivery (COD)</span>
                  <p className="text-[13px] text-amber-900 mt-1 leading-relaxed">
                    ডেলিভারি নেওয়ার সময় ক্যাশ পেমেন্ট করতে পারবেন। তবে **ক্যাশ অন ডেলিভারির জন্য ৫০০ টাকা অগ্রিম** প্রদান করতে হবে।
                  </p>
                </div>
              </label>

              {/* Direct Online Payment */}
              <label className={`flex items-start gap-3 p-4 border rounded-sm cursor-pointer transition-colors ${formData.paymentMethod === 'direct' ? 'border-neutral-900 bg-neutral-50/50' : 'border-gray-200'}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="direct"
                  checked={formData.paymentMethod === "direct"}
                  onChange={handleInputChange}
                  className="mt-1 accent-black"
                />
                <div>
                  <span className="text-[15] font-semibold uppercase tracking-wider">Direct Payment (Full Payment)</span>
                  <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                    বিকাশ, রকেট অথবা কার্ডের মাধ্যমে সরাসরি সম্পূর্ণ পেমেন্ট সম্পন্ন করুন।
                  </p>
                </div>
              </label>
            </div>

            {/* ৫০০ টাকা অ্যাডভান্স কন্ডিশনাল নোটিশ (ডাইনামিক অ্যালার্ট বক্স) */}
            {formData.paymentMethod === "cod" && (
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200/60 rounded-sm text-amber-900 text-[17px] font-bold leading-relaxed">
                ⚠️ **মনোযোগ দিন:** আপনি ক্যাশ অন ডেলিভারি (COD) সিলেক্ট করেছেন। অর্ডারটি কনফার্ম করার জন্য আপনাকে **৫০০ টাকা অগ্রিম পেমেন্ট** করতে হবে। বাকি টাকা ডেলিভারি নেওয়ার সময় পরিশোধ করবেন।
              </div>
            )}
          </div>

        </div>

        {/* ================= ডান পাশ: ইউর অর্ডার সামারি (৫ কলাম) ================= */}
        <div className="lg:col-span-5 bg-neutral-50/60 border border-gray-100 p-6 sm:p-8 rounded-sm lg:sticky lg:top-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 pb-3 border-b border-gray-200 mb-6">
            Your Order
          </h2>

          {/* প্রোডাক্টের ডাইনামিক লিস্ট */}
          <div className="divide-y divide-gray-100 max-h-[350px] overflow-y-auto pr-2 space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={`${item._id}-${item.size}-${item.color}`} className="flex gap-4 py-3 first:pt-0">
                <div className="w-14 aspect-[3/4] bg-white border border-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src={`http://localhost:5000${item.mainImage}`}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <h4 className="text-[10] font-normal text-neutral-800 line-clamp-1 tracking-wide">{item.title}</h4>
                    <p className="text-[13px] text-gray-400 uppercase tracking-wider mt-1">
                      Size: <span className="text-neutral-700 font-medium mr-2">{item.size}</span>
                      Color: <span className="text-neutral-700 font-medium">{item.color}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-xs font-semibold text-neutral-900 mt-1">
                    Tk. {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ক্যালকুলেশন পার্ট */}
          <div className="space-y-3.5 border-t border-gray-200 pt-4">
            <div className="flex justify-between font-bold text-[10] text-gray-700">
              <span>Subtotal</span>
              <span className="font-medium tracking-wider text-neutral-950">Rs. {subtotal.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between font-bold text-[10] text-gray-700">
              <span>Shipping & Handling</span>
              <span className="font-medium tracking-wider text-neutral-950">
                Tk. {shippingCharge} <span className="text-[10px] text-gray-950">({formData.shippingArea === "inside" ? "Inside" : "Outside"} Dhaka)</span>
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4 flex justify-between items-baseline">
              <span className="text-[12] font-bold uppercase tracking-widest text-neutral-750">Total</span>
              <span className="text-lg font-bold tracking-wider text-neutral-950">Tk. {grandTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* ফাইনাল অর্ডার প্লেস বাটন */}
          <button
            type="submit"
            className="w-full bg-neutral-950 text-white text-xs tracking-[0.2em] uppercase py-4 font-medium hover:bg-black transition-colors mt-8 shadow-sm"
          >
            Place Order
          </button>
        </div>

      </form>
    </div>
  );
};

export default Checkout;