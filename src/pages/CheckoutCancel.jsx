import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CheckoutCancel() {
  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-[60vh] text-center">
      <div className="bg-white border rounded-lg p-8 max-w-md w-full">
        <div className="text-5xl mb-4">✕</div>
        <h1 className="text-2xl font-bold mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment was not completed. Your cart items are still saved.
        </p>
        <div className="flex flex-col gap-3">
          <Button
            component={Link}
            to="/cart"
            variant="contained"
            color="primary"
            fullWidth
          >
            Return to Cart
          </Button>
          <Button component={Link} to="/shop" variant="outlined" fullWidth>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
