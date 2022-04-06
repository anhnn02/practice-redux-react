import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="max-w-full text-center p-6 border-t border-gray-200 mt-[1px] bg-white">
                <div className="mb-2">
                    <img className="max-w-full w-40 inline-block" src="https://i.imgur.com/YR2XB5I.png" alt="" />
                </div>
                <ul>
                    <li
                        className="text-xl text-gray-primary font-bold inline-block py-2 px-4 trans-second hover:text-secondary-color">
                        <NavLink to="/">Home</NavLink></li>
                    <li
                        className="text-xl text-gray-primary font-bold inline-block py-2 px-4 trans-second hover:text-secondary-color">
                        <NavLink to="/shop">Shop</NavLink></li>
                    <li
                        className="text-xl text-gray-primary font-bold inline-block py-2 px-4 trans-second hover:text-secondary-color">
                        <NavLink to="/news">News</NavLink></li>
                    <li
                        className="text-xl text-gray-primary font-bold inline-block py-2 px-4 trans-second hover:text-secondary-color">
                        <NavLink to="/contact">Contact</NavLink></li>
                    <li
                        className="text-xl text-gray-primary font-bold inline-block py-2 px-4 trans-second hover:text-secondary-color">
                        <NavLink to="#">Help</NavLink></li>
                </ul>
                <div className="pb-4">
                    <NavLink to="" className="text-xl text-gray-primary px-4 trans-second hover:text-secondary-color"><i
                        className="bi bi-instagram"></i></NavLink>
                    <NavLink to="" className="text-xl text-gray-primary px-4 trans-second hover:text-secondary-color"><i
                        className="bi bi-twitter"></i></NavLink>
                    <NavLink to="" className="text-xl text-gray-primary px-4 trans-second hover:text-secondary-color"><i
                        className="bi bi-facebook"></i></NavLink>
                </div>
                <div className="">
                    <span> &copy; 2021 Bee Store. All rights reserved</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer