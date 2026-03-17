import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button, Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
    "San Francisco", "Indianapolis", "Seattle", "Denver", "Boston",
    "Miami", "Atlanta", "Portland", "Las Vegas", "Detroit",
    "Minneapolis", "Cleveland", "New Orleans", "Arlington", "Bakersfield"
];

function Header() {
    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState("USD");
    const [cart, setCart] = useState(0);
    const [locationOpen, setLocationOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("Select a location");
    const [searchCity, setSearchCity] = useState("");

    const filteredCities = cities.filter(city => 
        city.toLowerCase().includes(searchCity.toLowerCase())
    );

    const handleLocationSelect = (city) => {
        setSelectedLocation(city);
        setLocationOpen(false);
        setSearchCity("");
    };

    return (
        <>
         <header className="bg-white">
            {/* Main Header */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
                    
                    {/* Logo and Location */}
                    <div className="flex items-center gap-6">
                        <div className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                            <LocalGroceryStoreIcon className="text-cyan-500" style={{ fontSize: "32px" }} />
                            GroceryHub
                        </div>
                        
                        {/* Location Search */}
                        <button 
                            onClick={() => setLocationOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-600 text-gray-700 text-sm whitespace-nowrap"
                        >
                            <LocationOnIcon fontSize="small" />
                            {selectedLocation}
                            <ExpandMoreIcon fontSize="small" />
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-4 py-2">
                        <SearchIcon className="text-gray-400 mr-2" />
                        <input 
                            type="text" 
                            placeholder="Search for products..." 
                            className="bg-transparent w-full outline-none text-sm"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4 items-center">
                            <button className="text-gray-700 hover:text-blue-600">
                                <AccountCircleIcon fontSize="large" />
                            </button>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="text-sm text-gray-700 hover:text-blue-600">Wishlist</a>
                            <span className="text-gray-300">|</span>
                            <button className="relative">
                                <ShoppingCartIcon className="text-blue-900" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Links */}
            <div className="border-b bg-gray-50 px-4 py-2 text-xs">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Wishlist</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Order Tracking</a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-gray-600">Need help? Call Us: <a href="#" className="text-blue-600 hover:underline font-semibold">+ 1 800 555-55</a></p>
                        <div className="flex gap-2">
                            <Select 
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                size="small"
                                className="bg-white"
                            >
                                <MenuItem value="English">English</MenuItem>
                                <MenuItem value="Spanish">Spanish</MenuItem>
                                <MenuItem value="French">French</MenuItem>
                            </Select>
                            <Select 
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                size="small"
                                className="bg-white"
                            >
                                <MenuItem value="USD">USD</MenuItem>
                                <MenuItem value="EUR">EUR</MenuItem>
                                <MenuItem value="GBP">GBP</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Dialog */}
            <Dialog open={locationOpen} onClose={() => setLocationOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Select Your Location</DialogTitle>
                <DialogContent className="!pt-4">
                    <TextField
                        autoFocus
                        fullWidth
                        placeholder="Search cities..."
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                        size="small"
                        className="mb-4"
                    />
                    <div className="max-h-96 overflow-y-auto">
                        {filteredCities.length > 0 ? (
                            filteredCities.map((city) => (
                                <div
                                    key={city}
                                    onClick={() => handleLocationSelect(city)}
                                    className="p-3 hover:bg-blue-50 cursor-pointer border-b text-sm"
                                >
                                    <LocationOnIcon fontSize="small" className="mr-2 align-middle" />
                                    {city}
                                </div>
                            ))
                        ) : (
                            <div className="p-3 text-gray-500 text-center">No cities found</div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

        </header>
    </>
    );
}

export default Header;