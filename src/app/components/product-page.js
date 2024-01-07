// ProductPage.js
"use client"
import React from "react";

const ProductPage = ({ searchTerm, onAddToCart }) => {


    
    const allBooks = [
        { id: 1, title: "Čitanka 2 - Udžbenik", price: 10, image: "/assets/book-1.jpg" },
        { id: 2, title: "Čitanka 2 - Radna sveska", price: 15, image: "/assets/book-2.jpg" },
        { id: 3, title: "Matematika 2 - Udžbenik", price: 15, image: "/assets/book-3.jpg" },
        { id: 4, title: "Matematika 3 - Udžbenik", price: 15, image: "/assets/book-4.jpg" },
        { id: 5, title: "Geografija 3 - Udžbenik", price: 15, image: "/assets/book-5.jpg" },
        { id: 6, title: "Naš jezik 3 - Udžbenik", price: 15, image: "/assets/book-6.jpg" },
        { id: 7, title: "Tjelesni i zdravstveni odgoj", price: 15, image: "/assets/book-7.jpg" },
    ];


    const filteredBooks = allBooks.filter((book) =>
        book.title.toLowerCase().includes((searchTerm).toLowerCase())
    );



    return (
        <div className="container mx-auto mt-8 z-0">
            <h1 className="text-3xl font-bold mb-4">Books For School</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredBooks.map((book) => (
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
                            onClick={() => onAddToCart(book)}
                            className="transition-transform transform motion-reduce:transition-none motion-reduce:transform-none hover:scale-105"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
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