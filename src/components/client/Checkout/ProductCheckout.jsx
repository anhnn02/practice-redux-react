import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../../../utils/formatNumber'

const ProductCheckout = () => {
    let totalCart = 0

    const dataCart = useSelector(data => data.cart.items)

    const cartTotalQuantity = useSelector(data => data.cart.totalQuantity)
    const dispatch = useDispatch()
    return (
        <div className="max-h-72 overflow-auto">
            {dataCart.map((item) => (
                <div className="flex justify-between items-center my-2">
                    <img className="w-[90px] h-[75px] object-cover"
                        src={item.img}    alt="" />
                    <div className="w-full mx-2">
                        <h3><a href="/#/shop/${item.id}">{item.name}</a></h3>
                        <span className="block text-gray-darker text-sm">x{item.quantity}</span>
                        <span className="block text-gray-darker text-sm">Size: {item.size}</span>
                    </div>
                    <span className="font-bold text-sm w-24">{formatPrice(item.total)}</span>
                </div>
            ))}
        </div>
    )
}

export default ProductCheckout