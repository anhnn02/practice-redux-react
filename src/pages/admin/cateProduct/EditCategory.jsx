import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'react-slugify';
import { updateCategory } from '../../../features/categoryPro/cateProSlice';
import { getProductInCategory } from '../../../features/categoryPro/proInCateSlice';

const EditCategory = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { category } = useSelector(data => data.proInCate.value);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductInCategory(id))
            reset(category)
    }, [id])

    //-------------update
    const onSubmit = async (data) => {
        const slugCate = slugify(data.name)
        const dataCate = {
            _id: id,
            name: data.name,
            slug: slugCate
        }
        dispatch(updateCategory(dataCate))
        navigate('/admin/category-product');
    }

    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                Categories
            </h2>
            <h4 className="text-xl font-semibold text-red-700 :text-gray-200">Edit category</h4>
            <div className="">
                <form className="" id="form-edit" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block :text-white text-gray-700 text-sm font-bold mb-2">
                            Name abc
                        </label>
                        <div className="">
                            <input
                                {...register("name", { required: true })}
                                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cate-product" type="text" />
                            <button
                                className="w-[120px] mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Save change
                            </button>
                        </div>
                    </div>
                </form>
                <a href="/admin/category-product" className="text-blue-800"> Back</a>
            </div>
        </div>
    )
}

export default EditCategory