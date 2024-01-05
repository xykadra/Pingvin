// Navbar.js
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
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
