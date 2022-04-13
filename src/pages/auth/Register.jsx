import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signup } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
    const { register, handleSubmit, formState } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(signup(data))
        navigate("/signin")
    }

    return (
        <>
            <div className="relative w-[43%] min-w-[465px] max-w-[465px] mr-12">
                <img src="https://cdn.dribbble.com/users/754899/screenshots/2985458/media/b8a16910e125ef377e7fb5941ef9082e.png?compress=1&resize=800x600&vertical=top" alt="" className="w-full h-[550px] radius-secondary object-cover" />
                <NavLink className="absolute top-3 left-3 bg-white rounded-lg opacity-50 px-2 py-3 trans-second hover:opacity-100 " to="/">
                    <img src="https://i.imgur.com/YR2XB5I.png" alt=""
                        className="img-fluid w-28 object-cover" />
                </NavLink>
            </div>
            <div className="auth-content flex flex-col justify-center w-[350px]">
                <h2 className="my-[1px] text-3xl font-bold">Get started</h2>
                <span className="text-gray-darker">Already have an account?<NavLink to="/signin" className="text-primary-color font-bold"> Sign In</NavLink></span>
                <form action="" className="mt-[20px] mb-[10px]" id="signUp" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__item input-container">
                        <div className="relative">
                            <input id="full-name"
                                {...register('name', { required: true })}
                                placeholder="Fullname"
                                className="auth__input p-[10px] radius-primary w-[350px] border-[1.2px] border-solid border-gray-primary text-sm outline-none trans-second focus:border-primary-color" type="text" />
                            {/* <!--
                                      <label for="name" className="auth__label absolute top-1/2 left-3 -translate-y-1/2 text-gray-primary text-sm outline-none select-none pointer-events-none trans-second leading-none">Full Name</label>
                                --> */}
                        </div>
                        <div className="error-container pt-[2px] px-[6px] pb-0 text-xs min-h-[13px]">
                            {/* <!--
                                  <span className="error-email ">Email exists</span>
                                --> */}
                        </div>
                    </div>
                    <div className="form__item input-container">
                        <div className="relative">
                            <input id="email"
                                {...register('email', { required: true })}
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
                    <div className="form__item input-container">
                        <div className="relative">
                            <input id="password"
                                {...register('password', { required: true })}
                                placeholder="Password"
                                className="auth__input p-[10px] radius-primary w-[350px] border-[1.2px] border-solid border-gray-primary text-sm outline-none trans-second focus:border-primary-color" type="password" />
                            {/* <!--
                                      <label for="name" className="auth__label absolute top-1/2 left-3 -translate-y-1/2 text-gray-primary text-sm outline-none select-none pointer-events-none trans-second leading-none">Password</label>
                                --> */}
                        </div>
                        <div className="error-container pt-[2px] px-[6px] pb-0 text-xs min-h-[13px]">
                            <span className="error-password"></span>
                        </div>
                    </div>
                    <div className="form__item text-right">
                        <button type="submit" className="auth__button border-none radius-primary bg-primary-color px-[10px] py-[10px] text-white trans-second block w-full mt-1 hover:opacity-90">Sign Up</button>
                    </div>
                </form>
                <div className="auth-content__social">
                    <div className="flex justify-between items-center">
                        <span className="border-b border-solid border-gray-primary w-full"></span>
                        <span className="text-gray-darker block text-center w-full">Or sign up with</span>
                        <span className="border-b border-solid border-gray-primary w-full"></span>
                    </div>
                    <div className="social__content text-center mt-[10px]">
                        <NavLink to="#" className="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i className="bi bi-google leading-snug text-red"></i></NavLink>
                        <NavLink to="#" className="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i className="bi bi-facebook leading-snug text-[#0466e4]"></i></NavLink>
                        <NavLink to="#" className="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i className="bi bi-twitter leading-snug text-[#009ef8]"></i></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register