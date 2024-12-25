import React, { useEffect, useRef } from 'react';
import { Footer, Navbar, Product } from "../components";

const Products = () => {
  const componentMounted = useRef(true); // Using useRef to persist value across renders

  useEffect(() => {
    // Your effect logic can go here
    // For example:
    if (componentMounted.current) {
      // Safe to perform actions that should only happen once
      console.log('Component mounted successfully!');
    }

    return () => {
      // Cleanup when component unmounts
      componentMounted.current = false;
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default Products;
