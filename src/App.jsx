import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import Jobs from "./Pages/Jobs";
import Verification from "./Pages/Verification";
import Internships from "./Pages/Internships";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import SubHeader from "./Components/SubHeader";
import PageNotFound from "./Pages/PageNotFound";


function App() {
  return (
    <Router>
      <SubHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
