import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [product, setProduct] = useState([]); // State initialized to an empty array
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    axios
      .get(`https://ecommerce-ypsz.onrender.com/product`)
      .then((response) => {
        setProduct(response.data.data || []); // Ensure we set an empty array if data is undefined
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Stop loading after API call is complete
      });
  }, []);

  const latestProducts = Array.isArray(product) ? product.slice(0, 3) : []; // Fallback to an empty array if product is not an array

  if (loading) {
    return <div>Loading...</div>; // Optional loading state display
  }

  return (
    <div className="p-4 max-w-[1300px] mx-auto my-16">
      <div className="hero-content text-center mb-24">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-teal-700">codeteria</span>
          </h1>
          <p className="py-6">
            We offer the high quality online courses for programming and website
            templates you can buy.
          </p>
          <a href="/shop" className="btn btn-accent mt-4">
            Shop
          </a>
        </div>
      </div>
      
      <ProductCard product={latestProducts} />
    </div>
  );
}

export default Home;
