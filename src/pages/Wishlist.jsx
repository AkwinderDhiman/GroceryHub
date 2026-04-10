import { useState } from "react";
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
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  // Toggle wishlist
  const handleToggleWishlist = (product) => {
    const exists = wishlistItems.find(item => item.id === product.id);
    if (exists) {
      handleRemoveFromWishlist(product.id);
    } else {
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

                    <div className="flex items-center justify-between mt-auto mb-3">
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
                    </div>
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

      {/* Suggested Products Section */}
      <Box className={`${wishlistItems.length > 0 ? 'mt-12' : 'mt-8'}`}>
        <Typography variant="h5" component="h2" className="font-bold mb-6">
          {wishlistItems.length === 0 ? 'Browse Our Products' : 'You Might Also Like'}
        </Typography>
        <Grid container spacing={3}>
          {allProducts.map((product) => (
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

                <div className="flex items-center justify-between mt-auto mb-3">
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
                </div>
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
                  color={
                    wishlistItems.find(item => item.id === product.id)
                      ? "error"
                      : "default"
                  }
                  onClick={() => handleToggleWishlist(product)}
                  size="small"
                >
                  {wishlistItems.find(item => item.id === product.id) ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </Box>
            </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Add to Cart Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add to Cart</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <Box className="mt-4">
              <Typography variant="body1" className="mb-2">
                <strong>{selectedProduct.name}</strong>
              </Typography>
              <Typography variant="h6" color="primary" className="mb-4">
                ${selectedProduct.price.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Item added to your shopping cart successfully! Continue shopping or proceed to checkout.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Continue Shopping
          </Button>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            View Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
