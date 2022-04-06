import React from 'react'

const CartTable = () => {
  return (
      <table className="min-w-full">
          <thead className="border-b">
              <tr>
                  <th scope="col" className="font-bold text-center text-gray-900 px-6 py-4">
                      Image
                  </th>
                  <th scope="col" className="font-bold text-center text-gray-900 px-6 py-4">
                      Product
                  </th>
                  <th scope="col" className="font-bold text-center text-gray-900 px-6 py-4">
                      Size
                  </th>
                  <th scope="col" className="font-bold text-center text-gray-900 px-6 py-4">
                      Price
                  </th>
                  <th scope="col" className="font-bold text-center text-gray-900 px-6 py-4">
                      Quantity
                  </th>
                  <th scope="col" className="font-bold text-center text-gray-900 px-6 py-4">
                      Total
                  </th>
                  <th scope="col" className="font-bold text-center text-gray-900 px-1 py-4">
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="rounded-md">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      <a href="/shop/${item.id}">
                          <img src="https://cdn.dribbble.com/users/2502549/screenshots/15715521/media/129015a26edbcf686920f59131c686fd.png?compress=1&resize=1600x1200&vertical=top"
                              alt="" className="max-w-[80px] w-full h-20 object-cover" />
                      </a>
                  </td>
                  <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                      <a href="/shop/${item.id}">
                          Abc
                      </a>
                  </td>
                  <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                      <span className="bg-white py-[3px] px-2 border rounded">
                          36
                      </span>
                  </td>
                  <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                      $ 200.00
                  </td>
                  <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                      <button data-id="${item.id}" className="btn btn-increase bg-gray-300 hover:bg-gray-500 text-white text-center py-2 px-2 rounded-full h-6 w-6 inline-flex items-center">+</button>
                      <input
                          className="quantity__input max-w-[50px] appearance-none border rounded max-w-2 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="number" value="${item.quantity}" />
                      <button data-id="${item.id}" className="btn btn-decrease bg-gray-300 hover:bg-gray-500 text-white text-center py-2 px-2 rounded-full h-6 w-6 inline-flex items-center">-</button>
                  </td>
                  <td className="text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                      $ 200.00
                  </td>
                  <td className="text-gray-900 px-1 py-4 whitespace-nowrap">
                      <button data-id="${item.id}" className="btn btn-remove">
                          <i className="bi bi-x-circle text-gray-primary hover:text-primary-color cursor-pointer"></i>
                      </button>
                  </td>
              </tr>
          </tbody>
      </table>
  )
}

export default CartTable