import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SingleBrand from "../Components/BrandCard/SingleBrand";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/singleBrand/:brand_name",
                element: <SingleBrand></SingleBrand>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch('')
                }
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register></Register>
            }

        ]
    },
]);



export default router