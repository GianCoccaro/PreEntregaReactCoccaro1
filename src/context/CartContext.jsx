import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState(initialCart);

    const addToCart = (item, quantity) => {
        const addedItem = { ...item, quantity };

        const newCart = [...cart];
        const isInCart = newCart.find((product) => product.id === addedItem.id);

        if (isInCart) {
            isInCart.quantity += quantity;
        } else {
            newCart.push(addedItem);
        }
        setCart(newCart);
    }

    const quantityInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    
    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, quantityInCart, totalPrice }} >
            { children }
        </CartContext.Provider>
    )
}