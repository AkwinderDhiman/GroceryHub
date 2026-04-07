import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

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
    </>
  );
};

export default Layout;