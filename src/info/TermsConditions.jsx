import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/foter/Footer';

const TermsConditions = () => {
  return (
   <div>
    <Navbar></Navbar>
     <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-3">Terms & Conditions</h1>
      
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <p>Welcome to <strong>Fashion Classy</strong> (fashionclassybd.com). By using our platform, you agree to comply with the following terms:</p>
        
        <h3 className="text-base font-semibold text-slate-900 mt-4">1. Product Authenticity</h3>
        <p>We guarantee that all products listed under Pakistani Collections are 100% original brand products. We do not deal with local copies, or local inspired version.</p>
        
        <h3 className="text-base font-semibold text-slate-900 mt-4">2. Pricing & Availability</h3>
        <p>All prices are subject to change without prior notice. Stock availability is updated regularly; however, in rare cases of stockouts, we reserve the right to cancel or modify orders with customer notification.</p>

        <h3 className="text-base font-semibold text-slate-900 mt-4">3. Wholesale & Retail Orders</h3>
        <p> Wholesale orders require a **minimum order quantity (MOQ) of 20 pieces**. Pricing, shipping, and other terms will be agreed upon directly with our team.</p>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default TermsConditions;