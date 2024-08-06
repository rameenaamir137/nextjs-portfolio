



import Hero from "@/components/herosection";
import  CompanyInfoCards  from "@/components/card";
import Navbar from "@/components/ui/navbar";

import Image from "next/image";
import AboutUs from "@/components/about";
import Team from "@/components/team";
import Connections from "@/components/connections";
import Projects from "@/components/projects";
import Research from "@/components/research";
import Awards from "@/components/awards";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs/>
      <Team/>
      <Projects/>
      <Research/>
      <Awards/>
      <Connections/>
      <Footer/>
      
    </>
   
  );
}
