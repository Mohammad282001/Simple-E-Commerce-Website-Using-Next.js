import Image from "next/image";
import Link from "next/link";
import UsersList from "./users/Users";
import axios from 'axios';


export default async function Home() {

  let users = [];
  try {
    const response = await axios.get(`api/MongoUsers`);
    users = response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-extrabold text-4xl sm:text-5xl text-center sm:text-left leading-tight">
          Welcome to the Future of Shopping
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 text-center sm:text-left">
          Discover the simplest e-commerce experience, built for you.
        </p>
        <div className="flex flex-row w-full gap-6 mt-4">
          <Link href="/products">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:scale-105">
              Discover All Products
            </button>
          </Link>
          <Link href="/about">
            <button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white text-lg rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-white hover:text-gray-900 focus:outline-none focus:scale-105">
              About Us
            </button>
          </Link>



          
        </div>
        <UsersList></UsersList>


          <div>
            <h1>User List</h1>
            <ul>
              {users.length > 0 ? (
                users.map(user => (
                  <li key={user._id}>{user.name} - {user.email}</li>
                ))
              ) : (
                <li>No users found.</li>
              )}
            </ul>
          </div>

      </main>
    </div>
  );
}