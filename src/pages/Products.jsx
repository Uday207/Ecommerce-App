import React, { useEffect, useRef } from 'react';
import { Footer, Navbar, Product } from "../components";

const Products = () => {
  const componentMounted = useRef(true); // useRef to persist value across renders

  useEffect(() => {
    // You can now safely update componentMounted.current without issues
    componentMounted.current = false; // Example update
  }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default Products;
