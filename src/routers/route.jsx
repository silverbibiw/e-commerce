import { useRoutes } from "react-router-dom";
//pages
import HomePage from "../../src/pages/HomePage/";
import ClothesPage from "../../src/pages/ClothesPage";
import Jewelery from "../../src/pages/Jewelery";
import AccessoriesPage from "../../src/pages/AccessoriesPage";
import LoginPage from "../../src/pages/LoginPage";
import MyOrders from "../../src/pages/MyOrders";
import MyFavorites from "../../src/pages/MyFavorites";
import React from "react";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/clothes",
      element: <ClothesPage />,
    },
    {
      path: "/shoes",
      element: <Jewelery />,
    },
    {
      path: "/accessories",
      element: <AccessoriesPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/ordes",
      element: <MyOrders />,
    },
    {
      path: "/favorites",
      element: <MyFavorites />,
    },
  ]);

  return routes;
}
