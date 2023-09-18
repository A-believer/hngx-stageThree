import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";

export default function App() {
  
  return (
    <main className="bg-heroBg bg-cover bg-no-repeat text-white px-4 md:px-10 sm:px-20 w-full h-full sm:py-8 py-5 font-poppins">
      <Navbar/>
      <Routes>
      <Route index path="/" element={<Gallery/>}/>
      </Routes>
      <Footer />
    </main>
    
  )
}
