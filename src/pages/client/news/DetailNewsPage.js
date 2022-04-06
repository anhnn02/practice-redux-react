import React from 'react'
import Header from '../../../components/client/Header'
import Footer from '../../../components/client/Footer'
import CommentNews from '../../../components/client/news/CommentNews'

function DetailNewsPage() {
    return (
        <>
            <main>
                <div className="max-w-screen-xl m-auto">
                    <div className="text-center">
                        <h2 className="font-bold text-gray-darker">Trending fashion</h2>
                        <h3 className="text-3xl inline-block max-w-5xl m-2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <img className="max-w-7xl m-auto w-full h-[380px] object-cover radius-primary"
                            src="https://cdn.dribbble.com/users/508142/screenshots/15397516/media/3b2ca2e15104af8d2c6f65362c9f8a76.jpg?compress=1&resize=1600x1200&vertical=top"
                            alt="" />
                    </div>
                    <div className="max-w-6xl m-auto my-10 flex">
                        <div className="w-2/5 mr-8">
                            <div className="flex justify-between">
                                <span className="font-bold">Author: Anh Ann</span>
                                <span className="font-bold">1 - 1 - 2022</span>
                            </div>
                           <CommentNews/>
                        </div>
                        <div className="w-3/5">
                            <div className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum
                                dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum
                                dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum
                                dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod
                                temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem
                                ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do
                                eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                temporLorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do
                                eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do
                                eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor
                            </div>
                            <div className="text-right text-xl">
                                <a href="" className="text-primary-color pl-2"><i className="bi bi-instagram"></i></a>
                                <a href="" className="text-primary-color pl-2"><i className="bi bi-twitter"></i></a>
                                <a href="" className="text-primary-color pl-2"><i className="bi bi-facebook"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DetailNewsPage