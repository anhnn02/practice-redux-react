// import React, { useEffect } from 'react'
// import { useForm, SubmitHandler } from "react-hook-form"
// import { useNavigate, useParams } from "react-router-dom"
// import { read } from '../../../api/news'
// import { NewsType } from '../../types/news'

// const EditNews = () => {
//     const { register, handleSubmit, formState: { errors }, reset } = useForm();
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         const getNews = async () => {
//             const { data } = await read(id);

//             // truyen du lieu cu vao form, k bug linh tinh
//             reset(data)
//         }
//         getNews();
//     }, [])

//     const onSubmit: SubmitHandler<FormInputs> = data => {
//         props.onUpdate(data);
//         navigate('/admin/news');
//     }
//     return (
//         <form action="" onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" {...register("name", { required: true })} placeholder="News Name" />
//             {errors.name && <span>Field is required!</span>}
//             <input type="text" {...register("author")} placeholder="Author" />
//             <button>Save change</button>
//         </form>
//     )
// }

// export default EditNews