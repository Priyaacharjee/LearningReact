import React from "react";
import { Navbar } from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Kid from "./components/Kid";
import Men from "./components/Men";
import Women from "./components/Women";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";

// ✅ Layout component to show Navbar + dynamic pages
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// ✅ Router setup
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductCard />
      },
      {
        path: "/kid",
        element: <Kid />
      },
      {
        path: "/women",
        element: <Women />
      },
      {
        path: "/men",
        element: <Men />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />
      }
    ],
    errorElement:<Error/>
    
  }
]);

// ✅ Main App component that provides the router
export default function App() {
  return <RouterProvider router={appRouter} />;
}
