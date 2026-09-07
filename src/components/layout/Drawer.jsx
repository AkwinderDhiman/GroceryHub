import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CookieIcon from "@mui/icons-material/Cookie";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function TemporaryDrawer({ open, setOpen }) {

  const handleClose = () => {
    setOpen(false);
  };

  const categories = [
    { name: "Fruits & Vegetables", icon: AgricultureIcon },
    { name: "Meats & Seafood", icon: LocalDiningIcon },
    { name: "Breakfast & Dairy", icon: LocalCafeIcon },
    { name: "Beverages", icon: LocalBarIcon },
    { name: "Breads & Bakery", icon: BakeryDiningIcon },
    { name: "Frozen Foods", icon: AcUnitIcon },
    { name: "Biscuits & Snacks", icon: CookieIcon },
    { name: "Grocery & Staples", icon: StorefrontIcon },
  ];

  const DrawerList = (
    <Box sx={{ width: 320 }} role="presentation">
      {/* Header with Logo and Close Button */}
      <div className="flex items-center justify-between p-4 border-b bg-cyan-50">
        <div className="flex items-center gap-2">
          <LocalGroceryStoreIcon className="text-cyan-500" fontSize="large" />
          <h2 className="text-lg font-bold text-blue-900">GroceryHub</h2>
        </div>
        <button onClick={handleClose} className="p-1 hover:bg-gray-200 rounded">
          <CloseIcon />
        </button>
      </div>

      {/* Select Location Section */}
      <div className="p-4 border-b">
        <p className="text-xs text-gray-600 mb-2">Select Location</p>
        <Button 
          variant="outlined" 
          fullWidth 
          className="!text-cyan-500 !border-cyan-500 !capitalize"
          endIcon={<ExpandMoreIcon />}
        >
          Select City
        </Button>
      </div>

      {/* Navigation Links */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/home" onClick={handleClose}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/shop" onClick={handleClose}>
            <ListItemText primary="Shop" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/meats-seafood" onClick={handleClose}>
            <ListItemText primary="Meats & Seafood" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/bakery" onClick={handleClose}>
            <ListItemText primary="Bakery" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/beverages" onClick={handleClose}>
            <ListItemText primary="Beverages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/blog" onClick={handleClose}>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/contact" onClick={handleClose}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      {/* Categories Section */}
      <div className="p-4 font-semibold text-gray-700 text-sm">CATEGORIES</div>

      <List>
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IconComponent fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider />

      {/* Footer Links */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={handleClose} anchor="left">
      {DrawerList}
    </Drawer>
  );
}
