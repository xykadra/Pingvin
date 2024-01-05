
import Navbar from "../components/navbar";

const CartPage = () => {
    return (
        <div >
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">You are now on cart page</h1>
                <p className="text-gray-700">Welcome to the logged-in page!</p>
            </div>
        </div>

    );
}

export default CartPage;