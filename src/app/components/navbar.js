// Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

import { useRouter } from "next/navigation";
import { CartProvider } from "./CartContext";

const Navbar = ({ setSearchTerm, cart }) => {


    console.log("Content of Cart", cart);
    const serializedCart = JSON.stringify(cart);

    const [searchTermLocal, setSearchTermLocal] = useState("");

    const handleSearch = (event) => {
        const input = event.target.value;
        setSearchTerm(input);
        setSearchTermLocal(input);

        // console.log("Searching for:", searchTermLocal);
        // setSearchTerm(searchTermLocal);
    }



    return (
        <>
            <div className="w-full h-20 bg-white sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <ul className={`hidden md:flex gap-x-6 text-black ${styles.navItems}`}>
                            <li>
                                <Link href="/home">
                                    <p>Products</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>About</p>
                                </Link>
                            </li>


                            <li>
          
                                <Link href="/cart">
                                    <p>Selfdestruction</p>
                                </Link>
                    
                            </li>
                            <li>
                                <Link href="/">
                                    <p>Logout</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center mx-auto">
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="border p-2 text-black"
                                value={searchTermLocal}
                                onChange={(e) => handleSearch(e)}
                            />
                            {/* <button
                                className="bg-black text-white px-4 py-2 rounded ml-5"
                                onClick={handleSearch}
                            >
                                Search
                            </button> */}
                        </div>

                        <div className="ml-auto mr-5">
                            <p className={styles.companyName}>Pingvin</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;