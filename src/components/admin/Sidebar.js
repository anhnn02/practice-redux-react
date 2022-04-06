import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white :bg-gray-800 md:block flex-shrink-0">
            <div className="py-4 text-gray-500 :text-gray-400">
                <Link to="/"><img className="w-32 pl-5" src="https://i.imgur.com/YR2XB5I.png" alt="" /></Link>
                <ul className="mt-6">
                    <li className="relative px-6 py-1">
                        <NavLink className="nav-link-admin inline-flex items-center w-full text-sm text-gray-600 font-semibold transition-colors duration-150 hover:bg-purple-100 rounded p-2 :hover:text-gray-200 :text-gray-100"
                            to="/admin/dashboard">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                </path>
                            </svg>
                            <span className="ml-4">Dashboard</span>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="relative px-6 py-1">
                        <NavLink className="nav-link-admin inline-flex items-center w-full text-sm text-gray-600 font-semibold transition-colors duration-150 hover:bg-purple-100 rounded p-2 :hover:text-gray-200"
                            to="/admin/category-product">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                </path>
                            </svg>
                            <span className="ml-4">Category Product</span>
                        </NavLink>
                    </li>
                    <li className="relative px-6 py-1">
                        <NavLink className="nav-link-admin inline-flex items-center w-full text-sm text-gray-600 font-semibold transition-colors duration-150 hover:bg-purple-100 rounded p-2 :hover:text-gray-200"
                            to="/admin/category-news">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                </path>
                            </svg>
                            <span className="ml-4">Category News</span>
                        </NavLink>
                    </li>
                    <li className="relative px-6 py-1">
                        <NavLink className="nav-link-admin inline-flex items-center w-full text-sm text-gray-600 font-semibold transition-colors duration-150 hover:bg-purple-100 rounded p-2 :hover:text-gray-200"
                            to="/admin/product">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                                </path>
                            </svg>
                            <span className="ml-4">Product</span>
                        </NavLink>
                    </li>
                    <li className="relative px-6 py-1">
                        <NavLink className="nav-link-admin inline-flex items-center w-full text-sm text-gray-600 font-semibold transition-colors duration-150 hover:bg-purple-100 rounded p-2 :hover:text-gray-200"
                            to="/admin/news">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                            <span className="ml-4">News</span>
                        </NavLink>
                    </li>
                    <li className="relative px-6 py-1">
                        <NavLink className="nav-link-admin inline-flex items-center w-full text-sm text-gray-600 font-semibold transition-colors duration-150 hover:bg-purple-100 rounded p-2 :hover:text-gray-200"
                            to="/admin/bill">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                            <span className="ml-4">Bill</span>
                        </NavLink>
                    </li>
                    <li className="relative px-6 py-1">
                        <NavLink className="nav-link-admin inline-flex items-center w-full text-sm text-gray-600 font-semibold transition-colors duration-150 hover:bg-purple-100 rounded p-2 :hover:text-gray-200"
                            to="/admincharts.html">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                            <span className="ml-4">Statistic</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside >
    )
}

export default Sidebar