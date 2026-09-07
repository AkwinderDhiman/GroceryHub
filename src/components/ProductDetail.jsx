import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="max-w-6xl mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Product not found</h1>
                <Link to="/shop" className="text-blue-600 hover:underline">
                    Back to shop
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-10">

                <div>
                    <div className="flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span>⭐⭐⭐⭐⭐</span>
                            <span>1 REVIEW</span>
                            <span>SKU: {product.sku || "BE4RT"}</span>
                        </div>

                        <div className="text-2xl text-red-500 font-semibold mb-2">
                            ${product.price}
                        </div>

                        <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm mb-4">
                            IN STOCK
                        </span>

                        <p className="text-gray-600 mb-6">
                            {product.description || "Sample product description..."}
                        </p>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center border rounded-full px-3 py-1">
                                <button type="button" className="px-2">-</button>
                                <span className="px-2">1</span>
                                <button type="button" className="px-2">+</button>
                            </div>

                            <button type="button" className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800">
                                Add to cart
                            </button>
                        </div>

                        <div className="flex gap-6 text-sm text-gray-500 mb-6">
                            <button type="button">♡ Add to wishlist</button>
                            <button type="button">⇄ Compare</button>
                        </div>

                        <hr className="mb-4" />

                        <p className="text-sm text-gray-500 mb-4">
                            Category: <span className="font-medium">{product.category || "Grocery & Staples"}</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
