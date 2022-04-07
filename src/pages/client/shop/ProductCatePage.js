import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AsideCategory from '../../../components/client/Shop/AsideCategory'
import ListProduct from '../../../components/client/Shop/ListProduct'
import { getProductInCategory } from '../../../features/categoryPro/proInCateSlice'

const ProductCate = () => {
    const {products} = useSelector(data => data.proInCate.value);
    const { cateName: idCate } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductInCategory(idCate))
    }, [idCate])

    return (
        <>
            <div>
                <div className="bg-bgr-color w-full">
                    <div className="max-w-screen-xl m-auto px-6">
                        <main className="pl-12 py-2 pr-12 grid grid-cols-5 gap-5">
                            <AsideCategory />
                            <div className="shop__products col-span-4 ">
                                <div>
                                    <span className="text-sm">Result looking for “Nike”</span>
                                </div>
                                <div className="shop__products-container">
                                    <div className="flex justify-between items-center mb-3">
                                        <h4 className="text-2xl font-bold m-0">Products</h4>
                                        <div className="text-gray-darker flex justify-between items-center">
                                            <select
                                                className="form-select form-select-sm appearance-none block w-full px-6 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                aria-label=".form-select-sm example">
                                                <option value="1">Default</option>
                                                <option value="2">A-Z</option>
                                                <option value="3">Z-A</option>
                                                <option value="4">Price: Low-High</option>
                                                <option value="5">Price: High-Low</option>
                                            </select>
                                            <div
                                                className="ml-2 border border-gray-primary flex px-6 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded">
                                                <span className="px-1">Layout</span>
                                                <span><i className="bi bi-card-list"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ListProduct products={products}/>
                                    <div className=" text-center my-4 renderPage">
                                        <span className="show-page page-number">1</span>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductCate