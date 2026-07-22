import React from 'react';
import Navbar from '../components/navbar/Navbar';
import CartSidebar from '../components/cartsidebar/cardSidebar';
 
 
import { Outlet } from 'react-router-dom'; 
import ImgBanner from '../pages/logo/ImgBanner';
import Footer from '../components/foter/Footer';
import MdCollection from '../pages/collections/MdCollection';
import TrendingNow from '../pages/collections/TrendingNow';
import TopAnnouncementBar from '../components/announcement/TopAnnouncementBar';
import FooterBannerCard from '../components/foter/FooterBannerCard';
 

const MainLayout = () => {

  

    return (
        <div>
             
            <Navbar />
            <TopAnnouncementBar></TopAnnouncementBar>
          
            <div className='pt-16 md:pt-10'>
                
                <Outlet />
                
                <ImgBanner></ImgBanner>
                <MdCollection></MdCollection>
                <TrendingNow></TrendingNow>
                <FooterBannerCard></FooterBannerCard>
                <Footer></Footer> 
            </div>
           
           
            <CartSidebar />
            {/* */}
        </div>
    );
};

export default MainLayout;