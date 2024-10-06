// components/AddUserForm.js
"use client";

import { useState } from "react";

export default function AddUserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("email", email);
        formData.append("password_hash", "1234556");

        const res = await fetch("/api/addUser", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            // Optionally handle success, like clearing the form
            setFirstName("");
            setLastName("");
            setEmail("");
            setError(null);
            alert("User added successfully!");
        } else {
            const { error: errMsg } = await res.json();
            setError(errMsg);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="border text-black rounded-lg p-2 mb-4 md:mb-0 flex-1"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="border  text-black rounded-lg p-2 mb-4 md:mb-0 flex-1"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border text-black rounded-lg p-2 mb-4 md:mb-0 flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
                >
                    Add User
                </button>
            </div>
        </form>
    );
}