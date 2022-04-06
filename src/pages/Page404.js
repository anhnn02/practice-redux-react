import React from 'react'
import { NavLink } from 'react-router-dom'

const Page404 = () => {
    return (
        <div className="h-screen flex">
            <div className="container p-[50px] m-auto">
                <div className="text-center w-[200px]">
                    <img src="./asset/images/Fashion_logo_main1.png" className="section-404__img" alt="" />
                </div>
                <div className="text-center">
                    <span className="inline-block text-6xl mt-7 mx-0 mb-3">40<span className="text-primary-color">4</span></span>
                    <h3 className="text-2xl text-gray-600 font-bold">PAGE NOT FOUND</h3>
                    <span className="text-lg text-gray-600 my-3 mx-0 block">We can’t find the page that you’re looking for</span>
                    <NavLink className="border py-2 px-3 rounded-sm" to="/">GO HOME
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </NavLink>
                    <img src="./asset/images/undraw_Alert_re_j2op.png" alt="" className="img-404" />
                </div>
            </div>
        </div>
    )
}

export default Page404