import React from 'react'
import { Link, NavLink } from 'react-router-dom';



const AsideCategory = () => {
    const categories = [
        { name: "Test redux", regularPrice: "100", img: "https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", desc: "abscjhasbjsdasascsa", size: "36, 37, 38", categoryPro: "624b16b66fb90d62cd866a2c" },
        { name: "Test redux", regularPrice: "100", img: "https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", desc: "abscjhasbjsdasascsa", size: "36, 37, 38", categoryPro: "624b16b66fb90d62cd866a2c" }

    ]
    return (
        <aside className="rounded-lg bg-white py-5 px-3 sticky top-[10px]">
            <div className="shop__category-group">
                <span className="ff-2">Top</span>
                <ul className="category-item__list p-0">
                    <li className="category-item__item list-none my-1 mx-0"> <Link to=""
                        className="category-link-active inline-block w-full py-[6px] px-[5px] rounded-[5px] trans-second hover:bg-primary-15-color hover:text-primary-color">Trending
                    </Link> </li>
                    <li className="category-item__item list-none my-1 mx-0"> <Link to=""
                        className="inline-block w-full py-[6px] px-[5px] rounded-[5px] trans-second hover:bg-primary-15-color hover:text-primary-color">
                        Mostest view </Link> </li>
                </ul>
            </div>
            <div className="shop__category-group">
                <span className="ff-2">Category</span>
                <ul className="category-item__list p-0">
                    {categories.map((item) => {
                        return <li className="category-item__item list-none my-1 mx-0"> <NavLink to={`/categories/${item.slug}`}
                            className="cate-link inline-block w-full py-[6px] px-[5px] rounded-[5px] trans-second hover:bg-primary-15-color hover:text-primary-color">
                            {item.name} </NavLink> </li>
                    })}

                </ul>
            </div>
            <div className="shop__category-group">
                <span className="ff-2">Filter</span>
                <div className="my-2">
                    {/* <input
                    className="w-[60px] bg-gray-lighter text-sm border-none radius-secondary p-1 outline-none text-center filter-input--start"
                    type="text">
                    <span>-</span>
                    <input
                      className="w-[60px] bg-gray-lighter text-sm border-none radius-secondary p-1 outline-none text-center filter-input--end"
                      type="text"> $ */}
                    <input className="filter-range w-full block" type="range" min="0" max="1000" />
                </div>
            </div>
        </aside>
    )
}

export default AsideCategory