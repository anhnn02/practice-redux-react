import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import { formatPrice } from '../../../utils/formatNumber'
import { listUser, updateUser } from '../../../features/user/userSlice';
import { getAllComment, removeComment } from '../../../features/comment/commentSlice';

const ListComment = () => {
    const comments = useSelector(data => data.comment.value);
    const dispatch = useDispatch();

    const onRemove = (id) => {
        const confirm = window.confirm('Are you sure you want to remove this comment?')
        if (confirm) {
            dispatch(removeComment(id))
        }
    }

    useEffect(() => {
        dispatch(getAllComment());
    }, [])

    
    const columns = [
        { field: 'index', headerName: '#', width: 50 },
        {
            field: 'name',
            headerName: 'Username',
            width: 110,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 160,
            editable: true,
        },
        {
            field: 'comment',
            headerName: 'Content',
            width: 600,
            editable: true,
        },
        {
            field: 'del',
            headerName: 'Del',
            sortable: false,
            renderCell(params) {
                return <i onClick={() => onRemove(params.id)} className="bi bi-trash-fill cursor-pointer flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"></i>
            },
            width: 50
        },
    ];
    
    const newData = comments.length > 0 && comments?.map((item, index) => {
        return {
            id: item._id,
            index: index + 1,
            name: item.userId.name,
            email: item.userId.email,
            comment: item.comment
        }
    });

    return (
        <>
            <div className="container px-6 grid grid-cols-2">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                    Comment
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

export default ListComment
