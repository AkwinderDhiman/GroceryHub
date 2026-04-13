import { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import products from "../data/products";
import useResponsive from "../hooks/useResponsive";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isMobile } = useResponsive();

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const loadWishlistFromStorage = () => {
      const items = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("wishlist_")) {
          try {
            const product = JSON.parse(localStorage.getItem(key));
            // Validate that product has required fields
            if (product && product.id && product.name && product.image && product.price) {
              items.push(product);
            }
          } catch (error) {
            console.error("Error parsing wishlist item:", error);
          }
        }
      }
      setWishlistItems(items);
    };
    
    loadWishlistFromStorage();
  }, []);

  // Handle add to cart
  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  // Handle close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  // Remove from wishlist
  const handleRemoveFromWishlist = (productId) => {
    const wishlistKey = `wishlist_${productId}`;
    localStorage.removeItem(wishlistKey);
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  // Toggle wishlist
  const handleToggleWishlist = (product) => {
    const exists = wishlistItems.find(item => item.id === product.id);
    const wishlistKey = `wishlist_${product.id}`;
    
    if (exists) {
      localStorage.removeItem(wishlistKey);
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
    } else {
      localStorage.setItem(wishlistKey, JSON.stringify(product));
      setWishlistItems([...wishlistItems, product]);
    }
  };

  // Get sample products to display
  const allProducts = products.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Typography variant="h4" component="h1" className="font-bold mb-2">
          My Wishlist
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {wishlistItems.length === 0
            ? "Your wishlist is empty. Add items to get started!"
            : `You have ${wishlistItems.length} item${wishlistItems.length !== 1 ? 's' : ''} in your wishlist.`}
        </Typography>
      </div>

      {/* Empty State */}
      {wishlistItems.length === 0 && (
        <Box className="text-center py-16 border border-gray-200 rounded-lg bg-gray-50">
          <FavoriteBorderIcon sx={{ fontSize: 80, color: "#d1d5db", mb: 2 }} />
          <Typography variant="h6" color="textSecondary" className="mb-4">
            No items in your wishlist yet
          </Typography>
          <Typography variant="body2" color="textSecondary" className="mb-6">
            Browse our products and add your favorites to your wishlist to save them for later.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/"
            className="capitalize"
          >
            Continue Shopping
          </Button>
        </Box>
      )}

      {/* Wishlist Items Grid */}
      {wishlistItems.length > 0 && (
        <>
          <Grid container spacing={3} className="mb-12">
            {wishlistItems.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardMedia
                    component="img"
                    height={200}
                    image={product.image}
                    alt={product.name}
                    className="object-cover"
                  />
                  <CardContent className="flex-1 flex flex-col">
                    <Typography
                      variant="h6"
                      component="div"
                      className="mb-2 line-clamp-2 font-semibold"
                    >
                      {product.name}
                    </Typography>
                    
                    <Box className="mb-2">
                      <Chip 
                        label={product.category} 
                        size="small" 
                        variant="outlined"
                        color="primary"
                      />
                    </Box>

                    {product.onSale && (
                      <Box className="mb-2">
                        <Chip 
                          label="On Sale" 
                          size="small" 
                          color="error"
                          variant="filled"
                        />
                      </Box>
                    )}

                    {/* <div className="flex items-center justify-between mt-auto mb-3">
                      <div>
                        <Typography variant="h6" color="primary" className="font-bold">
                          ${product.price.toFixed(2)}
                        </Typography>
                        {product.originalPrice && (
                          <Typography 
                            variant="body2" 
                            color="textSecondary" 
                            sx={{ textDecoration: 'line-through' }}
                          >
                            ${product.originalPrice.toFixed(2)}
                          </Typography>
                        )}
                      </div>
                      <Typography variant="body2" color="textSecondary">
                        ⭐ {product.rating}
                      </Typography>
                    </div> */}
                  </CardContent>

                  <Box className="px-4 pb-4 flex gap-2">
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      startIcon={<ShoppingCartIcon />}
                      size="small"
                      onClick={() => handleAddToCart(product)}
                    >
                      {isMobile ? "Cart" : "Add to Cart"}
                    </Button>
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Continue Shopping Section */}
          <Box className="text-center py-8 border-t">
            <Typography variant="h6" className="mb-4">
              Want to continue shopping?
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              href="/"
              className="capitalize"
            >
              Browse More Products
            </Button>
          </Box>
        </>
      )}
    </div>
  );
}
