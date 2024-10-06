// app/users/page.js
import axios from "axios";
import Link from "next/link";
import AddUserForm from "../components/AddUserForm";

async function fetchUsers() {

    const revalidate = 1;
    const getUsers = await axios.get("http://localhost:3001/api", {
    });
    return getUsers.data;
}

export default async function UsersList() {
    const users = await fetchUsers();

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Users List</h1>
                <AddUserForm />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <Link key={user.id} href={`/user/${user.id}`}>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <div className="text-xl font-semibold text-gray-800 mb-2">
                                    {user.first_name} {user.last_name}
                                </div>
                                <div className="text-gray-600">User ID: {user.id}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
