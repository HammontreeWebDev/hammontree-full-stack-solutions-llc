import React, { useEffect, useState } from 'react';
import '../styles/homepage.module.css';
import Welcome from "../components/Welcome";
// import MobileWelcome from "../../components/MobileWelcome";

// css
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      // Add event listener to update width on window resize
      window.addEventListener('resize', handleResize);
  
      // Initial width
      setWidth(window.innerWidth);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    if (width > 540) {
      return (
        <>
          <main className="home-page">
            <Welcome />
          </main>
        </>
      );
    } else {
      return (
        <>
          <main className="home-page">
            <MobileWelcome />
          </main>
        </>
      );
    }
  };
  
  export default IndexPage;