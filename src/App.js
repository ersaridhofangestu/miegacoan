import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
import Hiro from "./components/hiro";
import Main from "./components/main";
import Galery from "./components/galery";
import AccordionFlush from "./components/accordion";
import Testimonial from "./components/testimonial";
import Pesan from "./components/Pesan";
const App = () => {
  return (
    <>
      <Navbar />
      <Hiro />
      <Main />
      <Galery />
      <AccordionFlush />
      <Testimonial />
      <Pesan />
      <Footer />
    </>
  );
};

export default App;
