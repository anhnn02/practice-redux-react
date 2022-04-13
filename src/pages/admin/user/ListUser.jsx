import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import { formatPrice } from '../../../utils/formatNumber'
import { listUser, updateUser } from '../../../features/user/userSlice';

const ListUser = () => {
    let [reRenderPage, setReRenderPage] = useState(0)
    const users = useSelector(data => data.user.listUser);
    const dispatch = useDispatch();

    const changeStatusUser = (id, status) => {
        const user = {
            status: {
                status: (status * 1)
            },
            id
        }
        console.log("object", user);
        dispatch(updateUser(user))
        setReRenderPage(reRenderPage++)
    }
    useEffect(() => {
        dispatch(listUser());
        console.log(users)
        setReRenderPage(reRenderPage++)
    }, [reRenderPage])

    const columns = [
        { field: 'index', headerName: '#', width: 50 },
        {
            field: 'name',
            headerName: 'Name',
            width: 160,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 560,
            editable: true,
            sortable: false,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
            editable: true,
            renderCell(params) {
                return <div className="">
                    {
                        (() => {
                            if (params.row.status === 0) {
                                return (
                                    <select
                                        onChange={(e) => changeStatusUser(params.row.id, e.target.value)}
                                        className="form-select appearance-none block text-center max-w-full px-2 py-1 text-sm font-bold text-green-800 bg-green-100 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option value="1">Lock</option>
                                        <option selected value="0">Active</option>
                                    </select>
                                )
                            }
                            if (params.row.status === 1) {
                                return (
                                    <select
                                        onChange={(e) => changeStatusUser(params.row.id, e.target.value)}
                                        className="form-select appearance-none block text-center max-w-full px-2 py-1 text-sm font-bold text-red-800 bg-red-100 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected value="1">Lock</option>
                                        <option value="0">Active</option>
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
    const newData = users.length > 0 && users?.map((item, index) => {
        // console.log(object);
        return {
            id: item._id,
            index: index + 1,
            name: item.name,
            email: item.email,
            status: item.status
        }
    });


    return (
        <>
            <div className="container px-6 grid grid-cols-2">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                    User
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

export default ListUser
