import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import googlePlayImg from "../assets/google-play.webp";
import APPStoreImg from "../assets/app-store.webp";


export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">

      {/* 🔵 Newsletter Section */}
      <div className="bg-blue-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div>
            <p className="text-sm opacity-80">$20 discount for your first order</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">
              Join our newsletter and get...
            </h2>
            <p className="text-sm opacity-80 mt-2">
              Updates on promotions and coupons.
            </p>
          </div>

          <div className="flex w-full max-w-md">
            <div className="flex items-center bg-white px-3 rounded-l-lg w-full">
              <EmailIcon className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-2 outline-none text-gray-700 text-sm"
              />
            </div>
            <button className="bg-blue-600 px-5 rounded-r-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 🟢 Features */}
      <div className="border-b py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-2 gap-4 text-sm text-gray-700 text-center">
          <div>Everyday fresh products</div>
          <div>Free delivery over $70</div>
          <div>Daily Mega Discounts</div>
          <div>Best price on market</div>
        </div>
      </div>

      {/* 📚 Links Section */}
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-5 sm:grid-cols-3 lg:grid-cols-2 gap-6 text-sm text-gray-700">

          <div>
            <h4 className="font-semibold mb-3">FRUIT & VEGETABLES</h4>
            <ul className="space-y-1">
              <li>Fresh Vegetables</li>
              <li>Herbs & Seasonings</li>
              <li>Fresh Fruits</li>
              <li>Cuts & Sprouts</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">BREAKFAST & DAIRY</h4>
            <ul className="space-y-1">
              <li>Milk & Flavoured Milk</li>
              <li>Butter & Margarine</li>
              <li>Cheese</li>
              <li>Eggs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">MEAT & SEAFOOD</h4>
            <ul className="space-y-1">
              <li>Beef</li>
              <li>Chicken</li>
              <li>Shrimp</li>
              <li>Fish</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">BEVERAGES</h4>
            <ul className="space-y-1">
              <li>Water</li>
              <li>Soda</li>
              <li>Coffee</li>
              <li>Tea</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">BREADS & BAKERY</h4>
            <ul className="space-y-1">
              <li>Milk & Flavoured Milk</li>
              <li>Butter</li>
              <li>Cheese</li>
              <li>Yogurt</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ☎ Bottom Section */}
      <div className="border-t py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-2 justify-between items-center gap-4 text-sm">

          <div className="flex items-center gap-2 text-gray-700">
            <PhoneIcon />
            <div>
              <p className="font-semibold">8 800 555-55</p>
              <p className="text-xs text-gray-500">Working 8:00 - 22:00</p>
            </div>
          </div>

          <div className="text-gray-500 text-center">
            Download App on Mobile:-
            <div className="flex items-center justify-center mt-2">
                <img src={googlePlayImg} alt="Google Play" />
            <img src={APPStoreImg} alt="App Store" className="ml-2" />
            </div> 
          </div>
                  <div className="text-blue-500 text-center gap-2 flex items-center justify-center">
                      <InstagramIcon /> <FacebookIcon /> <TwitterIcon />
                  </div>
        </div>
      </div>

      {/* ⚫ Copyright */}
      <div className="bg-gray-200 py-4 text-center text-xs text-gray-600">
        © 2026 GroceryHub. All rights reserved.
      </div>

    </footer>
  );
}