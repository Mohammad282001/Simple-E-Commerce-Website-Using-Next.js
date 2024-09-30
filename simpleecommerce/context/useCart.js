//custom hook to use the cart lib
'use client';

import { useCart } from 'react-use-cart';

const useCustomCart = () => {
    const {
        addItem,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    return {
        addItem,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    };
};

export default useCustomCart;
