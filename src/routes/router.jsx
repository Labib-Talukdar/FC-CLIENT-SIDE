import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home"
import Collection from "../pages/collections/Collection";
import CollectionLayout from "../layouts/CollectionLayout";
import ProductDetails from "../pages/porductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/Checkout/CheckOut";
import Logo from "../pages/logo/Logo";
import ImgBanner from "../pages/logo/ImgBanner";
import Footer from "../components/foter/Footer";
import MdCollection from "../pages/collections/MdCollection";
import CustomerSupport from "../info/CustomerSupport";
import ExchangePolicy from "../info/ExchangePolicy";
import ShippingInfo from "../info/ShippingInfo";
import TermsConditions from "../info/TermsConditions";

 

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
             
            {path: 'banner', element: <ImgBanner></ImgBanner>},
            {path:'md-collection', element: <MdCollection></MdCollection>},
            
            {path:'logo', element: <Logo></Logo>},
            {path: '/footer', element: <Footer></Footer>}
        ]
    },
    {
        path: '/collection',
        element: <CollectionLayout></CollectionLayout>,
        children: [
             {path: 'collections', element: <Collection></Collection>},
              
            //  { path: 'product/:id', element: <ProductDetails></ProductDetails> }
        ]
    },
    
    {
        path: '/product/:id', 
        element: <ProductDetails></ProductDetails>
    },
    {
        path: '/checkout',
        element: <CheckOut></CheckOut>
    },
    {
        path: '/cart',
        element: <Cart></Cart>
    },
    {
        path:'/customer/support',
        element: <CustomerSupport></CustomerSupport>
    },
    { 
        path:'/exchange-policy',
        element: <ExchangePolicy></ExchangePolicy>
    },
    {
        path:'/shipping-info',
        element: <ShippingInfo></ShippingInfo>
    },
    {
        path: '/Terms-conditions',
        element: <TermsConditions></TermsConditions>
    }

 
    
  
]);

export default router;



 