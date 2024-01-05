import Link from "next/link";
import Navbar from "../components/navbar";
import ProductPage from "../components/product-page";



const HomePage = () => {
    return (
        <div >
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">You have been logged in</h1>
                <p className="text-gray-700">Welcome to the logged-in page!</p>
            </div>
            <ProductPage />
            
        </div>

    );
}

export default HomePage;