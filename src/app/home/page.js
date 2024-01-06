import Link from "next/link";
import Navbar from "../components/navbar";
import ProductPage from "../components/product-page";



const HomePage = () => {
    return (
        <div >
            <Navbar />
            
            <ProductPage />
        </div>
    );
}

export default HomePage;