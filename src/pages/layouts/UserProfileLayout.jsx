import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarUser from '../../components/user/SidebarUser'

const UserProfileLayout = () => {
    return (
        <>
            <div><h2 className="text-center p-3 text-3xl text-orange-800 font-bold ">Profile</h2></div>
            <div className="max-w-7xl w-full m-auto grid grid-cols-5 gap-2 my-3">
                <SidebarUser />
                <div className="col-span-4 border-2 border-gray-200 rounded-lg p-5 ">
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default UserProfileLayout
