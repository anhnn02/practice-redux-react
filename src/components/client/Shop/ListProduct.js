import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { formatPrice, formatPercent } from '../../../utils/formatNumber';
// import { listCategory } from '../../../features/categoryPro/cateProSlice';
// import { listProduct } from '../../../features/product/productSlice';
// import { getProductInCategory } from '../../../features/categoryPro/proInCateSlice';

const ListProduct = ({ products }) => {
    console.log("first", products);
    // const proInCate = useSelector((data => data.product.value))
    // const categories = useSelector((data => data.category.value))
    // const dispatch = useDispatch();
    // const { cateName } = useParams()

    // useEffect(() => {
    //     const getCate = async () => {
    //         const { data } = await list();
    //         const dataCate = categories.filter((item) => {
    //             return item.slug == cateName
    //         })
    //         return dataCate
    //     }
    //     getCate()
    //     console.log("getCate", getCate().then(data => data).);
    //     dispatch(listProduct())
    // }, [cateName])

    // const {products} = useSelector(data => data.proInCate.value);
    // const { cateName: IdCate } = useParams()
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getProductInCategory(IdCate))
    // }, [IdCate])

    return (
        <div className="grid grid-cols-4 gap-5">
            {products?.map((item) => {
                return <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
                    <div className="relative overflow-hidden h-44">
                        {(item.salePrice) ? <span className="product-tag product-tag--sale">{formatPercent(item.salePrice, item.regularPrice)}</span> : ""}
                        <Link to={`/product/${item._id}`}>
                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61400c23-abfd-46ba-8335-c9bf701f5f74/nikecourt-zoom-nxt-hard-court-tennis-shoes-MPFhX3.png"
                                alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                        </Link>
                        <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                            className="bi bi-heart-fill"></i></button>
                        <button
                            className="btn-cart-quick absolute -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                            to cart <i className="bi bi-bag"></i></button>
                    </div>
                    <div className="my-0 mx-2">
                        <h3 className="my-[3px] mx-0 h-auto"><Link
                            className="font-normal text-[15px] block w-[190px] truncate" to="">
                            {item.name}</Link></h3>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <span className="product__price product__price--now">{(item.salePrice) ? formatPrice(item.salePrice) : formatPrice(item.regularPrice)} </span>
                                <span className="product__price product__price--old">{(item.salePrice) ? formatPrice(item.regularPrice) : ""}</span>
                            </div>
                            <div className="product-group__variation">
                                <span className="variation__item">36</span>
                                <span className="variation__item">37</span>
                                <span className="variation__item">38</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <div className="text-sm">
                                <i className="bi bi-star-fill text-star-color"></i>
                                <i className="bi bi-star-fill text-star-color"></i>
                                <i className="bi bi-star-fill text-star-color"></i>
                                <i className="bi bi-star-fill text-star-color"></i>
                                <i className="bi bi-star-fill text-gray-primary disabled"></i>
                                <span className="product__feedback-quantity">(10)</span>
                            </div>
                            <div className="text-sm"> <span className="text-[15px]">10</span> sales
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
    )
}

export default ListProduct