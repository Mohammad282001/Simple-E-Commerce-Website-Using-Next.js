'use client';
import { useState } from 'react';
import useCustomCart from "../../../../context/useCart";

export default function Button({ product }) {
    const { addItem } = useCustomCart();
    const [isAdded, setIsAdded] = useState(false); // State to track if the item is added

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
        });

        // Set the added state to true to show the success message
        setIsAdded(true);

        // Remove the success message after 3 seconds
        setTimeout(() => setIsAdded(false), 3000);
    };

    return (
        <div className="relative">
            <button
                onClick={handleAddToCart}
                className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:scale-105"
            >
                Add to Cart
            </button>

            {/* Show success message when item is added */}
            {isAdded && (
                <p className="absolute top-12 left-0 w-full bg-green-500 text-white py-2 text-center rounded-lg">
                    Product added to cart successfully!
                </p>
            )}
        </div>
    );
}