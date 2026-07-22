import React from 'react';
import Footer from '../components/foter/Footer';
import Navbar from '../components/navbar/Navbar';

const CustomerSupport = () => {
  return (
   <div>
    <Navbar></Navbar>
     <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-3">Customer Support</h1>
      <p className="mb-6 text-slate-600">
        At <strong>Fashion Classy</strong>, customer satisfaction is our top priority. We are here to assist you with any inquiries regarding our 100% original Pakistani collections, order tracking, or wholesale queries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 bg-amber-50/50 border border-amber-200 rounded-2xl">
          <h3 className="font-semibold text-lg text-amber-900 mb-2">📞 Direct Contact</h3>
          <p className="text-sm text-slate-700"><strong>Phone/WhatsApp:</strong> +880 1XXXXXXXXX</p>
          <p className="text-sm text-slate-700"><strong>Email:</strong> support@fashionclassybd.com</p>
        </div>
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h3 className="font-semibold text-lg text-slate-900 mb-2">⏰ Support Hours</h3>
          <p className="text-sm text-slate-700">Saturday – Thursday: 10:00 AM – 10:00 PM</p>
          <p className="text-sm text-slate-700">Friday: 2:30 PM – 10:00 PM</p>
        </div>
      </div>
      
    </div>
    <Footer></Footer>
   </div>
  );
};

export default CustomerSupport;