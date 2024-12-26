import { createBrowserRouter } from "react-router"
import MainLayout from "../Layoute/MainLayout";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])