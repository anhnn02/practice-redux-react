import React from 'react'
import { useSelector } from 'react-redux'
import FormCheckout from '../../../components/client/Checkout/FormCheckout'
import ProductCheckout from '../../../components/client/Checkout/ProductCheckout'
import { formatPrice } from '../../../utils/formatNumber'
import { useForm } from 'react-hook-form'

const CheckoutPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const cartTotalQuantity = useSelector(data => data.cart.totalQuantity)
    const cart = useSelector(data => data.cart.items)
    let subTotal = 0;
    cart.forEach((item) => {
        subTotal += item.total;
    });
    let totalAmount = subTotal + 5


    return (
        <>
            <div className="bg-bgr-color">
                <div className=" bg-bgr-color">
                    <form className="max-w-screen-2xl m-auto flex h-screen" id="formCheckout">
                        <div className="w-2/3 p-3">
                            <h3 className="text-xl font-bold pl-[100px] py-2">Checkout
                            </h3>
                           <FormCheckout />
                        </div>
                        <div className="bg-white w-1/3 py-5 px-8 h-[550px] sticky top-0">
                            <div className="">
                               <ProductCheckout/>
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
                                <button className="p-2 w-full bg-primary-color rounded trans-second text-white hover:opacity-90">Buy now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CheckoutPage