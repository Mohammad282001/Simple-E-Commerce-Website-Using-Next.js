// app/api/login/route.js
import dbConnect from '../../../../mongodb';
import User from '@/app/Model/User';
import bcrypt from 'bcrypt';

export async function POST(request) {
    await dbConnect();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });

    if (!user) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
}
