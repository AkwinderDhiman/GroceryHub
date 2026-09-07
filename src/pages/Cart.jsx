import React, { useState, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getCartItems } from "../lib/cart";
import { startCheckout } from "../lib/checkout";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const persistCart = (items) => {
    items.forEach((item) => {
      localStorage.setItem(
        `cart_${item.id}`,
        JSON.stringify(item)
      );
    });
    setCartItems(items);
  };

  const updateQuantity = (id, type) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const qty =
          type === "inc" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: qty < 1 ? 1 : qty };
      }
      return item;
    });
    persistCart(updated);
  };

  const removeItem = (id) => {
    localStorage.removeItem(`cart_${id}`);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      await startCheckout(cartItems);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-6">My Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center py-6 text-red-500 font-bold">
          Your cart is currently empty.
        </div>
        <Button variant="contained" color="primary" href="/" className="capitalize">
          Continue Shopping
        </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-1 gap-6">

          {/* LEFT SIDE */}
          <div className="bg-white border rounded-lg">

            {/* Shipping Bar */}
            <div className="p-4 border-b">
              <p className="text-sm mb-2">
                Your order qualifies for free shipping!
              </p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-green-500 h-2 rounded w-full"></div>
              </div>
            </div>

            {/* Header */}
            <div className="grid grid-cols-5 p-4 text-sm font-bold text-gray-600 border-b">
              <span className="col-span-2">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {/* Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 items-center p-4 border-b"
              >
                {/* Product */}
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                    onClick={() => navigate(`/product/${item.id}`)}
                  />
                  <p className="text-sm">{item.name}</p>
                </div>

                {/* Price */}
                <p>${item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, "dec")}
                    className="w-8 h-8 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="w-8 h-8 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal + remove */}
                <div className="flex items-center justify-between">
                  <p>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 ml-3"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            {/* Coupon */}
            <div className="p-4 flex gap-3">
              <input
                placeholder="Coupon code"
                className="border px-3 py-2 rounded w-full"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Apply coupon
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white border rounded-lg p-6 h-fit">
            <h2 className="font-bold mb-4">CART TOTALS</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="border-t my-3"></div>

            {/* Shipping */}
            <div className="mb-3">
              <p className="font-medium mb-1">Shipment</p>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" defaultChecked />
                Free shipping
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" />
                Local pickup
              </label>
            </div>

            <div className="border-t my-3"></div>

            {/* Total */}
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-3">{error}</p>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <CircularProgress size={20} color="inherit" />
                  Redirecting to Stripe...
                </>
              ) : (
                "Proceed to checkout"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
