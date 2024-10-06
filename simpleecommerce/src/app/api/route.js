import pool from '../../../db';

export async function GET(req) {
    try {
        const result = await pool.query('SELECT * FROM "Users"     ');
        console.log(result.rows);
        return new Response(JSON.stringify(result.rows), {
            status: 200,
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

export async function POST(req) {
    try {
        const { first_name, last_name, email } = await req.json();
        const result = await pool.query(
            `INSERT INTO "Users" (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *`,
            [first_name, last_name, email]
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