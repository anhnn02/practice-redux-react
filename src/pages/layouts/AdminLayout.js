import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAdmin from '../../components/admin/Nav'
import Sidebar from '../../components/admin/Sidebar'

const AdminLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 :bg-gray-900">
        <Sidebar />
        {/* <div x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
              x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
              x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
              x-transition:leave-end="opacity-0"
              className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
         */}
        <div className="flex flex-col flex-1 w-full">
          <NavAdmin />
          <main className="h-full overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default AdminLayout