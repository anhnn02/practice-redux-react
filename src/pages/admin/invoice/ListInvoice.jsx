import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { formatPrice } from '../../../utils/formatNumber';
import { useDispatch, useSelector } from 'react-redux'
import { listInvoice, updateStatusInvoice } from '../../../features/invoice/invoiceSlice'
import { DataGrid } from '@mui/x-data-grid';
import { formatPrice } from '../../../utils/formatNumber'

const Invoice = () => {
    let [reRenderPage, setReRenderPage] = useState(0)
    const invoices = useSelector(data => data.invoice.value);
    const dispatch = useDispatch();

    const changeStatusInvoice = (id, status) => {
        const invoice = {
            status: {
                status: (status * 1)
            },
            id
        }
        dispatch(updateStatusInvoice(invoice))
        setReRenderPage(reRenderPage++)
    }
    useEffect(() => {
        dispatch(listInvoice());
        setReRenderPage(reRenderPage++)
    }, [reRenderPage])

    const columns = [
        { field: 'index', headerName: '#', width: 50 },
        {
            field: 'fullname',
            headerName: 'Full name',
            width: 160,
            editable: true,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone number',
            width: 160,
            editable: true,
            sortable: false,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 200,
            editable: true,
        },
        {
            field: 'note',
            headerName: 'Note',
            width: 100,
            editable: true,
        },
        {
            field: 'total',
            headerName: 'Total',
            width: 100,
            editable: true,
            renderCell(params) {
                return <span className="font-bold">
                    {formatPrice(params.row.total)}
                </span>
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
            renderCell(params) {
                return <div className="">
                    {
                        (() => {
                            if (params.row.status === 0) {
                                return (
                                    <select
                                        onChange={(e) => changeStatusInvoice(params.row.id, e.target.value)}
                                        className="form-select appearance-none block max-w-full w-36 px-1 py-1 text-sm text-orange-800 font-normal bg-orange-100 border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected value="0">Wait for confirmation</option>
                                        <option value="1">Shipping</option>
                                        <option value="2">Successfully</option>
                                        <option value="3">Cancel</option>
                                        <option value="4">Order canceled</option>
                                    </select>
                                )
                            }
                            if (params.row.status === 1) {
                                return (
                                    <select
                                        onChange={(e) => changeStatusInvoice(params.row.id, e.target.value)}
                                        className="form-select appearance-none block max-w-full w-36 px-1 py-1 text-sm text-blue-800 font-normal bg-blue-100 border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected value="1">Shipping</option>
                                        <option value="2">Successfully</option>
                                        <option value="3">Cancel</option>
                                        <option value="4">Order canceled</option>
                                    </select>

                                )
                            }
                            if (params.row.status === 2) {
                                return (
                                    <select
                                        onChange={(e) => changeStatusInvoice(params.row.id, e.target.value)}
                                        className="form-select appearance-none block max-w-full w-36 px-1 py-1 text-sm text-green-800 font-normal bg-green-100 border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option value="2">Successfully</option>
                                    </select>

                                )
                            }
                            if (params.row.status === 3) {
                                return (
                                    <select
                                        onChange={(e) => changeStatusInvoice(params.row.id, e.target.value)}
                                        className="form-select appearance-none block max-w-full w-36 px-1 py-1 text-sm text-red-800 font-normal bg-red-200 border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option value="3">Cancel</option>
                                    </select>

                                )
                            }
                            if (params.row.status === 4) {
                                return (
                                    <select
                                        onChange={(e) => changeStatusInvoice(params.row.id, e.target.value)}
                                        className="form-select appearance-none block max-w-full w-36 px-1 py-1 text-sm text-red-800 font-normal bg-red-200 border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option value="4">Order canceled</option>
                                    </select>
                                )
                            }
                        })()
                    }
                </div>
            }
        },
        {
            field: 'detail',
            headerName: 'View',
            sortable: false,
            renderCell(params) {
                // console.log("first", params)
                return <Link className=" items-center px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    to={`/admin/invoice/${params.id}/view`}><i className="bi bi-eye-fill"></i></Link>
            },
            width: 50
        },
    ];
    const newData = invoices.length > 0 && invoices?.map((item, index) => {
        // console.log(object);
        return {
            id: item._id,
            index: index + 1,
            fullname: item.fullname,
            phoneNumber: item.phoneNumber,
            address: item.address,
            note: item.note,
            total: item.total,
            status: item.status
        }
    });


    return (
        <>
            <div className="container px-6 grid grid-cols-2">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                    Invoices
                </h2>
            </div>
            <div style={{ height: 460, width: '100%', background: "white" }}>
                <DataGrid
                    width="100%"
                    rows={newData}
                    columns={columns}
                    pageSize={6}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div >
        </>
    )
}

export default Invoice