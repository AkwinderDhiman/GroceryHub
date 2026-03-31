import { useState } from "react";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CookieIcon from "@mui/icons-material/Cookie";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const categories = [
    { 
      name: "Fruits & Vegetables", 
      icon: AgricultureIcon,
      submenu: [
        { label: "Cuts & Sprouts", href: "#" },
        { label: "Exotic Fruits & Veggies", href: "#" },
        { label: "Fresh Fruits", href: "#" },
        { label: "Fresh Vegetables", href: "#" },
        { label: "Herbs & Seasonings", href: "#" },
        { label: "Packaged Produce", href: "#" },
        { label: "Party Trays", href: "#" }
      ]
    },
    { name: "Meats & Seafood", icon: LocalDiningIcon },
    { name: "Breakfast & Dairy", icon: LocalCafeIcon },
    { 
      name: "Beverages", 
      icon: LocalBarIcon,
      submenu: [
        { label: "Coffee", href: "#" },
        { label: "Craft Beer", href: "#" },
        { label: "Drink Boxes & Pouches", href: "#" },
        { label: "Milk & Plant-Based Milk", href: "#" },
        { label: "Soda & Pop", href: "#" },
        { label: "Sparkling Water", href: "#" },
        { label: "Tea & Kombucha", href: "#" },
        { label: "Water", href: "#" },
        { label: "Wine", href: "#" }
      ]
    },
    { name: "Breads & Bakery", icon: BakeryDiningIcon },
    { name: "Frozen Foods", icon: AcUnitIcon },
    { name: "Biscuits & Snacks", icon: CookieIcon },
    { name: "Grocery & Staples", icon: StorefrontIcon }
  ];

  const navMenus = {
    home: [
      { label: "Home 1", href: "#" },
      { label: "Home 2", href: "#" },
      { label: "Home 3", href: "#" },
      { label: "Home 4", href: "#" },
      { label: "Home 5", href: "#" }
    ],
    shop: [
      { label: "Shop Default", href: "#" },
      { label: "Shop Right Sidebar", href: "#" },
      { label: "Shop Wide", href: "#" },
      { label: "List Left Sidebar", href: "#" },
      { label: "Load More Button", href: "#" },
      { label: "Infinite Scrolling", href: "#" }
    ]
  };

  const DropdownMenu = ({ items }) => (
    <div className="dropdown-menu">
      {items.map((item, index) => (
        <a key={index} href={item.href} className="dropdown-item">
          {item.label}
        </a>
      ))}
    </div>
  );

  const CategoriesDropdown = () => (
    <div className="categories-dropdown">
      {categories.map((category, index) => {
        const IconComponent = category.icon;
        return (
          <div key={index} className="category-item-wrapper">
            <a href="#" className="category-item">
              <IconComponent className="category-icon" />
              <span className="category-name">{category.name}</span>
              {category.submenu && <ChevronRightIcon className="arrow-icon" />}
            </a>
            {category.submenu && (
              <div className="category-submenu">
                {category.submenu.map((item, subIndex) => (
                  <a key={subIndex} href={item.href} className="submenu-item">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-0 px-4 py-0">

        {/* All Categories Button */}
        <div className="categories-button-wrapper">
          <Button 
            variant="contained" 
            className="!bg-cyan-500 !text-white !rounded-full hover:!bg-cyan-600 !mr-2"
            startIcon={<MenuIcon />}
            endIcon={<ExpandMoreIcon />}
            onClick={toggleSidebar}
          >
            All Categories
          </Button>
          {categoriesOpen && <CategoriesDropdown />}
        </div>

        {/* Navigation Menu */}
        <nav className="flex gap-0 text-sm ml-auto">
          
          {/* Home with Dropdown */}
          <div className="nav-item-wrapper">
            <NavLink to="/home"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            HOME
          </NavLink>
            <DropdownMenu items={navMenus.home} />
          </div>

          {/* Shop with Dropdown */}
          <div className="nav-item-wrapper">
            <a href="#"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>SHOP <ExpandMoreIcon fontSize="small" /></a>
            <DropdownMenu items={navMenus.shop} />
          </div>

          <NavLink to="/meats-seafood"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <LocalDiningIcon fontSize="small" />
            MEATS & SEAFOOD
          </NavLink>
          <NavLink to="/bakery"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <LocalCafeIcon fontSize="small" />
            BAKERY
          </NavLink>
          <NavLink to="/beverages"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <LocalBarIcon fontSize="small" />
            BEVERAGES
          </NavLink>
          <NavLink to="/blog"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            BLOG
          </NavLink>
          <NavLink to="/contact"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </div>
  );
}