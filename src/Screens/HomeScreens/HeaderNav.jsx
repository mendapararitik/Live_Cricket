import React, { useState, useEffect } from 'react'
import logo from "../Assets/cricket_logo.png"
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { database } from '../BackEnd/firebaseConfig';


function HeaderNav() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const unsubscribe = database.onAuthStateChanged(user => {
            if (user) {
                const emailParts = user.email.split('@');
                const username = emailParts[0];
                setUserName(username);
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, []);



    const handleLogout = () => {
        signOut(database).then(val => {
            setIsLoggedIn(false);
            navigate('/')
        })
    }


    return (
        <nav className="" style={{ backgroundColor: "rgb(178 26 83 / 83%)" }}>
            <div className="max-w-full px-5 flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img className="h-12 w-auto" src={logo} alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Live Cricket</span>
                </a>

                <button
                    onClick={toggleMobileMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-50 hover:text-blue-300 focus:outline-none"
                    aria-controls="navbar-default"
                    aria-expanded={isMobileMenuOpen ? 'true' : 'false'}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#fcfcfc" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {isLoggedIn && (
                            <>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white  md:p-0"> <span className='text-white font-extrabold mr-2 py-2'>Welcome to :</span> {userName}</a>
                                </li>

                                <li onClick={handleLogout}>
                                    <a href="#" className="block py-2 px-3 text-gray-100 hover:bg-pink-600 md:hover:shadow-none hover:shadow hover:text-white md:hover:bg-transparent border-transparent md:border-b-2 md:hover:border-pink-800 md:hover:text-pink-200 md:p-0">LogOut</a>
                                </li>
                            </>
                        )}
                        {!isLoggedIn && (
                            <>
                                <li>
                                    <Link to="/" className="block py-2 px-3 text-gray-100 hover:bg-pink-600 md:hover:shadow-none hover:shadow hover:text-white md:hover:bg-transparent rounded-none border-transparent md:border-b-2 md:hover:border-pink-800 md:hover:text-pink-200 md:p-0">Home</Link>
                                </li>
                                <li>
                                    <Link to="/services" className="block py-2 px-3 text-gray-100 hover:bg-pink-600 md:hover:shadow-none hover:shadow hover:text-white md:hover:bg-transparent rounded-none border-transparent md:border-b-2 md:hover:border-pink-800 md:hover:text-pink-200 md:p-0">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="block py-2 px-3 text-gray-100 hover:bg-pink-600 md:hover:shadow-none hover:shadow hover:text-white md:hover:bg-transparent rounded-none border-transparent md:border-b-2 md:hover:border-pink-800 md:hover:text-pink-200 md:p-0">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="block py-2 px-3 text-gray-100 hover:bg-pink-600 md:hover:shadow-none hover:shadow hover:text-white md:hover:bg-transparent rounded-none border-transparent md:border-b-2 md:hover:border-pink-800 md:hover:text-pink-200 md:p-0">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderNav