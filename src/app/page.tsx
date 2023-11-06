import React, { useState, useEffect } from 'react';
import SplashScreen from "./components/SplashScreen/index"; 
/* import Header from '../sections/Header'; */
import Hero from "./sections/Hero/index";
/* import About from "../sections/About";
import Projects from "../sections/Projects";
import Testimonials from '../sections/Testimonials';
import ContactUs from '../sections/ContactUs';
import Footer from '../sections/Footer';
 */
const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showSection, setShowSection] = useState(false);

  const handleScrollDown = () => {
    setShowSection(true);
  };

  // Mimic componentDidMount lifecycle to handle the splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); 
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onFinished={() => setShowSplash(false)} />
      ) : (
        <>
          {/* {showSection && <Header />} */}
          <Hero onScrollDown={handleScrollDown} />
          {/* {showSection && <About />}
          {showSection && <Projects />}
          {showSection && <Testimonials />}
          {showSection && <ContactUs />}
          {showSection && <Footer />} */}
        </>
      )}
    </div>
  );
};

export default Home;