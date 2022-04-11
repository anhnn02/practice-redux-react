import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import slugify from 'react-slugify';
// import { create, list, remove } from '../../../api/categoryProduct';
import { listCategory, addCategory, removeCategory, } from "../../../features/categoryPro/cateProSlice"



const Category = () => {
    const categories = useSelector(data => data.category.value);
    const dispatch = useDispatch();
    //--------------------add category
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const slugCate = slugify(data.name)
        const dataCate = {
            name: data.name,
            slug: slugCate
        }
        dispatch(addCategory(dataCate));
    }

    //-------------list
    useEffect(() => {
        dispatch(listCategory());
    }, [])

    //--------------delete category
    const onDelete = async (id) => {
        const confirm = window.confirm("Are you sure delete this category?");
        if (confirm) {
            dispatch(removeCategory(id))
        }
    }

    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                Category Product
            </h2>
            <h4 className="text-xl font-semibold text-red-700 :text-gray-200">Add category</h4>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="grid grid-cols-2 gap-8">
                    <form className="" id="form-add" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block :text-white text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                {...register("name", { required: true })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cate-product" type="text" />
                        </div>
                        <div className="text-right">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Add
                            </button>
                        </div>
                    </form>
                    <div className="">
                        <table className="items-center shadow bg-white w-full border-collapse rounded-lg">
                            <thead>
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        #
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Category Name
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((item, index) => {
                                    return <tr key={item._id}>
                                        <th className="w-[20px] border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700">
                                            {index + 1}
                                        </th>
                                        <td className="w-full border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                            {item.name}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                            <div className="flex items-center space-x-4 text-sm">
                                                <button
                                                    className=""
                                                    aria-label="Edit">
                                                    <NavLink to={`/admin/category-product/${item._id}/edit`} className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-purple">
                                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                                            </path>
                                                        </svg>
                                                    </NavLink>
                                                </button>
                                                <button
                                                    onClick={() => onDelete(item._id)}
                                                    className="btn-del-cate flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-purple"
                                                    aria-label="Delete">
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd"
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category