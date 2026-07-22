import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/foter/Footer';

const ExchangePolicy = () => {
  return (
   <div>
    <Navbar></Navbar>
     <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-3">Exchange & Return Policy</h1>
      
      <div className="space-y-6">
        <p className="text-slate-700">
          Since we deal exclusively in <strong>100% Authentic & Original Pakistani Collections</strong>, we ensure strict quality checks before dispatching any parcel.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-amber-900 mb-2">🔄 Conditions for Exchange:</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Exchange claims must be reported within <strong>24 to 48 hours</strong> of receiving the parcel.</li>
            <li>Items must be unworn, unwashed, and in their original packaging with all tags attached.</li>
            <li>An unboxing video is highly recommended for faster resolution in case of damaged or wrong items delivered.</li>
            <li>Product color may slightly vary due to photographic lighting sources or display settings.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default ExchangePolicy;