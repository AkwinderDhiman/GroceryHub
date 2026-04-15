import { Card, CardContent, Button, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  // Check if product is in wishlist on mount
  useEffect(() => {
    const wishlistKey = `wishlist_${product.id}`;
    const isSaved = localStorage.getItem(wishlistKey);
    setIsWishlisted(!!isSaved);
  }, [product.id]);

  const handleWishlistToggle = () => {
    const wishlistKey = `wishlist_${product.id}`;
    
    if (isWishlisted) {
      // Remove from wishlist
      localStorage.removeItem(wishlistKey);
      setIsWishlisted(false);
    } else {
      // Add to wishlist - store the entire product object
      localStorage.setItem(wishlistKey, JSON.stringify(product));
      setIsWishlisted(true);
    }
  };

  return (
    <Card className="!rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative bg-gray-100 h-40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}

        {/* Sale/In Stock Badge */}
        {product.onSale && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}

        {/* Wishlist Heart Icon */}
        <IconButton
          onClick={handleWishlistToggle}
          sx={{
            position: "absolute",
            top: product.onSale ? "45px" : "8px",
            right: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
            padding: "6px",
          }}
          size="small"
        >
          {isWishlisted ? (
            <FavoriteIcon sx={{ color: "#ef4444", fontSize: "1.2rem" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "#6b7280", fontSize: "1.2rem" }} />
          )}
        </IconButton>
      </div>

      <CardContent className="!p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase mb-1 font-semibold">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-sm text-gray-800 mb-2 line-clamp-2 h-10">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i}
                className={`text-xs ${i < Math.floor(product.rating) ? '!text-yellow-400' : '!text-gray-300'}`}
                fontSize="small"
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-green-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          variant="outlined"
          fullWidth
          size="small"
          className="!text-cyan-500 !border-cyan-300 !rounded-lg !text-xs hover:!bg-cyan-50"
          startIcon={<AddShoppingCartIcon fontSize="small" />}
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}