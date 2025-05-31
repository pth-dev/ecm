import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CasesPage from "./pages/CasesPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import { useAuthStore } from "./features/auth/store/authStore";

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Router configuration
const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <MainLayout title="Dashboard" />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },

  // Protected routes
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "cases",
        element: <CasesPage />,
      },
      {
        path: "card-applications",
        element: <div>Card Applications Page</div>,
      },
      {
        path: "installment-plans",
        element: <div>Installment Plans Page</div>,
      },
      {
        path: "transaction-matching",
        element: <div>Transaction Matching Page</div>,
      },
    ],
  },

  // Redirect all unknown routes to home
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
