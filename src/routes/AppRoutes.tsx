import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Spinner } from "@/components/ui/spinner";

const Layout = lazy(() => import("@/components/Layouts/Layout"));

const Home = lazy(() => import("@/modules/Home/pages/Home"));
const Product = lazy(() => import("@/modules/Product/pages/Product"));
const History = lazy(() => import("@/modules/Purchase/pages/History"));

const router = createBrowserRouter([
  {
    element: <Layout key="layout" />,
    children: [
      {
        path: "/",
        element: <Home key="home" />,
      },
      {
        path: "/product/:slug",
        element: <Product key="product" />,
      },
      {
        path: "/purchase-history",
        element: <History key="purchase-history" />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider fallbackElement={<Spinner />} router={router} />;
};
