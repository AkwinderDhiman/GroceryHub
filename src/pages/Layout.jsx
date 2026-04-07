import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex">
        <Sidebar openSidebar={openSidebar} />
        <div className="p-4 w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;