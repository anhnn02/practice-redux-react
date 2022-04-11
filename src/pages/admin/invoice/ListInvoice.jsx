import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { formatPrice } from '../../../utils/formatNumber';
import { useDispatch, useSelector } from 'react-redux'
import { listInvoice } from '../../../features/invoice/invoiceSlice'
import { DataGrid } from '@mui/x-data-grid';
import { formatPrice } from '../../../utils/formatNumber'

const Invoice = () => {
    const invoices = useSelector(data => data.invoice.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listInvoice());
    }, [])

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
                        <select class="form-select appearance-none
                            block
                            w-full
                            px-1
                            py-1
                            text-sm
                            text-green-800
                            font-normal
                            bg-green-100 bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option value="1">Wait for confirmation</option>
                        <option value="2">Confirm</option>
                        <option value="3">Cancel</option>
                    </select>
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
                    to={`/admin/invoice/${params.id}/view`}><i class="bi bi-eye-fill"></i></Link>
            },
            width: 50
        },
    ];
    const newData = invoices?.map((item, index) => {
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