import React, { useState, useEffect } from "react";

import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';


function handleLogout() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userEmail");
        console.log("User logged out successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
}

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const state = useSelector(state => state.handleCart)

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        setIsLoggedIn(!!email);
      }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> ShopNesta</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    
                    {isLoggedIn && (
                        <>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2">
                            <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
                        </NavLink>
                        <button className="btn btn-outline-dark m-2" onClick={handleLogout}>
                            <i className="fa fa-sign-out-alt mr-1"></i> Logout
                        </button>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                        <NavLink to="/login" className="btn btn-outline-dark m-2">
                            <i className="fa fa-sign-in-alt mr-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2">
                            <i className="fa fa-user-plus mr-1"></i> Register
                        </NavLink>
                        </>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default Navbar