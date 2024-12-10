import { useState, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader"; // Import Preloader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // Show Preloader while loading
      ) : (
        <main className="bg-black relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Hero />
          <About />
          <Features />
          <Story />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
