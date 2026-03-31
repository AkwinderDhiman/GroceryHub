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
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
    "San Francisco", "Indianapolis", "Seattle", "Denver", "Boston",
    "Miami", "Atlanta", "Portland", "Las Vegas", "Detroit",
    "Minneapolis", "Cleveland", "New Orleans", "Arlington", "Bakersfield"
];

// Mock user data
const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    memberSince: "January 2023",
    membership: "Gold Member",
    totalOrders: 24,
    totalSpent: "$1,245.50",
    loyaltyPoints: 5480
};

function Header() {
    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState("USD");
    const [cart, setCart] = useState(0);
    const [locationOpen, setLocationOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("Select a location");
    const [searchCity, setSearchCity] = useState("");
    const [profileOpen, setProfileOpen] = useState(false);

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
                            <button 
                                onClick={() => setProfileOpen(true)}
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
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

            {/* Profile Dialog */}
            <Dialog open={profileOpen} onClose={() => setProfileOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle className="bg-blue-900 text-white">
                    <div className="flex items-center gap-2">
                        <AccountCircleIcon />
                        My Profile
                    </div>
                </DialogTitle>
                <DialogContent className="!pt-6">
                    <div className="space-y-5">
                        {/* Profile Header */}
                        <div className="flex items-center gap-4 pb-4 border-b">
                            <div className="bg-blue-100 rounded-full p-3">
                                <AccountCircleIcon sx={{ fontSize: 48, color: "#1e40af" }} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">{userData.name}</h3>
                                <p className="text-sm text-blue-600 font-semibold">{userData.membership}</p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-3">Contact Information</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <EmailIcon className="text-blue-600" fontSize="small" />
                                    <span className="text-sm text-gray-700">{userData.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PhoneIcon className="text-blue-600" fontSize="small" />
                                    <span className="text-sm text-gray-700">{userData.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <LocationCityIcon className="text-blue-600" fontSize="small" />
                                    <span className="text-sm text-gray-700">{userData.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Account Stats */}
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-3">Account Statistics</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-3 rounded-lg text-center">
                                    <p className="text-2xl font-bold text-blue-600">{userData.totalOrders}</p>
                                    <p className="text-xs text-gray-600 mt-1">Total Orders</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg text-center">
                                    <p className="text-2xl font-bold text-green-600">{userData.totalSpent}</p>
                                    <p className="text-xs text-gray-600 mt-1">Total Spent</p>
                                </div>
                            </div>
                        </div>

                        {/* Loyalty Points */}
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                            <div className="flex items-center gap-2 mb-2">
                                <VerifiedUserIcon className="text-yellow-600" />
                                <h4 className="font-semibold text-gray-700">Loyalty Points</h4>
                            </div>
                            <p className="text-2xl font-bold text-yellow-700">{userData.loyaltyPoints} pts</p>
                            <p className="text-xs text-gray-600 mt-1">Points available for next purchase</p>
                        </div>

                        {/* Member Since */}
                        <div className="bg-blue-50 p-3 rounded-lg text-center border border-blue-200">
                            <p className="text-xs text-gray-600">Member Since</p>
                            <p className="font-semibold text-blue-900">{userData.memberSince}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-4">
                            <Button 
                                variant="contained" 
                                className="!bg-blue-600 !text-white flex-1"
                                size="small"
                            >
                                Edit Profile
                            </Button>
                            <Button 
                                variant="outlined" 
                                className="!border-blue-600 !text-blue-600 flex-1"
                                size="small"
                                onClick={() => setProfileOpen(false)}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

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