import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;