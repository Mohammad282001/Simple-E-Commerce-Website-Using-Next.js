import dbConnect from '../../../../mongodb';
import User from '@/app/Model/User';

export async function GET(request) {
    await dbConnect();
    const users = await User.find({});
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
