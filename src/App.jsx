import "./App.css";
import { BrowserRouter } from "react-router-dom";
//main
import Header from "./components/Header";
import Footer from "./components/Footer";

import React from "react";
import Router from "./routers/route";
import Hero from "./layout/Hero";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="overflow-hidden">
        <Router />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
