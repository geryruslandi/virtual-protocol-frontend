import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "@src/pages/RegisterPage";
import { PageRoutes } from "@src/enums";
import { HomePage } from "@src/pages/HomePage";
import { ProtectedRoute } from "@src/components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: PageRoutes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PageRoutes.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: PageRoutes.HOME,
    element:
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>,
  },
]);
