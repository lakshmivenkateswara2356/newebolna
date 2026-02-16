import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Services from "./Pages/Services";
import Contacts from "./Pages/Contacts";


const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
      
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contacts/>}/>
      </Routes>
    </Router>
  );
};

export default App;
