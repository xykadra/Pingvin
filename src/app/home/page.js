"use client";

import Link from "next/link";
import Navbar from "../components/navbar";
import ProductPage from "../components/product-page";
import { useState } from "react";
import { CartProvider } from "../components/CartContext";



const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [cart, setCart] = useState([]);

    const addTocart = async (product) => {
        console.log("Adding to cart: ", product);
        setCart([...cart, product]);
    }

    // console.log(cart);

    return (
        <CartProvider>
            <div >
                <Navbar setSearchTerm={setSearchTerm} cart={cart} />
                <ProductPage searchTerm={searchTerm} onAddToCart={addTocart} />
            </div>
        </CartProvider>
    );
}

export default HomePage;