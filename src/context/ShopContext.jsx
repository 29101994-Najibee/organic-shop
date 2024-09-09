import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]); // Initialiseer met een lege array

    useEffect(() => {
        const data = localStorage.getItem("product-cart");
        if (data) {
            try {
                setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
            } catch (error) {
                console.error("Failed to parse cart items from localStorage", error);
                setCartItems([]);
            }
        }
    }, []);

    useEffect(() => {
        if (cartItems.length > 0 ) {
            localStorage.setItem("product-cart", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const handleIncreaseItem = (itemId) => {
        setCartItems((cartItems) => {
            const item = cartItems.find((item) => item.id === itemId);
            if (item) {
                return cartItems.map((item) =>
                    item.id === itemId ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...cartItems, { id: itemId, count: 1 }];
            }
        });
    };

    const handleDecreaseItem = (itemId) => {
        setCartItems((cartItems) =>
            cartItems.map((i) =>
                i.id === itemId ? { ...i, count: Math.max(i.count - 1, 0) } : i
            )
        );
    };

    const handleRemoveItems = (itemId) => {
        setCartItems((items) => items.filter((item) => item.id !== itemId));
    };

    const contextValue = {
        cartItems,
        handleIncreaseItem,
        handleDecreaseItem,
        handleRemoveItems,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
