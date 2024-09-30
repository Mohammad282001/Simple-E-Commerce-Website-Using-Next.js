'use client';
import React, { useEffect, useState } from 'react';
import { CartProvider as UseCartProvider } from 'react-use-cart';

const CartProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <UseCartProvider>
            {children}
        </UseCartProvider>
    );
};

export default CartProvider;
