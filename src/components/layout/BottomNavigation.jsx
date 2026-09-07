import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Badge } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function BottomNav({ onCategoriesClick, cartCount = 0 }) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (newValue) => {
    setValue(newValue);
    
    switch(newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        // Search functionality
        break;
      case 2:
        // Account functionality
        break;
      case 3:
        onCategoriesClick();
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleNavigation(newValue)}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderTop: "1px solid #e5e7eb",
        backgroundColor: "white",
        boxShadow: "0 -2px 4px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease-in-out",
        "& .MuiBottomNavigationAction-root": {
          color: "#999",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            color: "#06b6d4",
          },
          "&.Mui-selected": {
            color: "#06b6d4",
            fontWeight: 600,
          }
        }
      }}
    >
      <BottomNavigationAction 
        label="Store" 
        icon={<StorefrontIcon />}
        className="transition-smooth"
      />
      <BottomNavigationAction 
        label="Search" 
        icon={<SearchIcon />}
        className="transition-smooth"
      />
      <BottomNavigationAction 
        label="Account" 
        icon={<AccountCircleIcon />}
        className="transition-smooth"
      />
      <BottomNavigationAction 
        label="Categories" 
        icon={<MenuIcon />}
        className="transition-smooth"
      />
    </BottomNavigation>
  );
}
