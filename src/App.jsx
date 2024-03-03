import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//main
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import HomePage from "../src/pages/HomePage";
import ClothesPage from "../src/pages/ClothesPage";
import ShoesPage from "./pages/Jewelery";
import AccessoriesPage from "../src/pages/AccessoriesPage";
import LoginPage from "../src/pages/LoginPage";
import MyOrders from "../src/pages/MyOrders";
import MyFavorites from "../src/pages/MyFavorites";
import React from "react";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clothes" element={<ClothesPage />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ordes" element={<MyOrders />} />
            <Route path="/favorites" element={<MyFavorites />} />
          </Routes>
        </Router>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
