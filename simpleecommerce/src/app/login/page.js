// app/Login.js
'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            // Handle successful login (e.g., redirect to homepage)
            router.push('/'); // Redirect to the homepage or another page
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred during login');
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <label className="block mb-2" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label className="block mb-2" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Login</button>
        </form>
    );
};

export default Login;
