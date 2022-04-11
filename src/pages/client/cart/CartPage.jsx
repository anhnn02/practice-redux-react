import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import CartTable from '../../../components/client/Cart/CartTable'
import { formatPrice } from '../../../utils/formatNumber'
import { useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr'

const CartPage = () => {
    const cartTotalQuantity = useSelector(data => data.cart.totalQuantity)
    const cart = useSelector(data => data.cart.items)
    const navigate = useNavigate()
    let subTotal = 0;
    cart.forEach((item) => {
        subTotal += item.total;
    });
    let totalAmount = subTotal + 5

    const checkCart = () => {
        if(cart.length === 0) {
            const toastrConfirmOptions = {
                onOk: () => {
                    navigate('/categories/all/1')
                } ,
                onCancel: () => { }
            }
            toastr.confirm("Your cart is empty, go to shop to get more item", toastrConfirmOptions)
        } else {
            navigate("/checkout")
        }
    }
    return (
        <>
            <div className="bg-bgr-color">
                <div className="max-w-screen-2xl m-auto flex">
                    <div className="w-2/3 p-3 h-full">
                        <h3 className="text-xl font-bold">Shopping cart
                        </h3>
                        <CartTable />
                        <div className="my-5">
                            <NavLink className="font-bold text-primary-color" to="/categories/all/1">
                                <i className="bi bi-arrow-left-short"></i> Continue Shopping
                            </NavLink>
                        </div>
                    </div>
                    <div className="bg-white w-1/3 py-5 px-8 h-[500px] sticky top-0">
                        <h4 className="text-xl pb-5">Order summary</h4>
                        <div className="flex justify-between items-center border-b border-gray-primary py-2 mb-3">
                            <span>Item(s)</span>
                            <span>{cartTotalQuantity}</span>
                        </div>
                        <div className="">
                            <input
                                className=" appearance-none border rounded w-full block my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Voucher code" />
                            <div className="relative my-3">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state">
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="py-1 my-3 border-y border-gray-primary">
                                <div className="flex justify-between items-center py-2">
                                    <span>Subtotal</span>
                                    <span className="sub-total font-bold">
                                        {formatPrice(subTotal)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span>Shipping</span>
                                    <span className="font-bold">5 $</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span>Discount</span>
                                    <span className="font-bold">0$</span>
                                </div>
                            </div>
                            <div className="py-1 border-gray-primary">
                                <div className="flex justify-between items-center pb-2">
                                    <span className="font-bold">Total</span>
                                    <span className="total font-bold text-lg text-primary-color">{formatPrice(totalAmount)}</span>
                                </div>
                            </div>
                        </div>
                        <button className="block w-full block p-2 w-full bg-primary-color text-white rounded trans-second hover:opacity-90" onClick={() => checkCart()}> Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage