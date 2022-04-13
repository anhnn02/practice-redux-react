import React, { useEffect, useState } from 'react'
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInvoice } from '../../../features/user/userSlice';
import { isAuthenticate } from '../../../utils/localstorage';
import { formatPrice } from '../../../utils/formatNumber';
import { getInvoiceDetail } from '../../../features/invoice/invoiceSlice';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { read } from '../../../api/user';

const Order = () => {
    const [user, setUser] = useState();
    const [invoices, setInvoice] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuthenticate()) {
            const userLocal = isAuthenticate()
            const id = userLocal.user._id

            const getUserInfo = async () => {
                const { data } = await read(id)
                setUser(data.user)
                setInvoice(data.invoices.reverse())
            }
            getUserInfo()
        }
    }, [])

    const columns = [
        { field: 'index', headerName: '#', width: 50 },
        {
            field: 'fullname',
            headerName: 'Full name',
            width: 140,
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
            field: 'createdAt',
            headerName: 'Date time',
            width: 140,
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
            width: 160,
            editable: true,
            renderCell(params) {
                return <div className="">
                    {
                        (() => {
                            if (params.row.status === 0) {
                                return (
                                    <span className="form-select appearance-none block w-full px-1 py-1 text-sm text-orange-800 font-normal bg-orange-100 bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        Wait for confirmation
                                    </span>
                                )
                            }
                            if (params.row.status === 1) {
                                return (
                                    <span className="form-select appearance-none block w-full px-1 py-1 text-sm text-blue-800 font-normal bg-blue-100 bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        Shipping
                                    </span>
                                )
                            }
                            if (params.row.status === 2) {
                                return (
                                    <span className="form-select appearance-none block w-full px-1 py-1 text-sm text-green-800 font-normal bg-green-100 bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        Successfully
                                    </span>
                                )
                            }
                            if (params.row.status === 3) {
                                return (
                                    <span className="form-select appearance-none block w-full px-1 py-1 text-sm text-red-800 font-normal bg-red-100 bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        Order canceled
                                    </span>
                                )
                            }
                            if (params.row.status === 4) {
                                return (
                                    <span className="form-select appearance-none block w-full px-1 py-1 text-sm text-red-800 font-normal bg-red-100 bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded" aria-label="Default select example">
                                        Cancel
                                    </span>
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
                return <Link className=" items-center px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    to={`/profile/purchase/${params.id}/view`}><i className="bi bi-eye-fill"></i></Link>
            },
            width: 50
        },
    ];
    const newData = invoices?.map((item, index) => {
        return {
            id: item._id,
            index: index + 1,
            fullname: item.fullname,
            phoneNumber: item.phoneNumber,
            createdAt: item.createdAt,
            note: item.note,
            total: item.total,
            status: item.status
        }
    });
    return (
        <>
            <div className="text-xl text-secondary-color mb-2">My orders</div>
            <div style={{ height: 460, width: '100%', background: "white" }}>
                <DataGrid
                    width="100%"
                    rows={newData}
                    columns={columns}
                    pageSize={6}
                    disableSelectionOnClick
                />
            </div >
        </>
    )
}

export default Order
