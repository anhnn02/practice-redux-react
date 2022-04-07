import React from 'react'
import { NavLink} from 'react-router-dom';

const Menu = () => {
    return (
       
            <ul className="ml-10">
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">Home</NavLink>
                </li>
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/categories/all/1"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">Shop</NavLink>
                </li>
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/news"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">News</NavLink>
                </li>
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/about"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">About</NavLink>
                </li>
                <li className="inline-block pr-[30px] duration-300 ">
                    <NavLink to="/contact"
                        className="menu-item-link content-none pb-2 pt-2 trans-second ">Contact</NavLink>
                </li>
            </ul>
    )
}

export default Menu