import React, { useEffect, useRef } from 'react';
import { Footer, Navbar, Product } from "../components";

const Products = () => {
  const componentMounted = useRef(true); // Initialize a ref to track the mounted state

  useEffect(() => {
    console.log('Component mounted successfully!'); // Your logic when component mounts

    return () => {
      componentMounted.current = false; // Cleanup when component unmounts
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default Products;
