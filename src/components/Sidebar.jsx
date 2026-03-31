import { useState } from "react";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Sidebar({ openSidebar }) {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    status: true,
    brand: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const categories = [
    "Beverages",
    "Biscuits & Snacks",
    "Breads & Bakery",
    "Breakfast & Dairy",
    "Frozen Foods",
    "Fruits & Vegetables",
    "Household Needs",
    "Meats & Seafood"
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
  return (
    <div className="w-64 pl-8 border-r border-gray-200">
      
      {/* Product Categories */}
      <div className="mb-6">
        <SectionHeader title="PRODUCT CATEGORIES" section="categories" />
        {expandedSections.categories && (
          <div className="space-y-2 mt-3">
            {categories.map((cat) => (
              <div
                key={cat}
                className="py-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer hover:font-semibold transition"
              >
                + {cat}
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