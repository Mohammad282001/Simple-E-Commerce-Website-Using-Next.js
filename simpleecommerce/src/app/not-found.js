import Link from 'next/link';
import { notFound } from "next/navigation"

const Custom404 = () => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
            <h1 className="text-5xl font-extrabold text-blue-500">404 - Page Not Found</h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link href="/">
                <button className="mt-8 px-6 py-3 bg-blue-600 text-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:scale-105">
                    Go back to Home
                </button>
            </Link>
        </div>
    );
};

export default Custom404;
