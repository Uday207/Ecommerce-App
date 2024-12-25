import React, { useEffect, useRef } from 'react';
import { Footer, Navbar, Product } from "../components";

const Products = () => {
  const componentMounted = useRef(true); // Store the mounted status using useRef

  useEffect(() => {
    if (componentMounted.current) {
      // Your logic here when the component is mounted
      console.log('Component mounted successfully!');
    }

    return () => {
      // Cleanup logic, set componentMounted to false on unmount
      componentMounted.current = false;
    };
  }, []); // Empty array means this runs only once on mount and cleanup on unmount

  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default Products;
