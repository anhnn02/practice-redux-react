import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/client/Footer'
import Header from '../../components/client/Header'

const WebsiteLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default WebsiteLayout