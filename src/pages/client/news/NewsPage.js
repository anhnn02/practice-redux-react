import React from 'react'
import Footer from '../../../components/client/Footer'
import Header from '../../../components/client/Header'
import ListNews from '../../../components/client/news/ListNews'

const NewsPage = () => {
    return (
        <>
            <div className="m-auto">
                {/* <div style={{"background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v935-aum-16-a-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8caf042e99ffe0f1c945282686015d7b')"}} */}
                <div
                    className="bg-no-repeat bg-center bg-cover text-center mb-20 py-10">
                    <h4 className="text-blue-800">Dirodi Entertaining</h4>
                    <h2 className="text-3xl text-secondary-color font-bold">News</h2>
                    <span className="inline-block w-96 text-sm text-gray-darker">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, temporibus distinctio!
                    </span>
                </div>
                <article className="max-w-6xl m-auto new grid grid-cols-2 gap-8">
                    <div className="img">
                        <a href="/news/1"><img className="max-w-full w-full h-96 object-cover radius-secondary" src="https://cdn.dribbble.com/users/2502549/screenshots/15715521/media/129015a26edbcf686920f59131c686fd.png?compress=1&resize=1600x1200&vertical=top" alt="" /></a>
                    </div>
                    <div className="new-text flex flex-col justify-between">
                        <span className="max-w-[60px] py-[3px] px-3 radius-secondary bg-new-item-color">New</span>
                        <h3 className="text-2xl font-bold my-3">
                            <a href="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                        </h3>
                        <p className="desc text-gray-darker mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor  sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor  sed do eiusmod temporLorem ipsum dolor sit amet.</p>
                        <p className="copyright text-gray-darker">
                            <span>Anh |</span>
                            <span>1 - 1 - 2022</span>
                        </p>
                    </div>
                </article>
                <ListNews/>
            </div>
        </>
    )
}

export default NewsPage