// ProductPage.js
"use client"
import React from "react";
import { useState } from "react";

const ProductPage = () => {
    const [cart, setCart] = useState([]);

    const addToCart = async (product) => {
        try {

            const response = await fetch('http://localhost:3001/api/addToCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product }),
            });


            const data = await response.json();


            if (data.success) {
                console.log("Adding to cart: ", product);
                setCart([...cart, product]);
            } else {
                console.error('Failed to add to cart:', data.message);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const books = [
        { id: 1, title: "Book 1", price: 10 },
        { id: 2, title: "Book 2", price: 15 },
        { id: 2, title: "Book 2", price: 15 },
        { id: 2, title: "Book 2", price: 15 },
        { id: 2, title: "Book 2", price: 15 },
        { id: 2, title: "Book 2", price: 15 },
        { id: 2, title: "Book 2", price: 15 },

    ];

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Books for Kids</h1>
            <div className="grid grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="border p-4">
                        <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                        <p>{book.price} KM</p>
                        <button onClick={() => addToCart(book)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ProductPage;
