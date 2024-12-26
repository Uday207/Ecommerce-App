import React, { useEffect, useRef } from 'react';
import { Footer, Navbar, Product } from "../components";

const Products = () => {
  const componentMounted = useRef(null); // Initialize a ref to track the mounted state

  useEffect(() => {
    componentMounted.current = true; // Set to true when the component is mounted
    console.log('Component mounted successfully!'); // Your logic when the component mounts

    return () => {
      componentMounted.current = false; // Set to false when the component unmounts
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
