//here we are creating the context for the cart
import { useState, useEffect, useContext, createContext } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        let existingCart = localStorage.getItem('cart')
        if (existingCart) {
            setCart(JSON.parse(existingCart))
        }
    }, [])
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)
export { useCart, CartProvider }