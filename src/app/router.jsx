import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Beverages from "../pages/Beverages";
import Bakery from "../pages/Bakery";
import MeatsSeafood from "../pages/MeatsSeafood";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import CheckoutCancel from "../pages/CheckoutCancel";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Home />} />
        <Route path="meats-seafood" element={<MeatsSeafood />} />
        <Route path="bakery" element={<Bakery />} />
        <Route path="beverages" element={<Beverages />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout/success" element={<CheckoutSuccess />} />
        <Route path="checkout/cancel" element={<CheckoutCancel />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}
