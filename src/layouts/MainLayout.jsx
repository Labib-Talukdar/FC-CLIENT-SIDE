import React from 'react';
import Navbar from '../components/navbar/Navbar';
import CartSidebar from '../components/cartsidebar/cardSidebar';
 
 
import { Outlet } from 'react-router-dom'; 
import ImgBanner from '../pages/logo/ImgBanner';
import Footer from '../components/foter/Footer';
 

const MainLayout = () => {

  

    return (
        <div>
             
            <Navbar />
    
          
            <div className='pt-10 md:pt-10'>
                
                <Outlet />
                <ImgBanner></ImgBanner>
                <Footer></Footer> 
            </div>
           
           
            <CartSidebar />
            {/* */}
        </div>
    );
};

export default MainLayout;