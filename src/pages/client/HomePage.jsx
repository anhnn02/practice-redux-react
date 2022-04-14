import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { listProduct } from '../../features/product/productSlice';
import { formatPrice } from '../../utils/formatNumber'
import { splitArray } from '../../utils/splitSize';


const HomePage = () => {
  // console.log("props", products);
  // const products = [
  //   { name: "Test redux", regularPrice: "100", img: "https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", desc: "abscjhasbjsdasascsa", size: "36, 37, 38", categoryPro: "624b16b66fb90d62cd866a2c" },
  //   { name: "Test redux", regularPrice: "100", img: "https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", desc: "abscjhasbjsdasascsa", size: "36, 37, 38", categoryPro: "624b16b66fb90d62cd866a2c" }
  // ]
  const dispatch = useDispatch();
  const products = useSelector(data => data.product.value)
  const newProducts = products.slice(0, 10)
  useEffect(() => {
    dispatch(listProduct())

  }, [])


  return (
    <>
      <div className="max-w-full slideShow overflow-hidden">
        <div className="max-w-7xl w-full relative m-auto rounded-lg overflow-hidden">
          <div className="mySlides fade">
            <img className="w-full h-[450px] object-cover"
              src="https://i.ytimg.com/vi/fBonRLiYdYA/maxresdefault.jpg" />
          </div>

          <div className="mySlides fade hidden">
            <img className="w-full h-[450px] object-cover"
              src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design-1180x664.jpg" />
          </div>

          <div className="mySlides fade hidden">
            <img className="w-full h-[450px] object-cover"
              src="https://cdn.dribbble.com/users/2474148/screenshots/6909295/thimnail.png" />
          </div>

          <NavLink to="" className="prev cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-white font-bold text-lg duration-500 select-none"
            id="prevBtn">&#10094;</NavLink>
          <NavLink to="" className="next cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-white font-bold text-lg duration-500 select-none right-0 "
            id="nextBtn">&#10095;</NavLink>
        </div>
      </div>
      <main className="">
        <div className="max-w-7xl m-auto my-20 grid grid-cols-2 gap-10">
          <img className="rounded-xl" src="https://i.pinimg.com/originals/03/08/ee/0308eec4ae6bb222d2af3ed07073bee1.jpg" alt="" />
          <div className="flex flex-col justify-center">
            <h5 className="text-3xl font-bold">Nike Shoes 2022 </h5>
            <p className="text-gray-darker w-[350px] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, fugit! Adipisci ab unde voluptatem laboriosam, iusto eos possimus suscipit modi praesentium molestias dolorem molestiae itaque quia quod blanditiis tempora voluptates!</p>
            <button type="button"
              className="max-w-[100px] text-white bg-[#63dee7] hover:opacity-90 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 text-center mb-2 trans-second">Buy now</button>
          </div>
        </div>
        <div className="max-w-7xl m-auto grid grid-cols-3 gap-32 my-10">
          <div className="value-home text-center trans-second">
            <img className="inline-block max-w-full h-40" src="https://i.pinimg.com/564x/94/18/7d/94187db777b9750b62fee50800d4ff5a.jpg" alt="" />
            <span className="font-bold text-xl block mt-2">Authentic</span>
            <span className="inline-block text-gray-darker p-3 px-16">
              Nationwide shipping abc
              nationwide shipping
            </span>
          </div>
          <div className="value-home text-center trans-second">
            <img className="inline-block max-w-full h-40" src="https://i.pinimg.com/564x/d0/03/91/d00391bb92806c9484fc522c4352b865.jpg" alt="" />
            <span className="font-bold text-xl block mt-2">Nationwide shipping </span>
            <span className="inline-block text-gray-darker p-3 px-16">
              Nationwide shipping abc
              nationwide shipping
            </span>
          </div>
          <div className="value-home text-center trans-second">
            <img className="inline-block max-w-full h-40" src="https://i.pinimg.com/564x/44/80/3a/44803aa41662e5f436eb7171c0ccb8fc.jpg" alt="" />
            <span className="font-bold text-xl block mt-2">Support 24/7</span>
            <span className="inline-block text-gray-darker p-3 px-16">
              Nationwide shipping abc
              nationwide shipping
            </span>
          </div>
        </div>
        <div className="">
          <h2 className="text-center font-bold text-2xl py-4">Newest product</h2>
          <div className="grid grid-cols-5 gap-5 max-w-7xl m-auto">
            {newProducts?.map((item) => {
              return <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
                <div className="relative overflow-hidden h-44">
                  <NavLink to={`product/${item._id}`}>
                    <img src={item.img}
                      alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                  </NavLink>
                  <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                    className="bi bi-heart-fill"></i></button>
                  <button
                    className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                    to cart <i className="bi bi-bag"></i></button>
                </div>
                <div className="my-0 mx-2">
                  <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                    to="">{item.name}</NavLink></h3>
                  <div className="flex justify-between items-center">
                    <div className="">
                      <span className="product__price product__price--now">{(item.salePrice) ? formatPrice(item.salePrice) : formatPrice(item.regularPrice)} </span>
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
        {/* <div className="mt-12">
          <h2 className="text-center font-bold text-2xl py-4">Top 10 best selling</h2>
          <div className="grid grid-cols-5 gap-5 max-w-7xl m-auto">
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
            <div className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
              <div className="relative overflow-hidden h-44">
                <NavLink to="/shop/${product.id}">
                  <img src="https://i.pinimg.com/564x/64/db/46/64db46de93105cc0b4c91bb977af88c5.jpg"
                    alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </NavLink>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                  className="bi bi-heart-fill"></i></button>
                <button
                  className="btn-cart-quick absolute text-sm -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                  to cart <i className="bi bi-bag"></i></button>
              </div>
              <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto"><NavLink className="font-normal text-[15px] block w-[190px] truncate"
                  to="">Abc</NavLink></h3>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="product__price product__price--now">$ 200.00 </span>
                    <span className="product__price product__price--old">$ 200.00 </span>
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
          </div>
        </div> */}
        <div className="max-w-6xl m-auto my-20 grid grid-cols-2 gap-3">
          <div className="flex">
            <div className="my-auto">
              <h3 className="text-4xl font-bold">What people say about us</h3>
              <p className="my-3 w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
          <div className="flex">
            <div className="card-review m-auto mx-12 p-10 px-11">
              <img className="rounded-full w-10 h-10 object-cover" src="https://cdn.dribbble.com/users/403631/screenshots/14912450/media/cf36aaf6944d0b7a3d1213e24187d092.jpg?compress=1&resize=800x600&vertical=top" alt="" />
              <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="text-center">
                <span className="inline-block rounded-full w-3 h-3 bg-gray-400 mr-2"></span>
                <span className="inline-block rounded-full w-3 h-3 bg-gray-200 mr-2"></span>
                <span className="inline-block rounded-full w-3 h-3 bg-gray-200"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12">
          <img className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/403631/screenshots/14912450/media/cf36aaf6944d0b7a3d1213e24187d092.jpg?compress=1&resize=800x600&vertical=top" alt="" />
          <div className="grid grid-cols-2 gap-6">
            <img className="w-full h-full object-cover" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c2fff38-9f89-40f1-bbcf-ffbfaab5adbc/wio-8-road-running-shoes-S6jPM3.png" alt="" />
            <div className="grid grid-rows-2 gap-6">
              <img className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/944686/screenshots/14876784/media/ffb2f244b92633b1a67b64407af7dbcd.jpg?compress=1&resize=1600x1200&vertical=top" alt="" />
              <img className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/3189535/screenshots/14583690/media/80b491ca3a86d9e4762a56d0a5a54de3.png?compress=1&resize=1600x1200&vertical=top" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

HomePage.propTypes = {}

export default HomePage
