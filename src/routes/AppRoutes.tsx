import { Spinner } from "@/components/ui/spinner";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("@/modules/Home/pages/Home"));
const Product = lazy(() => import("@/modules/Product/pages/Product"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:slug",
    element: <Product />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider fallbackElement={<Spinner />} router={router} />;
};
