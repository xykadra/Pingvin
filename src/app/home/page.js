"use client";

import Link from "next/link";
import Navbar from "../components/navbar";
import ProductPage from "../components/product-page";
import { useState } from "react";


const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [cart, setCart] = useState([]);

    const addTocart = async (product) => {
        console.log("Adding to cart: ", product);
        setCart([...cart, product]);
    }

    console.log(cart);
    
    return (
        <div >
            <Navbar setSearchTerm={setSearchTerm} cart={cart} />
            <ProductPage searchTerm={searchTerm} onAddToCart={addTocart} />
        </div>

    );
}

export default HomePage;