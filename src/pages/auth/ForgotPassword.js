import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <div className="relative w-[43%] min-w-[465px] max-w-[465px] mr-12">
                <img src="https://i.imgur.com/2vfASRl.png" alt="" className="h-[550px] radius-secondary object-cover" />
                <NavLink className="absolute top-3 left-3 bg-white rounded-lg opacity-50 px-2 py-3 trans-second hover:opacity-100 " to="/">
                    <img src="https://i.imgur.com/YR2XB5I.png" alt=""
                        className="img-fluid w-28 object-cover" />
                </NavLink>
            </div>
            <div className="auth-content flex flex-col justify-center w-[350px]">
                <h2 className="my-[1px] text-3xl font-bold">Reset your password</h2>
                <span className="text-gray-darker">Back?<NavLink to="/signin" className="text-primary-color font-bold"> Sign In</NavLink></span>
                <form action="" className="mt-[20px] mb-[10px]" id="signUp">
                    <div className="form__item input-container">
                        <div className="relative">
                            <input id="email"
                                placeholder="Email"
                                className="auth__input p-[10px] radius-primary w-[350px] border-[1.2px] border-solid border-gray-primary text-sm outline-none trans-second focus:border-primary-color" type="email" />
                            {/* <!--
                                      <label for="name" className="auth__label absolute top-1/2 left-3 -translate-y-1/2 text-gray-primary text-sm outline-none select-none pointer-events-none trans-second leading-none">Email</label>
                            --> */}
                        </div>
                        <div className="error-container pt-[2px] px-[6px] pb-0 text-xs min-h-[13px]">
                            <span className="error-password"></span>
                        </div>
                    </div>
                    <div className="form__item text-right">
                        <button type="submit" className="auth__button border-none radius-primary bg-primary-color px-[10px] py-[10px] text-white trans-second block w-full mt-1 hover:opacity-90">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword