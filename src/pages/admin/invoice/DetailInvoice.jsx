import React, { useEffect } from 'react'
import { formatPrice } from '../../../utils/formatNumber';
import { useDispatch, useSelector } from 'react-redux'
import { getInvoiceDetail } from '../../../features/invoice/invoiceSlice'
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

const InvoiceDetail = () => {
    const {invoice, invoiceDetails} = useSelector(data => data.invoice.detailInvoice);
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getInvoiceDetail(id));
        console.log(invoiceDetails);
    }, [])

    return (
        <>
            <main className="h-full overflow-y-auto">
                <div className="container px-6 mx-auto grid">
                    <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                        Detail Bill
                    </h2>
                    {/* <div className="flex justify-between items-center">
                    </div> */}
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="max-w-7xl mx-auto py-6 ">
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="max-w-screen-xl mx-auto py-6 ">
                                            <div className="flex flex-col">
                                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                            <div className="mx-auto" >
                                                                <div className="flex items-center justify-between mb-8 p-3">
                                                                    <div>
                                                                        <span className="text-2xl">ID Invoice #{invoice?._id} </span><br />
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <img src="https://i.imgur.com/rKpDjIQ.png" width="200" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-between mb-8 px-3">
                                                                    <div>
                                                                        Name: <b>{invoice?.fullname}</b> <br />
                                                                        Address: <b>{invoice?.address}</b> <br />
                                                                        Phone: <b>{invoice?.phoneNumber}</b><br />
                                                                        Date: <b>{invoice?.createdAt}</b><br />
                                                                        Note: {(invoice?.note === null) ? <i>(Nothing)</i> : <b>{invoice?.note}</b>}<br />
                                                                    </div>
                                                                    <div className="text-right">
                                                                        Anh's bee store<br />
                                                                        Street 12<br />
                                                                        10000 City<br />
                                                                        beestore@yoursite.com
                                                                    </div>
                                                                </div>
                                                                <div className="border border-t-2 border-gray-200 px-3"></div>
                                                                <table className="min-w-full divide-y ">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col" width="200" className>Title</th>
                                                                            <th scope="col">Img</th>
                                                                            <th scope="col">Price</th>
                                                                            <th scope="col">Quantity</th>
                                                                            <th scope="col">Total</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                                        {invoiceDetails?.map((item, index) => (
                                                                            <tr key={index}>
                                                                                <td className="px-6 py-4 whitespace-nowrap ">
                                                                                    <span className="font-bold">{item.name}</span>
                                                                                    <p>Size: {item.size}</p>
                                                                                </td>
                                                                                <td className="text-center px-6 py-4 whitespace-nowrap">
                                                                                    <img className="inline-block" src={item.img} width="100" alt="" />
                                                                                </td>
                                                                                <td className="text-center px-6 py-4 whitespace-nowrap">
                                                                                    <p className="text-orange-800">{item.salePrice ? formatPrice(item.salePrice) :  formatPrice(item.regularPrice)}</p>
                                                                                    <p className="line-through">{item.salePrice ? formatPrice(item.regularPrice) : ""}</p>
                                                                                </td>
                                                                                <td className="text-center px-6 py-4 whitespace-nowrap">
                                                                                    {item.quantity}
                                                                                </td>
                                                                                <td className="text-center px-6 py-4 whitespace-nowrap font-bold text-orange-800 ">
                                                                                    {formatPrice(item.total)}
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>

                                                                <div className="flex justify-between items-center mb-2 px-3 border-t py-2">
                                                                    <div className="text-2xl leading-none"><span className="">Total</span>:</div>
                                                                    <div className="text-2xl text-right font-bold">{formatPrice(invoice?.total)}</div>
                                                                </div>
                                                                <div className="flex mb-8 justify-end px-3">
                                                                    <div className="text-right w-1/2 px-0 leading-tight">
                                                                        <small className="text-xs">Nullam auctor, tellus sit amet eleifend interdum, quam nisl luctus quam, a
                                                                            tincidunt
                                                                            nisi eros ac dui. </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default InvoiceDetail