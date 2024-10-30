import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Routers/MainRouter.jsx";
import "./index.css";
import RegistrationContextProvider from "./Contexts/RegistrationContextProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RegistrationContextProvider>
      <Toaster position="top-right" reverseOrder={true} />
      <RouterProvider router={mainRouter} />
    </RegistrationContextProvider>
  </StrictMode>
);
