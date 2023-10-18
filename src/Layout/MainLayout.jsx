import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;