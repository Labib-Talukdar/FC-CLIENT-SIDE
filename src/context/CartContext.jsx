import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem("cartItems");
        return localData ? JSON.parse(localData) : [];
    })
    // const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);

    // add to cart function
    const addToCart = (product, selectedSize,selectedColor) => {
        setCartItems((prevItems) => {
            // check is color,id,size same 
            const existingItemIndex = prevItems.findIndex(
                (item) => 
                    item._id === product._id && 
                item.size === selectedSize && 
                item.color === selectedColor
            );

            if(existingItemIndex > -1) {
                // if stay add will be quantity
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += 1;
                return newItems;
            }

            // if not found push like object
            return [
                ...prevItems,
                {
                    _id: product._id,
                    title: product.title,
                    price: product.price,
                    mainImage: product.mainImage,
                    size: selectedSize,
                    color:selectedColor,
                    quantity:1,
                },
            ];
        });
        setIsCartOpen(true);
    };

    // item remove to cart
    const removeFromCart = (id, size,color) => {
        setCartItems((prev) => 
            prev.filter((item) => !(item._id === id && item.size === size && item.color == color))
               
            
             
        );
    };

    // quantity update pluse/Minus
    const updateQuantity = (id,size,color,amount) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item._id === id && item.size === size && item.color === color) {
                    const newQty = item.quantity + amount;
                    return newQty > 0 ? {...item, quantity: newQty} : item;
                }
                return item;
            })
            .filter((item) => item.quantity > 0)
        );
    };

    // subtotal count 
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // all item count
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity,0)

    return (
        <CartContext.Provider
            value={{
                cartItems,isCartOpen,setIsCartOpen,addToCart,removeFromCart,updateQuantity,subtotal,totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext)