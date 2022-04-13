import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { isAuthenticate } from '../../../utils/localstorage'

const SidebarUser = () => {
    let userInfo
    if (isAuthenticate()) {
        const { user } = isAuthenticate();
        userInfo = user
    }
    return (
        <>
            <div className="">
                <div className="text-center">
                    <img className="img-responsive w-20 h-20 object-cover inline-block rounded-full" src="https://image.thanhnien.vn/w660/Uploaded/2022/bzivoxbp/2021_01_25/rose_qnem.jpg" alt="" />
                    <span className="block mt-2 font-bold">{userInfo.name}</span>
                    <span className="block text-gray-darker">{userInfo.email}</span>
                </div>
                <div className="flex my-3">
                    <div className="m-auto">
                        <ul>
                            <li >
                                <NavLink to="/profile/user" className="profile-item-link py-2 hover:text-orange-600"> <i className="bi bi-person inline-block w-6"></i>Profile</NavLink>
                            </li>
                            <li >
                                <NavLink to="/profile/purchase" className="profile-item-link py-2 hover:text-orange-600"> <i className="bi bi-receipt inline-block w-6"></i>Purchase</NavLink>
                            </li>
                            <li >
                                <NavLink to="/profile/change-password" className="profile-item-link py-2 hover:text-orange-600"> <i className="bi bi-file-lock inline-block w-6"></i>Change password</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarUser
