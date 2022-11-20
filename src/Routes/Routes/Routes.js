import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import ContactUs from "../../Pages/ContactUs/ContactUs/ContactUs";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Error404 from "../../Pages/Error404.js/Error404";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "/reviews",
                element: <Reviews></Reviews>
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ],
        errorElement: <Error404></Error404>
    }
]);

export default router;