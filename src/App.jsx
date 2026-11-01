
import React from "react";
import Home from "@/Pages/Home";
import NavBar from "./Component/NavBar";
import Services from '@/Pages/Services'
import About from '@/Pages/About'
import Projects from "@/Pages/Project";
import Skills from '@/Pages/Skills'
import Pricing from "@/Pages/Pricing";
import Contact from "@/Pages/Contact";

import FloatingSlingButton from "@/Component/FloatingSlingButton";
const App = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F7F7F4]">
      <NavBar />
      <Home />
      <Services/>
      <About/>
      <Projects/>
      <Pricing/>
      <Skills/>
      <Contact/>
    
    <FloatingSlingButton/>
    </main>
  );
};

export default App;
