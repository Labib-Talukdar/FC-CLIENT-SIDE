import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/foter/Footer';

const ShippingInfo = () => {
  return (
   <div>
    <Navbar></Navbar>
     <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-3">Shipping Information</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-amber-900 mb-2">🚚 Delivery Charge & Timeline</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Inside Dhaka:</strong> Delivery within 24–48 houTk. Charge: ৳80.</li>
            <li><strong>Outside Dhaka:</strong> Delivery within 2–4 business days. Charge: ৳150.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-amber-900 mb-2">📦 Cash on Delivery (COD)</h2>
          <p className="text-slate-700">
            We offer Cash on Delivery across Bangladesh. For orders outside Dhaka, a minimal advance delivery charge may be requested to confirm the order booking.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default ShippingInfo;