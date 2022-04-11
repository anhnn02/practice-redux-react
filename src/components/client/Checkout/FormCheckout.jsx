import React from 'react'
import ProductCheckout from '../../../components/client/Checkout/ProductCheckout'
import { useSelector, useDispatch } from 'react-redux'
import { formatPrice } from '../../../utils/formatNumber'
import { useForm } from 'react-hook-form'
import { create } from '../../../api/invoice'
import { create as createDetail } from '../../../api/invoiceDetail'
import { resetCart } from '../../../features/cart/cartSlice'
import { isAuthenticate } from '../../../utils/localstorage'

const FormCheckout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const cartTotalQuantity = useSelector(data => data.cart.totalQuantity)
    const cart = useSelector(data => data.cart.items)
    let subTotal = 0;
    cart.forEach((item) => {
        subTotal += item.total;
    });
    let totalAmount = subTotal + 5

    let user = '';
    if(isAuthenticate()) {
        user = isAuthenticate()
    }
    // checkout
    const buyNow = (data) => {
        const dataInvoice = {
            fullname: data.fullname,
            phoneNumber: data.phoneNumber,
            address: data.address,
            note: data.note ? data.note : null,
            total: totalAmount,
            userId: user.user._id
        }
        const addInfoOrder = async () => {
            if (cart.length > 0) {
                const { data } = await create(dataInvoice)
                const invoiceId = data._id

                await cart.forEach(async (item) => {
                    const dataInvoiceDetail = {
                        name: item.name,
                        img: item.img,
                        size: item.size,
                        regularPrice: item.regularPrice,
                        salePrice: (item.salePrice) ? item.salePrice : null,
                        quantity: item.quantity,
                        total: item.total,
                        invoiceId: invoiceId
                    }

                    await createDetail(dataInvoiceDetail)
                    dispatch(resetCart())
                })
            }
        }
        addInfoOrder()
    }

    return (
        <form className="max-w-screen-2xl m-auto flex h-screen" id="formCheckout" onSubmit={handleSubmit(buyNow)} >
            <div className="w-2/3 p-3">
                <h3 className="text-xl font-bold pl-[100px] py-2">Checkout
                </h3>
                <div className="bg-white max-w-2xl m-auto p-10 rounded-xl " >
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Your name
                            </label>
                            <input
                                {...register('fullname', { required: true })}
                                className="fullname appearance-none block w-full text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Jane" />
                            {errors.fullname && <span className="text-red-500">Field is required!</span>}

                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Phone number
                            </label>
                            <input
                                {...register('phoneNumber', { required: true })}
                                className="phone appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="number" />
                            {errors.phoneNumber && <span className="text-red-500">Field is required!</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Address
                            </label>
                            <input
                                {...register('address', { required: true })}
                                className="address appearance-none block w-full h-20 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password" type="text" />
                            {errors.address && <span className="text-red-500">Field is required!</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Note
                            </label>
                            <input
                                {...register('note')}
                                className="note appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-city" type="text" placeholder="Note" />
                            {errors.note && <span className="text-red-500">Field is required!</span>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white w-1/3 py-5 px-8 h-[550px] sticky top-0">
                <div className="">
                    <ProductCheckout />
                    <div className="py-1 my-3 border-y border-gray-primary">
                        <div className="flex justify-between items-center py-2">
                            <span>Subtotal</span>
                            <span className="font-bold Subtotal">{formatPrice(subTotal)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span>Shipping</span>
                            <span className="font-bold">5 $</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span>Discout</span>
                            <span className="font-bold">0$</span>
                        </div>
                    </div>
                    <div className="py-1 border-gray-primary">
                        <div className="flex justify-between items-center pb-2">
                            <span className="font-bold">Total</span>
                            <span className="font-bold text-lg text-primary-color total">{formatPrice(totalAmount)}</span>
                        </div>
                    </div>
                    <button className="p-2 w-full bg-primary-color rounded trans-second text-white hover:opacity-90" type="submit" >Buy now</button>
                </div>
            </div>
        </form>

    )
}

export default FormCheckout