"use client";
// pages/cart.js

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";





const CartPage = () => {
    const router = useRouter();

    const serializedCart = router.query;
    const cart = JSON.parse(serializedCart);

    console.log('Some data', cart);
    const parsedCart = data ? JSON.parse(decodeURIComponent(cart)) : [];

    const calculateTotal = () => {
        return parsedCart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>

            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
                <ul>
                    {parsedCart.map((item) => (
                        <li key={item.id} className="mb-4 border p-4">
                            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                            <p>{item.price} KM</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-4">
                    <p className="text-xl font-bold">Total: {calculateTotal()} KM</p>
                </div>
            </div>
        </div>
    );
};

export default CartPage;