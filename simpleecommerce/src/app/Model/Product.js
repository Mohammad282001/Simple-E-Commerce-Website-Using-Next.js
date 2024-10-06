import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Product name, required
    price: { type: Number, required: true }, // Product price, required
    description: { type: String, required: true }, // Product description, required
    image: { type: String }, // Optional field for image URL
    category: { type: String }, // Optional field for product category
    brand: { type: String }, // Optional field for brand name
    inStock: { type: Boolean, default: true }, // Field to indicate stock status, defaults to true
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const Products = mongoose.models.products || mongoose.model('products', ProductSchema); // Check if model exists before creating it

export default Products;