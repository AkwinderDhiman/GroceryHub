import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="flex p-6">
      <Sidebar openSidebar={openSidebar} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;