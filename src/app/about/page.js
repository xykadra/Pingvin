"use client";

import React from 'react';
import Navbar from '../components/navbar';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
    const router = useRouter();

    // Replace with the actual latitude, longitude, and zoom level from your Google Maps link
    const latitude = 43.8423738;
    const longitude = 18.2750394;
    const zoomLevel = 17;


    const handleNavigation = () => {
        window.location.href = "https://www.google.com/maps/place/Knjižara+Pingvin/@43.8423776,18.2750394,17z/data=!3m1!4b1!4m6!3m5!1s0x4758cb66bf3ebc57:0x701115822277e78!8m2!3d43.8423738!4d18.2776143!16s%2Fg%2F11rfp4jmv0?entry=ttu";
    };

    const handleInquiry = () => {
        //Making email to me
        router.push('mailto: kadric681@gmail.com');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">About Pingvin</h1>
                <p className="text-lg text-gray-700">
                    Discover Pingvin, a unique bookstore that collaborates with Sarajevo Publishing
                    to bring you a curated selection of new books each school year. More than just a
                    place to find books, Pingvin is a literary haven with an inviting atmosphere,
                    offering a diverse range of genres to satisfy every reader.
                    With an enchanting ambiance of paper and ink,
                    Pingvin is not just a store but a community hub where book enthusiasts gather and celebrate the written word. Let the knowledgeable staff guide you through the literary treasures and immerse yourself in a world of endless imagination at Pingvin.
                </p>

                <div className="mt-8">
                    <p className="text-gray-600">
                        Pingvin is not just a platform; it's a community that celebrates diversity,
                        innovation, and connection. Explore our handpicked selection of products,
                        discover inspiring stories, and be part of a global network that values
                        creativity and authenticity.
                    </p>
                </div>

                {/* Google Maps Embed
                <div className="mt-8">

                    <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />

                </div> */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        onClick={handleNavigation}
                        className="bg-indigo-700 text-white px-4 py-2 rounded-full hover:bg-indigo-800 focus:outline-none focus:shadow-outline"
                    >
                        Take navigation to the store
                    </button>
                    <button
                        onClick={handleInquiry}
                        className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    >
                        Send Business Inquiry
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
