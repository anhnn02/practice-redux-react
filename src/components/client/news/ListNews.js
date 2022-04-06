import React from 'react'

const ListNews = () => {
    return (
        <div className="all-news max-w-6xl m-auto mt-12">
            <ul className="catalog text-center">
                <li className="item inline-block mr-6 border-b-2 border-primary-color text-xl">Fashion dailly</li>
                <li className="item inline-block mr-6 border-b-2 border-primary-color text-xl">Trending</li>
            </ul>
            <div className="grid grid-cols-3 gap-10 mt-8 mb-8">
                <article>
                    <div className="img-item-blog relative duration-700">
                        <a href=""><img className="max-w-full w-full h-72 object-cover radius-secondary" src="https://cdn.dribbble.com/users/2502549/screenshots/15715521/media/129015a26edbcf686920f59131c686fd.png?compress=1&resize=1600x1200&vertical=top" alt="" /></a>
                        <a href="#" className="text-read w-full h-full absolute top-0 rounded trans-second">
                            <button className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-5 rounded hover:visible">Read</button>
                        </a>
                    </div>
                    <div className="text">
                        <h3 className="p-2 text-lg font-bold">
                            <a href="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                        </h3>
                        <div className="copyright text-gray-darker px-2">
                            <span>Anh | </span>
                            <span>1 - 1 - 2022</span>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="img-item-blog relative duration-700">
                        <a href=""><img className="max-w-full w-full h-72 object-cover radius-secondary" src="https://cdn.dribbble.com/users/2502549/screenshots/15715521/media/129015a26edbcf686920f59131c686fd.png?compress=1&resize=1600x1200&vertical=top" alt="" /></a>
                        <a href="#" className="text-read w-full h-full absolute top-0 rounded trans-second">
                            <button className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-5 rounded hover:visible">Read</button>
                        </a>
                    </div>
                    <div className="text">
                        <h3 className="p-2 text-lg font-bold">
                            <a href="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                        </h3>
                        <div className="copyright text-gray-darker px-2">
                            <span>Anh | </span>
                            <span>1 - 1 - 2022</span>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="img-item-blog relative duration-700">
                        <a href=""><img className="max-w-full w-full h-72 object-cover radius-secondary" src="https://cdn.dribbble.com/users/2502549/screenshots/15715521/media/129015a26edbcf686920f59131c686fd.png?compress=1&resize=1600x1200&vertical=top" alt="" /></a>
                        <a href="#" className="text-read w-full h-full absolute top-0 rounded trans-second">
                            <button className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-5 rounded hover:visible">Read</button>
                        </a>
                    </div>
                    <div className="text">
                        <h3 className="p-2 text-lg font-bold">
                            <a href="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                        </h3>
                        <div className="copyright text-gray-darker px-2">
                            <span>Anh | </span>
                            <span>1 - 1 - 2022</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default ListNews