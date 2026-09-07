import { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { clearCart } from "../lib/cart";

export default function CheckoutSuccess() {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-[60vh] text-center">
      <div className="bg-white border rounded-lg p-8 max-w-md w-full">
        <div className="text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Your payment was processed securely through Stripe.
        </p>
        <Button
          component={Link}
          to="/shop"
          variant="contained"
          color="primary"
          fullWidth
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
