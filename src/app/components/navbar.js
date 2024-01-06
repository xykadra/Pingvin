// Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        console.log("Searchin for", searchTerm);
    }

    return (
        <>
            <div className="w-full h-20 bg-white sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">

                        <ul className={`hidden md:flex gap-x-6 text-black ${styles.navItems}`}>
                            <li>
                                <Link href="">
                                    <p>Products</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="src/app/pages/cart-page">
                                    <p>Cart</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <p>Logout</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center mx-auto">
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="border p-2 text-black"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                className="bg-black text-white px-4 py-2 rounded ml-5"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>

                        <div className="ml-auto">
                            <p className={styles.companyName}>Pingvin</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
