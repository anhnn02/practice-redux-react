import React, { useEffect } from 'react'
import { formatPrice } from '../../../utils/formatNumber';
import { useDispatch, useSelector } from 'react-redux'
import { getInvoiceDetail, updateStatusInvoice } from '../../../features/invoice/invoiceSlice'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';

const UserInvoiceDetail = () => {
    const { invoice, invoiceDetails } = useSelector(data => data.invoice.detailInvoice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()

    const cancelInvoice = () => {
        const invoiceUpdate = {
            status: {
                status: 4,
            },
            id: invoice._id
        }
        const toastrConfirmOptions = {
            onOk: () => {
                dispatch(updateStatusInvoice(invoiceUpdate))
                // const idUser = JSON.parse(localStorage.getItem('user')).user._id
                // navigate(`/user/${idUser}`)
                navigate("/")
            },
            onCancel: () => {}
        };
        toastr.confirm('Are you sure you want to cancel invoice?', toastrConfirmOptions);
    }

    useEffect(() => {
        dispatch(getInvoiceDetail(id));
    }, [])

    return (
        <>
            <main className="h-full overflow-y-auto">
                <div className="container px-6 mx-auto grid">
                    <div className="grid grid-cols-2 mt-2">
                        <h2 className=" text-2xl text-gray-700 :text-gray-200">
                            Detail Bill
                        </h2>
                        <div className="text-right">
                            {
                                (() => {
                                    if (invoice?.status === 0) {
                                        return (
                                            <div className="">
                                                <span
                                                    className="inline-block mr-2 px-2 py-1 text-sm rounded text-orange-800 font-normal bg-orange-100 ">Waiting for confirmation</span>
                                                <button className="px-1 py-1 text-sm text-red-800 font-normal bg-red-100 rounded" onClick={cancelInvoice}>Cancel</button>
                                            </div>
                                        )
                                    }
                                    if (invoice?.status === 1) {
                                        return (
                                            <div className="">
                                                <span
                                                    className="inline-block mr-2 px-2 py-1 text-sm rounded text-blue-800 font-normal bg-blue-100 ">Shipping</span>
                                            </div>
                                        )
                                    }
                                    if (invoice?.status === 2) {
                                        return (
                                            <div className="">
                                                <span
                                                    className="inline-block mr-2 px-2 py-1 text-sm rounded text-green-800 font-normal bg-green-100 ">Successfully</span>
                                            </div>
                                        )
                                    }
                                    if (invoice?.status === 3) {
                                        return (
                                            <div className="">
                                                <span
                                                    className="inline-block mr-2 px-2 py-1 text-sm rounded text-red-800 font-normal bg-red-200 ">Order canceled</span>
                                            </div>
                                        )
                                    }
                                    if (invoice?.status === 4) {
                                        return (
                                            <div className="">
                                                <span
                                                    className="inline-block mr-2 px-2 py-1 text-sm rounded text-red-800 font-normal bg-red-200 ">Cancel</span>
                                            </div>
                                        )
                                    }
                                })()
                            }

                        </div>
                    </div>

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
                                                                                    <p className="text-orange-800">{item.salePrice ? formatPrice(item.salePrice) : formatPrice(item.regularPrice)}</p>
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

export default UserInvoiceDetail