import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <>
            <div className="flex justify-between items-center flex-col h-screen py-6">
                <div className="auth-container m-auto">
                    <div className="px-24 max-w-full flex">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout