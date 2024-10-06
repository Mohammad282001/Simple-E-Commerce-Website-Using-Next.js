// app/api/addUser/route.js
import pool from "../../../../db";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const first_name = formData.get("first_name");
        const last_name = formData.get("last_name");
        const email = formData.get("email");
        const password_hash = "12345678";
        const role = "user";

        const result = await pool.query(
            'INSERT INTO "Users" (first_name, last_name, email,password_hash,role) VALUES ($1, $2, $3,$4,$5) RETURNING *',
            [first_name, last_name, email, password_hash, role]
        );

        return new Response(JSON.stringify(result.rows[0]), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error details:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}