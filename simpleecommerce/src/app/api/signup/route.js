// app/api/signup/route.js
import dbConnect from '../../../../mongodb';
import User from '@/app/Model/User';
import bcrypt from 'bcrypt';

export async function POST(request) {
    await dbConnect();
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    try {
        await user.save();
        return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error creating user' }), { status: 400 });
    }
}
