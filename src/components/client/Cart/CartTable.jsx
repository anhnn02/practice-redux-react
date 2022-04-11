import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../utils/formatNumber'
import { decrementQuantity, incrementQuantity, removeItemFromCart, resetCart } from '../../../features/cart/cartSlice'

const CartTable = () => {
    let totalCart = 0
   
    const dataCart = useSelector(data => data.cart.items)
    
    const cartTotalQuantity = useSelector(data => data.cart.totalQuantity)
    const dispatch = useDispatch()
    // dispatch(resetCart())
    const removeItemCart = (id) => {
        const toastrConfirmOptions = {
            onOk: () => {
                dispatch(removeItemFromCart(id)) 
                toastr.success("Success", "Delete item from cart successfully!");
            },
            onCancel: () => {}
        };
        
        toastr.confirm('Are you sure you want to delete this item?', toastrConfirmOptions);
    }

    return (
        <div className="w-full overflow-auto">
            {dataCart.length == 0 ? <div className="text-center"> <img className="px-10 py-5" src="https://i.imgur.com/Rx1EG0J.png" alt=""/> </div>
            : <table className="min-w-full ">
                <thead className="border-b">
                    <tr>
                        <th scope="col" className="font-bold text-center text-gray-900 px-2 py-3">
                            Image
                        </th>
                        <th scope="col" className="font-bold text-center text-gray-900 px-2 py-3">
                            Product
                        </th>
                        <th scope="col" className="font-bold text-center text-gray-900 px-2 py-3">
                            Size
                        </th>
                        <th scope="col" className="font-bold text-center text-gray-900 px-2 py-3">
                            Price
                        </th>
                        <th scope="col" className="font-bold text-center text-gray-900 px-2 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="font-bold text-center text-gray-900 px-2 py-3">
                            Total
                        </th>
                        <th scope="col" className="font-bold text-center text-gray-900 px-1 py-4">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataCart && dataCart.length > 0 ? dataCart.map((item) => (
                        <tr key={item._id} className="rounded-md overflow-hidden hover:bg-white trans-second">
                            <td className="px-2 py-4 w-24 font-medium text-gray-900 text-center">
                                <Link to={`product/${item._id}`}>
                                    <img src={item.img}
                                        alt="" className="max-w-[80px] w-full h-20 object-cover" />
                                </Link>
                            </td>
                            <td className="text-gray-900 px-2 py-3 w-[150px] ">
                                <div className="w-[150px] truncate">
                                    <Link to={`product/${item._id}`} className="w-10 truncate">
                                        {item.name}
                                    </Link>
                                </div>
                            </td>
                            <td className="text-gray-900 px-2 py-3 w-10 text-center">
                                <span className="inline-block bg-white py-[3px] px-2 border rounded">
                                    {item.size}
                                </span>
                            </td>
                            <td className="text-gray-900 px-2 py-3 w-10 truncate text-center">
                                <span className="inline-block text-lg font-bold pr-1">{(item?.salePrice) ? formatPrice(item?.salePrice) : formatPrice(item?.regularPrice)}</span>
                                <span className="block text-sm line-through">{(item?.salePrice) ? formatPrice(item?.regularPrice) : ""}</span>
                            </td>
                           
                            <td className="text-gray-900 px-2 py-3 w-10 truncate text-center">
                                <button onClick={() => dispatch(decrementQuantity({ id: item._id, quantity: item.quantity }))} className="inline-block btn btn-increase bg-gray-300 hover:bg-gray-500 text-white text-center py-2 px-2 rounded-full h-6 w-6 inline-flex items-center">-</button>
                                <span className="inline-block mx-1 max-w-[50px] appearance-none border rounded max-w-2 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{item.quantity}</span>
                                <button onClick={() => dispatch(incrementQuantity({ id: item._id, quantity: item.quantity }))} className="btn btn-decrease bg-gray-300 hover:bg-gray-500 text-white text-center py-2 px-2 rounded-full h-6 w-6 inline-flex items-center">+</button>
                            </td>
                            <td className="text-gray-900 px-2 py-3 w-10 truncate font-bold text-center">
                                {formatPrice(item.total)}
                            </td>
                            <td className="text-gray-900 px-1 py-4 w-10 truncate text-center">
                                {/* <button className="btn btn-remove" onClick={() => removeItemCart({id: item._id})}> */}
                                <button className="btn btn-remove" onClick={() => removeItemCart(item._id)}>
                                    <i className="bi bi-x-circle text-gray-primary hover:text-primary-color cursor-pointer"></i>
                                </button>
                            </td>
                        </tr>
                    )) : ""}
                </tbody>
            </table> }
        </div>
    )
}

export default CartTable