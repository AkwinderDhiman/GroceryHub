import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CookieIcon from "@mui/icons-material/Cookie";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Sidebar({ openSidebar, onCategorySelect, activeCategory }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    status: true,
    brand: true
  });
  const [expandedCategories, setExpandedCategories] = useState({
    "Meats & Seafood": true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Map category names to routes
  const categoryRoutes = {
    "Beverages": "/beverages",
    "Breads & Bakery": "/bakery",
    "Meats & Seafood": "/meats-seafood"
  };

  // Category icons mapping
  const categoryIcons = {
    "Fruits & Vegetables": AgricultureIcon,
    "Meats & Seafood": LocalDiningIcon,
    "Breakfast & Dairy": LocalCafeIcon,
    "Beverages": LocalBarIcon,
    "Breads & Bakery": BakeryDiningIcon,
    "Frozen Foods": AcUnitIcon,
    "Biscuits & Snacks": CookieIcon,
    "Grocery & Staples": StorefrontIcon
  };

  const handleCategoryClick = (categoryName) => {
    onCategorySelect(categoryName);
    
    // Navigate to the category route if it exists
    if (categoryRoutes[categoryName]) {
      navigate(categoryRoutes[categoryName]);
    }
  };

  const categories = [
    { 
      name: "Beverages", 
      subcategories: [
        "Coffee",
        "Craft Beer",
        "Drink Boxes & Pouches",
        "Milk & Plant-Based Milk",
        "Soda & Pop",
        "Sparkling Water",
        "Tea & Kombucha",
        "Water",
        "Wine"
      ]
    },
    { name: "Biscuits & Snacks", subcategories: [] },
    { 
      name: "Breads & Bakery", 
      subcategories: [
        "Buns and Rolls",
        "Cakes and Cupcakes",
        "Cookies and Brownies",
        "Donuts and Muffins",
        "Order Specialty Cakes",
        "Packaged Breads"
      ]
    },
    { 
      name: "Breakfast & Dairy", 
      subcategories: [
        "Butter and Margarine",
        "Cheese",
        "Eggs Substitutes",
        "Honey",
        "Marmalades",
        "Milk & Flavoured Milk",
        "Sour Cream and Dips",
        "Yogurt"
      ]
    },
    { name: "Frozen Foods", subcategories: [] },
    { 
      name: "Fruits & Vegetables", 
      subcategories: [
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Fresh Fruits",
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Packaged Produce",
        "Party Trays"
      ]
    },
    { name: "Grocery & Staples", subcategories: [] },
    { name: "Household Needs", subcategories: [] },
    { 
      name: "Meats & Seafood", 
      subcategories: [
        "Beef",
        "Breakfast Sausage",
        "Chicken",
        "Crab and Shellfish",
        "Dinner Sausage",
        "Farm Raised Fillets",
        "Shrimp",
        "Sliced Deli Meat",
        "Wild Caught Fillets"
      ]
    }
  ];

  const brands = [
    { name: "Frito Lay", count: 13 },
    { name: "Nespresso", count: 12 },
    { name: "Quaker", count: 9 },
    { name: "Hormel", count: 8 }
  ];

  const productStatus = [
    { label: "In Stock", value: "in_stock" },
    { label: "On Sale", value: "on_sale" }
  ];

  const SectionHeader = ({ title, section }) => (
    <div 
      className="flex justify-between items-center cursor-pointer py-2 border-b hover:bg-gray-50"
      onClick={() => toggleSection(section)}
    >
      <h3 className="font-bold text-sm text-gray-800">{title}</h3>
      {expandedSections[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </div>
  );

  if (!openSidebar) return null;

  // Home page sidebar - simplified with icons
  if (isHomePage) {
    return (
      <div className="w-64 border-r border-gray-200 bg-white">
        {/* Categories with Icons */}
        <div className="p-4">
          <h3 className="font-bold text-sm text-gray-800 mb-4">CATEGORIES</h3>
          <div className="space-y-3">
            {categories.slice(0, 8).map((cat) => {
              const IconComponent = categoryIcons[cat.name];
              return (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`w-full flex items-center gap-3 p-2 rounded transition ${
                    activeCategory === cat.name
                      ? 'bg-blue-50'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {IconComponent && <IconComponent className="text-gray-500" fontSize="small" />}
                  <span className={`text-sm flex-1 text-left ${
                    activeCategory === cat.name
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700'
                  }`}>
                    {cat.name}
                  </span>
                  {cat.subcategories.length > 0 && (
                    <ChevronRightIcon fontSize="small" className="text-gray-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-200 p-4 space-y-3">
          <button className="w-full text-left text-sm text-gray-700 hover:text-blue-600 font-medium">
            Value of the Day
          </button>
          <button className="w-full text-left text-sm text-gray-700 hover:text-blue-600 font-medium">
            Top 100 Offers
          </button>
          <button className="w-full text-left text-sm text-gray-700 hover:text-blue-600 font-medium">
            New Arrivals
          </button>
        </div>
      </div>
    );
  }

  // All Categories page - full view with filters
  return (
    <div className="w-64 pl-8 border-r border-gray-200">
      
      {/* Product Categories */}
      <div className="mb-6">
        <SectionHeader title="PRODUCT CATEGORIES" section="categories" />
        {expandedSections.categories && (
          <div className="space-y-0 mt-3">
            {categories.map((cat) => (
              <div key={cat.name}>
                {/* Main Category */}
                <div className="flex items-center py-2 hover:bg-gray-50">
                  <Checkbox
                    size="small"
                    checked={activeCategory === cat.name}
                    onChange={() => handleCategoryClick(cat.name)}
                    className="mr-2"
                  />
                  <button
                    onClick={() => handleCategoryClick(cat.name)}
                    className={`text-sm flex-1 text-left transition cursor-pointer ${
                      activeCategory === cat.name
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-600 hover:text-blue-600 hover:font-semibold'
                    }`}
                  >
                    {cat.name}
                  </button>
                  {cat.subcategories.length > 0 && (
                    <button
                      onClick={() => toggleCategory(cat.name)}
                      className="ml-auto mr-2 text-gray-500 hover:text-gray-700 p-1"
                    >
                      {expandedCategories[cat.name] ? (
                        <span className="text-lg leading-none">−</span>
                      ) : (
                        <span className="text-lg leading-none">+</span>
                      )}
                    </button>
                  )}
                </div>

                {/* Subcategories */}
                {cat.subcategories.length > 0 && expandedCategories[cat.name] && (
                  <div className="pl-8 space-y-0 bg-gray-50">
                    {cat.subcategories.map((sub) => (
                      <div key={sub} className="flex items-center py-2 hover:bg-gray-100">
                        <Checkbox
                          size="small"
                          className="mr-2"
                        />
                        <button
                          onClick={() => {
                            handleCategoryClick(cat.name);
                          }}
                          className="text-sm text-gray-600 flex-1 text-left hover:text-blue-600 hover:font-semibold transition cursor-pointer"
                        >
                          {sub}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <SectionHeader title="FILTER BY PRICE" section="price" />
        {expandedSections.price && (
          <div className="mt-4">
            <Slider 
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              min={0}
              max={100}
              marks={[
                { value: 0, label: "$0" },
                { value: 100, label: "$70" }
              ]}
              valueLabelDisplay="auto"
              className="mb-4"
            />
            <button className="w-full text-center py-2 border border-gray-300 text-sm text-gray-700 rounded hover:bg-gray-100 transition">
              FILTER
            </button>
          </div>
        )}
      </div>

      {/* Product Status */}
      <div className="mb-6">
        <SectionHeader title="PRODUCT STATUS" section="status" />
        {expandedSections.status && (
          <div className="space-y-2 mt-3">
            {productStatus.map((status) => (
              <FormControlLabel
                key={status.value}
                control={<Checkbox size="small" />}
                label={status.label}
                className="text-sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <SectionHeader title="BRAND" section="brand" />
        {expandedSections.brand && (
          <div className="space-y-2 mt-3">
            {brands.map((brand) => (
              <FormControlLabel
                key={brand.name}
                control={<Checkbox size="small" />}
                label={
                  <span className="text-sm">
                    {brand.name} <span className="text-gray-500">({brand.count})</span>
                  </span>
                }
              />
            ))}
          </div>
        )}
      </div>

      {/* Promotional Banner */}
      <div className="mt-8 bg-gradient-to-b from-pink-200 to-green-200 rounded-lg p-6 text-center">
        <h4 className="font-bold text-lg text-gray-800 mb-2">HAPPY HOUR</h4>
        <p className="text-gray-600 text-xs mb-4">Save up to 50% All the items</p>
        <div className="text-center">
          <span className="text-green-600 font-bold text-lg">50%</span>
          <p className="text-xs text-gray-600 mt-2">DISCOUNT</p>
        </div>
      </div>
    </div>
  );
}