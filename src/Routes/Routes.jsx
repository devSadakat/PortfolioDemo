import { createBrowserRouter } from "react-router"
import MainLayout from "../Layoute/MainLayout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    }
])