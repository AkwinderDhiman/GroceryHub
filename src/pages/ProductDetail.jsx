import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import products from "../data/products";
import { saveCartItem } from "../lib/cart";
import { startCheckout } from "../lib/checkout";

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [added, setAdded] = useState(false);

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

    const handleQuantityChange = (type) => {
        setQuantity((prev) => (type === "inc" ? prev + 1 : Math.max(1, prev - 1)));
    };

    const handleAddToCart = () => {
        saveCartItem(product, quantity);
        setAdded(true);
    };

    const handleBuyNow = async () => {
        setLoading(true);
        setError("");

        try {
            await startCheckout([{ ...product, quantity }]);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

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

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center border rounded-full px-3 py-1">
                                <button
                                    type="button"
                                    className="px-2"
                                    onClick={() => handleQuantityChange("dec")}
                                >
                                    -
                                </button>
                                <span className="px-2">{quantity}</span>
                                <button
                                    type="button"
                                    className="px-2"
                                    onClick={() => handleQuantityChange("inc")}
                                >
                                    +
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800"
                            >
                                {added ? "Added to cart" : "Add to cart"}
                            </button>
                        </div>

                        <div className="mb-6">
                            {error && (
                                <p className="text-red-500 text-sm mb-2">{error}</p>
                            )}
                            <button
                                type="button"
                                onClick={handleBuyNow}
                                disabled={loading}
                                className="w-full md:w-auto bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <CircularProgress size={20} color="inherit" />
                                        Redirecting to Stripe...
                                    </>
                                ) : (
                                    "Buy now with Stripe"
                                )}
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
