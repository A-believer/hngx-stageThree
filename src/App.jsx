import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Gallery from "./components/Gallery";
import LogIn from "./components/LogIn";
import { UserAuth } from "./utils/AuthContext";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate()
  const { currentUser } = UserAuth()
  
  useEffect(() => {
 if (!currentUser) {
   navigate("/login")
  } else {
    navigate("/")
  }
  
  }, [currentUser, navigate])

 
  return (
    <main className="bg-heroBg bg-cover bg-no-repeat text-white w-full h-fullfont-poppins">
      <div className="bg-black/50  px-4 md:px-10 sm:px-20  sm:py-8 py-5 w-full">
         <Navbar/>
      <Routes>
      <Route path="/" element={<Gallery/>}/>
      <Route path="/login" element={<LogIn/>}/>
      </Routes>
      <Footer />
      </div>
    </main>
    
  )
}
