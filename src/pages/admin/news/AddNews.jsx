import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { read } from '../../../api/news'
import { NewsType } from '../../types/news'

const AddNews = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  // const onSubmit: SubmitHandler = data => {
  //   navigate('/admin/news')
  // }
  return (
    <>
      {/* <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="News Name" {...register('name', { required: true })}/>
        <input type="text" placeholder="Author" {...register('author')}/>
        <button>Add</button>
      </form> */}
      {/* <div className="container px-6 mx-auto grid">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
          Products
        </h2>
        <h4 className="text-xl font-semibold text-green-500 :text-gray-200">Add product</h4>
        <div className="grid grid-cols-2 gap-8">
          <form id="form-add" className="">
            <div className="mb-4">
              <label className="block :text-white text-gray-700 text-sm font-bold mb-2">
                Product name
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="title-product" name="title-product" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="m-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image
                </label>
                <div className="mb-3">
                  <input className="form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file"
                    id="img-product" name="img-product" />
                </div>
              </div>
              <div className="m-full mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category Name
                </label>
                <select className="selected-cate form-select appearance-none block 
                                            w-full
                                            px-3
                                            py-[4px]
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example">


                  <option className=""defaultValue="">Abc</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="m-full mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price Regular ($)
                </label>
                <div className="mb-3">
                  <input
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                    id="old-price-product" type="number" name="old-price-product" />
                </div>
              </div>
              <div className="m-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price new ($)
                </label>
                <div className="mb-3">
                  <input
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                    id="price-product" type="number" name="price-product" />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block :text-white text-gray-700 text-sm font-bold mb-2">
                Size
              </label>
              <input id="size" name="size-product" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline" type="text" />
            </div>
            <div className="mb-4">
              <label className="block :text-white text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea className="w-full" name="" id="desc-product" ></textarea>
            </div>
            <div className="text-right">
              <button
                className="btnAdd bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:-outline"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="img">
            <img id="img-preview" className="w-full h-[420px] object-cover"
              src="https://i.imgur.com/3XGhQ2Z.png"
              alt="" />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default AddNews