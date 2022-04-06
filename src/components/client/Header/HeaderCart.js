import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HeaderCart = (props: Props) => {
    return (
        <div className="relative">
            <button
                className="">
                <Link to="/cart"
                    // className="btn-cart-header bg-primary-15-color trans-second rounded-full py-[10px] px-3 hover:bg-primary-50-color"
                    className="py-[10px] px-3 rounded-full trans-second hover:bg-primary-15-color"
                >
                    <i className="bi bi-bag"></i>
                    <span className="absolute bg-primary-color w-[20px] rounded-full text-sm text-white -top-2 right-0">1</span>
                </Link>
            </button>
        </div>
    )
}

export default HeaderCart