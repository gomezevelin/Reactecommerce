import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        console.log(product)
        const isProductInCart = cart.find((productInCart) => productInCart.id === product.id,);
        
        if (isProductInCart) {
            const newArray = cart.map((productInCart) => {
            if (productInCart.id === product.id) {
                return {
                    ...productInCart,
                    quantitySelected: productInCart.quantitySelected + product.quantitySelected,
                };
            } else {
                return productInCart;
            }
            });
            setCart(newArray);
            } else {
            setCart([...cart, product]);
            }
        };
    const clear = () => {
    setCart([]);
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
    };

    const data = {cart, addToCart, clear, removeFromCart }
    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
    );
};

export default CartProvider;
