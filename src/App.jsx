import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AcercaDeMi from "./components/AcercaDeMi";
import Proyectos from "./components/Proyectos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AcercaDeMi />
      <Proyectos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
