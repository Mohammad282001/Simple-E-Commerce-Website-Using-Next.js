'use client'

import useCustomCart from "../../../context/useCart";


export default function Cart() {
    const { items, removeItem, totalItems } = useCustomCart(); // Assuming these methods are available in your context

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
                <h2 className="text-3xl font-bold">Your Cart is Empty</h2>

                    <a className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                        Continue Shopping
                    </a>

            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col p-8 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            <div className="flex flex-col gap-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
                        <img src={item.image} alt={item.title} className="w-20 h-auto rounded-lg object-cover" />
                        <div className="flex-1 ml-4">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p className="text-lg font-semibold text-blue-400">${item.price}</p>
                        </div>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-right">
                <p className="text-2xl font-bold">
                    Total: <span className="text-blue-500">${totalItems.toFixed(2)}</span>
                </p>

                    <a className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
                        Proceed to Checkout
                    </a>

            </div>
        </div>
    );
}