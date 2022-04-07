import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarUser from '../../components/user/SidebarUser'

const UserProfileLayout = () => {
    return (
        <>
            <div className="grid grid-cols-5 gap-3">
                <SidebarUser />
                <div class="col-span-4">
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default UserProfileLayout
