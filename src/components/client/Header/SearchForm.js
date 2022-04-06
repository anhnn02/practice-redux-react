import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductSearch } from '../../../features/product/productSearchSlice';
// import { search } from '../../../api/product';
import { formatPrice } from '../../../utils/formatNumber';

const SearchForm = () => {
    const [openSearch, setOpenSearch] = useState(false)
    let { value: resultSearch } = useSelector(data => data.productSearch);

    const dispatch = useDispatch()
    const handleSearch = () => {
        if (!openSearch) {
            setOpenSearch(true)
        } else {
            setOpenSearch(false)
            // resultSearch = ""
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onKeyUp = async (data) => {
        dispatch(getProductSearch(data.keyword))
        if (!data.keyword) {
            // toastr.error("Thông báo", "Nhập tên sản phẩm muốn tìm")
            // alert("andajsdakjdkjdasjdakjsdkisadkas")
        }
        // if (data.keyword.trim() === "") {
        //     // if (resultSearch) {
        //     //     console.log("scacas")
        //     // } else{

        //     // }
        //     resultSearch = null;
        //     console.log("asdjasd", typeof (resultSearch));

        // } else {
        //     // const { data: dataSearch } = await search(data.keyword);
        //     // setResultSearch(dataSearch);
        // }
    }
    return (
        <>
            <div className="relative">
                <button onClick={handleSearch}>
                    <i className="bi bi-search py-[10px] px-3 rounded-full trans-second hover:bg-primary-15-color"></i></button>
                {
                    openSearch && (
                        <div className="absolute shadow overflow-hidden color-[#fff] w-[400px] mt-4 p-2 px-3 -right-1 transition-all z-40 bg-white rounded-md">
                            <form action="" className="bg-gray-light radius-secondary py-[8px] px-[7px] duration-1000 my-2" onKeyUp={handleSubmit(onKeyUp)}>
                                <button
                                    className="text-gray-primary text-lg pl-1 pr-2"
                                    type="submit"><i className="bi bi-search"></i></button>
                                <input id="search" className="border-none bg-transparent w-[250px] outline-none focus:border-orange-200" type="text"
                                    placeholder="Nike 2021..."
                                    {...register("keyword")}
                                />
                            </form>
                            <div className="max-h-[400px] overflow-auto">
                                {resultSearch ? resultSearch?.map((item, index) => {
                                    return (
                                        <div key={index} className="grid grid-cols-4 w-full border-b py-2">
                                            <div className="col-span-3">
                                                <Link to={`product/${item._id}`} className="block font-bold truncate w-[220px] text-lg text-orange-800">{item.name}</Link>
                                                <span>Size: 38</span>
                                                <p>
                                                    <span className="product__price--now">{(item.salePrice) ? formatPrice(item.salePrice) : formatPrice(item.regularPrice)} </span>
                                                    <span className="product__price--old">{(item.salePrice) ? formatPrice(item.regularPrice) : ""}</span>
                                                </p>p
                                            </div>
                                            <Link to="">
                                                <img src={item.img} className="w-full h-18 object-cover" alt="" />
                                            </Link>
                                        </div>
                                    )
                                }) : <div className="text-center text-orange-800">Input your item you want to search</div>}
                                {/* {(!resultSearch) ? <div className="text-center text-orange-800">Input your item you want to search</div>
                                    : resultSearch?.map((item) => {
                                        return <div className="grid grid-cols-4 w-full border-b py-2">
                                            <div className="col-span-3">
                                                <Link to={`product/${item._id}`} className="block font-bold truncate w-[220px] text-lg text-orange-800">{item.name}</Link>
                                                <span>Size: 38</span>
                                                <p>
                                                    <span className="product__price--now">{(item.salePrice) ? formatPrice(item.salePrice) : formatPrice(item.regularPrice)} </span>
                                                    <span className="product__price--old">{(item.salePrice) ? formatPrice(item.regularPrice) : ""}</span>
                                                </p>
                                            </div>
                                            <Link to="">
                                                <img src={item.img} className="w-full h-18 object-cover" alt="" />
                                            </Link>
                                        </div>
                                    })} */}

                                {/* <div className="">
                                    <p className="py-1 text-center">View all
                                        {resultSearch?.length}
                                    </p>
                                </div> */}
                            </div>
                            {/* <Link to="" className="block px-3 py-2 hover:bg-gray-100">Profile</Link>
                            <Link to="" className="block px-3 py-2 hover:bg-gray-100">Setting</Link>
                            <Link to="" onClick={() => { logout() }} className="block px-3 py-2 hover:bg-gray-100">Log out</Link> 
                            
                            <div className="">
                                        <div className="">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="">
                                            <p>Abc</p>
                                            <span>38</span>
                                            <p>
                                                <span>$180.00</span>
                                                <span>$180.00</span>
                                            </p>
                                        </div>
                                        <button></button>
                                        {item.name}
                                    </div>
                            */}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SearchForm