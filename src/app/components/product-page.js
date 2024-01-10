// ProductPage.js
"use client"
import React, { useState, useContext, useEffect } from "react";
import { CartProvider, useCart } from "./CartContext";


const ProductPage = ({ searchTerm, onAddToCart }) => {

    const { addToCart } = useCart();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const res = await fetch('/api/books/');
            const books = await res.json();
            setBooks(books);
        }
        getBooks()
    }, []);

    // {
    //     return prevBooks.map((book) =>
    //         book.title.toLowerCase().includes((searchTerm).toLowerCase())
    // )

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    let bookElements = null;
    if (books) {
        const filteredBooks = books.filter((book) => (
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        console.log(filteredBooks)
        bookElements = filteredBooks.map((book) => (
            <div key={book.id} className="p-4">
                <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                <img
                    src={book.image}
                    alt={book.title}
                    className="mb-2 h-auto"
                    style={{ maxHeight: '300px' }}
                />
                <p>{book.price} KM</p>
                <button
                    onClick={() => handleAddToCart(book)}
                    className="transition-transform transform motion-reduce:transition-none motion-reduce:transform-none hover:scale-105"
                >
                    Add to Cart
                </button>
            </div>
        ))
    }
    

    const allBooks = [
        { id: 1, title: "Čitanka 2 - Udžbenik", price: 10, image: "/assets/book-1.jpg" },
        { id: 2, title: "Čitanka 2 - Radna sveska", price: 15, image: "/assets/book-2.jpg" },
        { id: 3, title: "Matematika 2 - Udžbenik", price: 15, image: "/assets/book-3.jpg" },
        { id: 4, title: "Matematika 3 - Udžbenik", price: 15, image: "/assets/book-4.jpg" },
        { id: 5, title: "Geografija 3 - Udžbenik", price: 15, image: "/assets/book-5.jpg" },
        { id: 6, title: "Naš jezik 3 - Udžbenik", price: 15, image: "/assets/book-6.jpg" },
        { id: 7, title: "Tjelesni i zdravstveni odgoj", price: 15, image: "/assets/book-7.jpg" },
    ];

    return (
        <div className="container mx-auto mt-8 z-0">
            <h1 className="text-3xl font-bold mb-4 ml-5">Books For School</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bookElements}
            </div>
            {/* 
            <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </div> */}
        </div>

    );
};

export default ProductPage;