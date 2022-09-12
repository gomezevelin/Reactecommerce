import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [contador, setContador] = useState(0);
    const [totalCarrito, setTotalCarrito] = useState(0);
    
    const addToCart = (product) => {
        const isInCart = cart.find((productInCart) => productInCart.id === product.id);
        
        if (isInCart) {
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
            setContador (contador + product.quantitySelected);
            console.log("contador en cart context", contador, product.quantitySelected)
            setTotalCarrito(totalCarrito + parseInt(product.quantitySelected)*parseFloat(product.price)
            );
        };
    const clear = () => {
    setCart([]);
    setContador(0);
    setTotalCarrito(0);
    };
    const removeFromCart = (id) => {
        const prod = cart.find((product) => product.id === id);
        setTotalCarrito(
          totalCarrito - parseInt(prod.quantitySelected) * parseFloat(prod.price)
        );
        setContador(contador - prod.cantidad);
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
    };
    
    return (
    <CartContext.Provider value={{contador, totalCarrito, cart, addToCart, clear, removeFromCart }}>
        {children}
        {console.log ("cartcontext return",contador)}
    </CartContext.Provider>
    );
};

export default CartProvider;
