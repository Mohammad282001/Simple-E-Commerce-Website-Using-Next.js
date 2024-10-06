
'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', { name, email, password });
            router.push('/login');
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred during signup');
        }
    };

    return (
        <form onSubmit={handleSignup} className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <label className="block mb-2" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
            </div>
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Sign Up</button>
        </form>
    );
};

export default Signup;
