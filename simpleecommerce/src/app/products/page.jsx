'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
    const [products, setProducts] = useState([]);

    async function getData() {
        try {
            axios.get("https://fakestoreapi.com/products")
                .then((response) => {
                    setProducts(response.data);
                });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
            <h1 className="font-extrabold text-4xl sm:text-5xl mb-8 text-center">
                Explore Our Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="w-full sm:w-80 bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                            <div className="h-64">
                                {/* <Image
                                    src={product.image}
                                    width={500}
                                    height={500}
                                    alt={product.title}
                                /> */}
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 text-white">
                                <div className="mb-2">
                                    <p className="text-lg font-bold text-white">{product.title}</p>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    {product.description.substring(0, 60)}...
                                </p>
                                <p className="text-green-400 font-semibold text-lg mb-4">${product.price}</p>
                                <Link href={`/products/${product.id}`}>
                                    <button
                                        className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:scale-105"
                                    >
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}