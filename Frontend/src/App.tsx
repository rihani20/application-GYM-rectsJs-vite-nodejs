import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WorkoutSession from "./components/WorkoutSession";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import BMICalculate from "./components/BMICalculate";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculate />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </BrowserRouter>
  )
}

export default App
