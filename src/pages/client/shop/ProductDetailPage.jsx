import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { read } from '../../../api/product'
import { addItemToCart } from '../../../features/cart/cartSlice'
import { relatedProduct as relatedPro } from '../../../features/categoryPro/proInCateSlice'
import { formatPercent, formatPrice } from '../../../utils/formatNumber'
import { splitArray } from '../../../utils/splitSize'
import { toastr } from 'react-redux-toastr'
import Comment from '../../../components/client/Shop/Comment'

const ProductDetailPage = () => {
    const [quantity, setQuantity] = useState(1)
    const [productOne, setProduct] = useState([])
    const relatedProduct = useSelector(data => data.proInCate.value);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch();
    const { productName } = useParams();

    const handleAddToCart = (product) => {
        const itemCart = {
            _id: productOne._id + product.size,
            idPro: productOne._id,
            size: product.size,
            img: productOne.img,
            // quantity: quantity * 1,
            quantity: 1,
            name: productOne.name,
            desc: productOne.desc,
            regularPrice: productOne.regularPrice * 1,
            salePrice: productOne.salePrice * 1,
            categoryProduct: productOne.categoryPro,
            total: (productOne.salePrice) ? productOne.salePrice * quantity : productOne.regularPrice * quantity
        }
        dispatch(addItemToCart(itemCart))
        setQuantity(1)
        toastr.success("Cart", "Add to cart successfully")
    }

    useEffect(() => {
        (async () => {
            const { data } = await read(productName);
            setProduct(data)
            const id = { idCate: data?.categoryPro, idPro: productName }
            dispatch(relatedPro(id))
        })();
    }, [productName])

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decrementQuantity = () => {
        if (quantity < 2) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }

    }


    return (
        <>
            <div className="bg-bgr-color max-w-screen-xl m-auto">
                <div className="max-w-7xl m-auto pt-3">
                    <div className="bg-white my-auto p-12 rounded-[20px]">
                        <div className="text-right pr-8 pb-0 pl-0">
                            <button className="btn-favorite btn-favorite-2"><i className="bi bi-heart"></i><i
                                className="bi bi-heart-fill"></i></button>
                        </div>
                        <div className="grid-cols-custom grid gap-10">
                            <div className="flex flex-col justify-center">
                                <div className="product-details__tag text-lg">
                                    {(productOne?.salePrice) ? <span className="product-tag--sale">{formatPercent(productOne?.salePrice, productOne?.regularPrice)}</span> : ""}
                                </div>
                                <h3 className="text-2xl my-3">{productOne?.name}</h3>
                                <div className="my-3">
                                    <span className="text-2xl font-bold pr-1">{(productOne?.salePrice) ? formatPrice(productOne?.salePrice) : formatPrice(productOne?.regularPrice)}</span>
                                    <span className="text-lg line-through">{(productOne?.salePrice) ? formatPrice(productOne?.regularPrice) : ""}</span>
                                </div>
                                <ul className="m-0 p-0">
                                    <li className="inline-block">
                                        <img src="https://product.hstatic.net/1000230642/product/01201trg__2__c76e4b971a1743f89724a32778003fe4_1024x1024.jpg"
                                            alt="" className="h-20 object-cover cursor-pointer" />
                                    </li>
                                    <li className="inline-block">
                                        <img src="https://product.hstatic.net/1000230642/product/01201trg__2__c76e4b971a1743f89724a32778003fe4_1024x1024.jpg"
                                            alt="" className="h-20 object-cover cursor-pointer" />
                                    </li>
                                    <li className="inline-block">
                                        <img src="https://product.hstatic.net/1000230642/product/01201trg__2__c76e4b971a1743f89724a32778003fe4_1024x1024.jpg"
                                            alt="" className="h-20 object-cover cursor-pointer" />
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center">
                                <img src={productOne?.img}
                                    alt="" className="img-fluid" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="col-right-item mb-4 grid grid-cols-5 gap-2">
                                    <span className="text-[15px] pt-2">Review</span>
                                    <div className="text-lg col-span-4">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill disabled"></i>
                                        <span className="product-details__review-quantity">(10)</span>
                                    </div>
                                </div>
                                <form action="" onSubmit={handleSubmit(handleAddToCart)}>
                                    <div className="col-right-item grid grid-cols-5 gap-2">
                                        <span className="text-[15px] ">Size</span>
                                        <div className="w-full flex justify-center items-center col-span-4">
                                            <div className="mb-2">
                                                <div className="w-full">
                                                    <div className="grid grid-cols-6 xl:grid-cols-6 gap-3 w-full">
                                                        {/* {console.log("asdnsa", splitArray(productOne?.size))} */}
                                                        {(productOne?.size) ? splitArray(productOne?.size).map((size, index) => {
                                                            return <div className="radio">
                                                                <input type="radio" {...register('size', { required: true })} id={`sizeProduct-${index}`}  value={size} />
                                                                <label htmlFor={`sizeProduct-${index}`}
                                                                    className="px-4 py-1 rounded flex justify-center items-center text-sm lg:text-lg ">
                                                                    {size}
                                                                </label>
                                                            </div>
                                                        }) : ""}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-right-item mb-4 product-details__quantity">
                                        <div className="mb-4 grid grid-cols-5 gap-2">
                                            <span className="text-[15px] ">Quantity </span>
                                            <span className="text-[15px] font-bold col-span-4"> 100</span>
                                        </div>
                                        <input
                                            className="quantity__input shadow appearance-none border rounded max-w-2  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="number"
                                             value="1" />
                                    </div>
                                    <button
                                        id="btnAddToCart"
                                        className="max-w-[200px] w-auto min-w-[120px] rounded bg-primary-15-color text-primary-color border-none py-[5px] px-[15px] cursor-pointer outline-none duration-500 hover:bg-primary-color hover:text-white">
                                        ADD TO CART
                                        <i className="bi bi-bag"></i>
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="py-5 px-12">
                        <div className="tab text-center mb-4">
                            <button className="tablinks"
                                //  onClick="openCity(event, 'Description')"
                                id="defaultOpen">Description</button>
                            <button className="tablinks"
                            // onClick="openCity(event, 'Shipping')"
                            >Shipping</button>
                        </div>

                        <div id="Description" className="tabcontent">
                            <p>{productOne?.desc}</p>
                        </div>

                        <div id="Shipping" className="tabcontent">
                            <p>B Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptatum doloremque facere
                                sed nisi perspiciatis. Modi voluptate dolor ipsam natus iste quibusdam commodi accusantium,
                                vitae placeat ipsa excepturi repellat. Autem.</p>
                        </div>
                    </div>
                    <div className="py-5 px-12">
                        <Comment />
                    </div>
                    <div className="py-5 px-12">
                        <h4 className="text-2xl py-3">Related products <b></b></h4>
                        <div className="renderNoProduct text-center"></div>
                        <div className="grid grid-cols-5 gap-5 max-w-7xl m-auto">
                            {(!relatedProduct.relatedProduct || relatedProduct.relatedProduct.length == 0) ? <p className="text-orange-800">Have no related product!</p>
                                : relatedProduct.relatedProduct?.map((item, index) => {
                                    return <div key={index} className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
                                        <div className="relative overflow-hidden h-44">
                                            <Link to={`/product/${item._id}`}>
                                                <img src={item.img}
                                                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                                            </Link>
                                            <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                                                className="bi bi-heart-fill"></i></button>
                                            <button className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                                                to cart <i className="bi bi-bag"></i></button>
                                        </div>
                                        <div className="my-0 mx-2">
                                            <h3 className="my-[3px] mx-0 h-auto"><a className="font-normal text-[15px] block w-[190px] truncate" href="">
                                                {item.name}</a></h3>
                                            <div className="flex justify-between items-center">
                                                <div className="">
                                                    <span className="product__price product__price--now pr-1">{(item.salePrice) ? formatPrice(item.salePrice) : formatPrice(item.regularPrice)}</span>
                                                    <span className="product__price product__price--old">{(item.salePrice) ? formatPrice(item.regularPrice) : ""}</span>
                                                </div>
                                                <div className="product-group__variation">
                                                    {splitArray(item?.size).map(((size) => {
                                                        return <span className="variation__item">{size}</span>
                                                    }))}
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailPage