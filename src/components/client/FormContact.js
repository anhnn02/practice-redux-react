import React from 'react'

const FormContact = () => {
  return (
    <form className="contact__form shadow rounded-[20px] max-w-sm p-9 flex flex-col justify-between ml-14">
      <input type="email" className="form__item text-sm w-full radius-primary outline-none p-3 border border-gray-primary block trans-second focus:border-primary-color " placeholder="Email" />
      <textarea name="" id="" className="form__item text-sm w-full radius-primary outline-none p-3 border border-gray-primary block trans-second focus:border-primary-color h-72"
        placeholder="Message..."></textarea>
      <div className="form__item text-sm block text-right">
        <button type="submit" className="border-none radius-primary bg-primary-color px-[20px] py-[8px] text-white trans-second mt-1 hover:opacity-90">Submit</button>
      </div>
    </form>
  )
}

export default FormContact