import React from 'react'

const OrderSuccessfully = () => {
    return (
        <div className="">
            <div className="text-center font-bold text-2xl text-primary-color">
                <p>
                    Thank you for your order
                </p>
                <div className="inline-block h-[120px] w-[120px] overflow-hidden">
                    <img className="inline-block h-[150px] w-[150px] object-cover" src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif" alt=""/>
                </div>
                <div className="text-center">
                    <button className="btn-click border border-solid px-5 rounded-lg text-black hover:bg-primary-color hover:text-white">OK</button>
                </div>
            </div>
            <div className="max-w-4xl mx-auto my-3 bg-[#F8F8FA] rounded-lg">
                <div className="p-10 font-mono">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="flex flex-col">
                            <h2 className="text-3xl sm:py-5">Nguyen Anh</h2>
                            <span className="text-gray-500">091234569</span>
                        </div>

                        <div className="flex flex-col sm:justify-end sm:items-end">
                            <h2 className="text-3xl text-gray-500 sm:py-5">Receipt</h2>

                            <dl className="max-w-1/2">
                                <div className="grid grid-cols-2 items-end">
                                    <dt className="text-gray-500 ">
                                        Receipt number
                                    </dt>
                                    <dd className="text-right">
                                        RF-310205
                                    </dd>
                                </div>
                                <div className="grid grid-cols-2">
                                    <dt className="text-gray-500">
                                        Invoice number
                                    </dt>
                                    <dd className="text-right">
                                        100205
                                    </dd>
                                </div>
                                <div className="grid grid-cols-2">
                                    <dt className="text-gray-500">
                                        Date paid
                                    </dt>
                                    <dd className="text-right">
                                        Dec 14, 2016
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="text-lg">Address</h4>
                            <p className="text-gray-500">Address</p>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="text-lg">Note</h4>
                            <p className="text-gray-500">Khong co</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="">
                            <table className="min-w-full">
                                <thead className="text-bold">
                                    <tr>
                                        <th scope="col" className="text-left w-1/5 sm:px-2 py-4">
                                            Unit price
                                        </th>
                                        <th scope="col" className="text-right w-1/5 sm:px-2 py-4">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="sm:px-2 py-4">
                                            Subtotal
                                        </td>
                                        <td className="sm:px-2 py-4 text-right sub-total">
                                            $5000.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sm:px-2 py-4 bg-gray-50">
                                            Shipping
                                        </td>
                                        <td className="sm:px-2 py-4 text-right bg-gray-50">
                                            $5
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sm:px-2 py-4 bg-gray-50">
                                            Amount paid
                                        </td>
                                        <td className="sm:px-2 py-4 text-right bg-gray-50 render-total">
                                            $5000.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccessfully