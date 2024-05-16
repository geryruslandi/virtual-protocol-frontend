import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "@src/pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
