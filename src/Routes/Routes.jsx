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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateCar from "../Pages/UpdateCar/UpdateCar";
import CarDetails from "../Components/CarDetails/CarDetails";


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
                element: <PrivateRoute><SingleBrand></SingleBrand></PrivateRoute>,
                loader: () => fetch(`https://automotive-car-server-kzda2b2nk-rimons-projects-5b7fea00.vercel.app/cars`)
            },
            {
                path: "/carDetails/:id",
                element: <PrivateRoute><CarDetails></CarDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://automotive-car-server.vercel.app/cars/${params.id}`)

            },
            {
                path: "/update/:id",
                element: <PrivateRoute> <UpdateCar></UpdateCar> </PrivateRoute>,
                loader: ({ params }) => {
                    // console.log(params.id);
                    return fetch(`https://automotive-car-server.vercel.app/cars/${params.id}`)
                }
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://automotive-car-server.vercel.app/myCart')
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