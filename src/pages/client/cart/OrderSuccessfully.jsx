import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccessfully = () => {
    return (
        <div className="">
            <div className="text-center font-bold text-2xl text-primary-color my-2">
                <p>
                    Thank you for your order
                </p>
                <div className="inline-block h-[120px] w-[120px] overflow-hidden">
                    <img className="inline-block h-[150px] w-[150px] object-cover" src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif" alt=""/>
                </div>
                <div className="text-center my-10">
                    <Link to="/categories/all/1" className="p-2 px-3 border-[1.5px] border-solid px-5 rounded text-secondary-color mx-2 trans-second text-lg hover:bg-primary-color hover:text-white hover:border-white">Continue shopping</Link>
                    <Link to="/profile/purchase" className="p-2 px-3 border-[1.5px] border-solid px-5 rounded text-secondary-color mx-2 trans-second text-lg hover:bg-primary-color hover:text-white hover:border-white">View your invoice</Link>
                </div>
            </div>
         
        </div>
    )
}

export default OrderSuccessfully