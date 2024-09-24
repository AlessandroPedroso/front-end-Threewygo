import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "../components/DefaultPage";
import Home from "../pages/Home";

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <DefaultPage />,
        
        children: [
            {
                index: true,
                element:<Home/>
            }
        ]
    }
])