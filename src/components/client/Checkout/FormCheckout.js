import React from 'react'

const FormCheckout = () => {
  return (
      <div className="bg-white max-w-2xl m-auto p-10 rounded-xl " >
          <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                      Your name
                  </label>
                  <input
                      className="fullname appearance-none block w-full text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name" type="text" placeholder="Jane" name="fullname" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                      Phone number
                  </label>
                  <input
                      className="phone appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="number" name="phone" />
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                      Address
                  </label>
                  <input
                      className="address appearance-none block w-full h-20 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password" type="text" name="address" />
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Note
                  </label>
                  <input
                      className="note appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city" type="text" placeholder="Note" name="note" />
              </div>
          </div>
      </div>
  )
}

export default FormCheckout