import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import AllSpot from "../Pages/AllSpot";
import UserLog from "../Pages/UserLog";
import SpotDetails from "../Components/SpotDetails";
import SelectedUserList from "../Pages/SelectedUserList";
import UpdateSpot from "../Pages/UpdateSpot";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_DATABASE_URL}/spot/0/5`),
      },
      {
        path: "/AllSpot",
        element: <AllSpot />,
        loader: () => fetch(`${import.meta.env.VITE_DATABASE_URL}/spot`),
      },
      {
        path: "/Spot/:SpotId",
        element: <SpotDetails />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_DATABASE_URL}/spotData/_id/${params.SpotId}`
          ),
      },
      {
        path: "/user/:userId",
        element: <SelectedUserList />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_DATABASE_URL}/spotData/user_id/${
              params.userId
            }`
          ),
      },
      {
        path: "/UpdateSpot",
        element: <UpdateSpot />,
      },
    ],
  },
  {
    path: "/Registration",
    element: <UserLog />,
  },
]);
