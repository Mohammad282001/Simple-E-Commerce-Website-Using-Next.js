import dbConnect from "../../../../mongodb"; // Ensure this path is correct
import Products from "@/app/Model/Product"; // Ensure this path is correct
import { NextRequest } from "next/server"; // Not used in your function
import { NextResponse } from "next/server";

export async function GET(request) {
    await dbConnect();

    try {
        const products = await Products.find({});
        return new NextResponse(JSON.stringify(products), { // Fixed here
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return new NextResponse(JSON.stringify({ error: "Unable to fetch products" }), { // Fixed here
            status: 500,
        });
    }
}