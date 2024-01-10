// pages/cart.js
"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "../components/CartContext";

const CartPage = () => {
    const {cart} = useCart();

    return (

        <div>
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="mb-4 border p-4">
                            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                            <p>{item.price} KM</p>
                        </li>
                    ))}
                </ul>
                {/* 
                <div className="mt-4">
                    <p className="text-xl font-bold">Total: {calculateTotal()} KM</p>
                </div>
                */}
            </div>
        </div>


    );
};

export default CartPage;
