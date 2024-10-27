import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import AllSpot from "../Pages/AllSpot";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=>fetch(`${import.meta.env.VITE_DATABASE_URL}/spot/0/5`)
      },
      {
        path: "/AllSpot",
        element: <AllSpot />,
        loader:()=>fetch(`${import.meta.env.VITE_DATABASE_URL}/spot`)
      },
    ],
  },
]);
