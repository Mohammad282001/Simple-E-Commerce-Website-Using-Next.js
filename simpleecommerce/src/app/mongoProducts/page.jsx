// app/users/page.js
import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage() {
    try {
        // Fetch products from the API route
        const response = await fetch("http://localhost:3001/api/MongoProducts");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();

        return (
            <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
                <h1 className="font-extrabold text-4xl sm:text-5xl mb-8 text-center">
                    Explore Our Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div
                                key={product._id}
                                className="w-full sm:w-80 bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                            >
                                <div className="h-64">
                                    <Image
                                        className="h-full w-full object-cover"
                                        src={`/images/${product.image || "default-product.jpg"}`}
                                        width={500}
                                        height={500}
                                        alt={product.name}
                                    />
                                </div>
                                <div className="p-4 text-white">
                                    <div className="mb-2">
                                        <p className="text-lg font-bold text-white">{product.name}</p>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {product.category} - {product.brand}
                                    </p>
                                    <p className="text-green-400 font-semibold text-lg mb-4">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <p className={`mb-2 font-medium ${product.inStock ? "text-green-500" : "text-red-500"}`}>
                                        {product.inStock ? "In Stock" : "Out of Stock"}
                                    </p>
                                    <Link href={`/mongoProducts/${product._id}`}>
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
    } catch (error) {
        console.error("Error fetching products:", error); // Log the error
        return (
            <div className="min-h-screen p-8 font-sans text-white">
                <h1 className="text-2xl font-bold text-center mb-4">Error fetching products</h1>
                <p className="text-center text-red-500">{error.message}</p>
            </div>
        );
    }
}
