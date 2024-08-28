"use client";

import { useState } from "react";

import Header from "@/components/ui/header";
import Banner from "@/components/ui/banner";
import WhyUs from "@/components/ui/why-us";
import Footer from "@/components/ui/footer";
import Reviews from "@/components/ui/what-customer-says";
import Products from "@/components/ui/Products/Products";

export default function Component() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const products = [
    {
      id: 1,
      name: "Countertop Water Filter",
      description: "Compact and efficient",
      price: 49.99,
      imgUrl: "https://example.com/images/countertop-water-filter.jpg",
    },
    {
      id: 2,
      name: "Under-Sink Water Filter",
      description: "Discreet and long-lasting",
      price: 99.99,
      imgUrl: "https://example.com/images/under-sink-water-filter.jpg",
    },
    {
      id: 3,
      name: "Whole-House Water Filter",
      description: "Comprehensive filtration",
      price: 299.99,
      imgUrl: "https://example.com/images/whole-house-water-filter.jpg",
    },
    {
      id: 4,
      name: "Portable Water Filter Bottle",
      description: "On-the-go filtration",
      price: 29.99,
      imgUrl: "https://example.com/images/portable-water-filter-bottle.jpg",
    },
    {
      id: 5,
      name: "Reverse Osmosis System",
      description: "Advanced water purification",
      price: 399.99,
      imgUrl: "https://example.com/images/reverse-osmosis-system.jpg",
    },
    {
      id: 6,
      name: "Faucet Water Filter",
      description: "Easy installation",
      price: 39.99,
      imgUrl: "https://example.com/images/faucet-water-filter.jpg",
    },
    {
      id: 7,
      name: "Shower Head Water Filter",
      description: "Removes chlorine and impurities",
      price: 59.99,
      imgUrl: "https://example.com/images/shower-head-water-filter.jpg",
    },
    {
      id: 8,
      name: "Pitcher Water Filter",
      description: "Convenient and affordable",
      price: 24.99,
      imgUrl: "https://example.com/images/pitcher-water-filter.jpg",
    },
    {
      id: 9,
      name: "Undersink Reverse Osmosis System",
      description: "Advanced water purification",
      price: 499.99,
      imgUrl: "https://example.com/images/undersink-reverse-osmosis-system.jpg",
    },
    {
      id: 10,
      name: "Whole-House Sediment Filter",
      description: "Removes dirt, rust, and particles",
      price: 149.99,
      imgUrl: "https://example.com/images/whole-house-sediment-filter.jpg",
    },
  ];
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Banner />
        <WhyUs />
        <Products
          paginate={paginate}
          currentProducts={currentProducts}
          currentPage={currentPage}
          products={products}
          productsPerPage={productsPerPage}
        />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
