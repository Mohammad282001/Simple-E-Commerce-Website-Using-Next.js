import axios from "axios";
import Button from "./button";

export default async function ProductPage({ params }) {
    const { id } = params;

    // Fetch the product data from the API
    const { data: product } = await axios.get(`https://fakestoreapi.com/products/${id}`, {
        next: { revalidate: 60, tags: ['collection'] },
    });

    // Handle loading state
    if (!product) {
        return <p className="text-white text-center">Loading...</p>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-8 sm:p-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
            <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col sm:flex-row gap-10">
                <div className="sm:w-1/2">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4 sm:w-1/2">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-lg text-gray-300">{product.description}</p>
                    <p className="text-xl font-semibold text-blue-400">Category: {product.category}</p>
                    <p className="text-3xl font-bold text-blue-500">${product.price}</p>

                    {/* Pass the product object to the Button component */}
                    <Button product={product} />
                </div>
            </div>
        </div>
    );
}