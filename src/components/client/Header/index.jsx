import React from 'react'
import Menu from './Menu';
import SearchForm from './SearchForm';
import ActionAuth from './ActionAuth';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="py-2 px-[30px]">
                <nav className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <NavLink to="/" className="">
                                <img className="w-[130px] pt-[16px] pb-5" src="https://i.imgur.com/rKpDjIQ.png" alt="" /></NavLink>
                        </div>
                        <Menu />
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <SearchForm />
                        <ActionAuth />
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Header