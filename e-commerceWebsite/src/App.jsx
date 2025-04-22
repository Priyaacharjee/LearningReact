import React, { lazy, Suspense, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Kid from "./components/Kid";
import Men from "./components/Men";
import Women from "./components/Women";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"
import appStore from "./store/Store";
import CompoA from "./components/CompoA";
import Cart from "./components/Cart";
import Memo from "./components/Memo";
//import Grocery from "./components/Grocery";  //normal import na kore dynamic import korbo using lazy loading,basically making a new bundler for optimization and improved performance.

//lazy loading/code spliting/dynamic import
const Grocery = lazy(() => import('./components/Grocery')
)

// ✅ Layout component to show Navbar + dynamic pages
const Layout = () => {
  const [userName, setUserName] = useState("Look What you made do!");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName, setUserName }}>
        <Navbar />
        {/* <CompoA/> */}
        <Outlet />
      </UserContext.Provider>
    </Provider>
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
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/memo",
        element: <Memo/>
      }
    ],
    errorElement: <Error />

  }
]);

// ✅ Main App component that provides the router
export default function App() {
  return <RouterProvider router={appRouter} />;
}
