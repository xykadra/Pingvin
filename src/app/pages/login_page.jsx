"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function LoginPage() {

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });


    const [showPasswordErr, setShowPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.success) {
                console.log('Login successful');
                router.push('./pages/home_page');
            } else {
                setShowPasswordError(true);
                setErrorMessage(result.mesage);
                console.log('Login failed:', result.message);
            }
        } catch (error) {
            setShowPasswordError(true);
            setErrorMessage('Error during login. Please try again.');
            console.error('Error during login:',);
        }
    };


    const handleClosePopup = () => {
        setShowPasswordError(false);
        setLoginData({
            username: '',
            password: '',
        });
    }
    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <div className="max-w-md w-full">
                <div className="flex justify-center">
                    <p className="text-lg font-mono font-bold">Knjizara Pingvin</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4 ">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={loginData.username}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                style={{ color: 'black' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleInputChange}
                                onKeyDown={handleEnterKeyPress}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                style={{ color: 'black' }}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            {showPasswordErr && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
                        <p className="text-black font-semibold mb-2">Username or Password is wrong</p>
                        <button
                            onClick={handleClosePopup}
                            className="bg-black text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}