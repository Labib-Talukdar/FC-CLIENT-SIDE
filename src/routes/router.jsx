import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home"
import Collection from "../pages/collections/collection";
import CollectionLayout from "../layouts/CollectionLayout";
import ProductDetails from "../pages/porductDetails/ProductDetails";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <MainLayout></MainLayout>,
//         children: [
//             {index: true,element:<Home></Home>},
             
//             // {path: 'collections', element: <Collection></Collection>}
//         ]
//     },
//     {
//         path: '/collection',
//         element: <CollectionLayout></CollectionLayout>,
//         children: [
//              {path:'collections', element: <Collection></Collection>},
            
//         ]
//     },
//     {
//         path:'/product/:id', element: <ProductDetails></ProductDetails>
//     }
  
     
// ]);






const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {index: true, element: <Home></Home>},
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
    }
  
]);

export default router;



 