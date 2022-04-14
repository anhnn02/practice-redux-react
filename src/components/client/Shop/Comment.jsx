import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toastr } from "react-redux-toastr";
import { addComment, getAllComment, removeComment, updateComment } from '../../../features/comment/commentSlice'
import { getProduct, getProductComment } from '../../../features/product/productSlice'
import { isAuthenticate } from '../../../utils/localstorage';

const Comment = () => {
    const [valueUpdateComment, setValueUpdateComment] = useState('')
    const [openUpdateComment, setOpenUpdateComment] = useState(false)
    const [selectInputCommentId, setSelectInputCommentId] = useState('')
    const [comment, setComment] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()
    const commentValue = useSelector(data => data.comment.value)
    const currentProductValue = useSelector(data => data.product.productComment)
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch()
    const { productName } = useParams()

    const AddComment = (value) => {
        const dataComment = {
            comment: value.comment,
            productId: currentProductValue._id,
            userId: user.user._id
        }
        dispatch(addComment(dataComment))
        setComment(dataComment)
    }

    const deleteComment = (idComment) => {
        const toastrConfirmOptions = {
            onOk: () => {
                dispatch(removeComment(idComment))
            },
            onCancel: () => { }
        };
        toastr.confirm('Are you sure you want to remove this comment?', toastrConfirmOptions);
    }

    const showFormUpdate = (idComment) => {
        setOpenUpdateComment(true)
        setSelectInputCommentId(idComment)
    }

    const handleChangeValueTextArena = (event) => {
        setValueUpdateComment(event.target.value);
    }

    const UpdateCommentFormSubmit = (e) => {
        e.preventDefault()
        const infoCommentUpdate = {
            _id: selectInputCommentId,
            comment: valueUpdateComment
        }
        dispatch(updateComment(infoCommentUpdate))
        toastr.success("Comment", "Updated successfully")
        setValueUpdateComment("")
    }

    useEffect(() => {
        dispatch(getAllComment())
        dispatch(getProductComment(productName))
        console.log(commentValue);
        console.log("product", currentProductValue);
    }, [productName, comment])
    return (
        <>
            <div className="max-screen-6xl mx-auto ">
                {user ? (
                    <div className="">
                        <h2 className="font-bold text-xl">Comment</h2>
                        <div className="flex my-2">
                            <img src="https://image.thanhnien.vn/w660/Uploaded/2022/bzivoxbp/2021_01_25/rose_qnem.jpg" className="w-16 h-16 rounded-full object-cover" alt="" />
                            <form action="" className="flex w-full" onSubmit={handleSubmit(AddComment)}>
                                <div className="w-full mx-10">
                                    <textarea className="block w-full bg-transparent border-b focus:border-gray-400 outline-none"
                                        {...register('comment', { required: true })}
                                    ></textarea>
                                    {errors.comment && <span className="text-red-600 block text-lg">Please enter a comment</span>}
                                </div>

                                <div className="text-right">
                                    <button className="border rounded text-lg px-[10px] py-1 inline-block mt-[10px] bg-orange-500 text-white">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="block text-orange-600 text-lg font-bold">Please login to comment</div>
                )}
                <div className="">
                    {commentValue.length > 0 && commentValue.map((comment) => {
                        return comment.productId._id === currentProductValue._id && (
                            <div key={comment._id} className="my-[10px] relative Comment max-w-full">
                                <img src="https://image.thanhnien.vn/w660/Uploaded/2022/bzivoxbp/2021_01_25/rose_qnem.jpg" alt="" className="rounded-full w-[60px] h-[60px] object-cover inline-block" />
                                <span className="absolute text-orange-600  top-[5px] left-[83px]">
                                    <span className="font-bold">
                                        {comment?.userId.name}
                                    </span>
                                    <span className="text-gray-darker pl-2">
                                        {comment?.createdAt.slice(0, -5)}
                                    </span></span>
                                <p className="absolute top-[32px] left-[82px] text-[15px]">
                                    {comment?.comment}
                                </p>
                                <div className="text-gray-400 font-bold">
                                    <button className="ml-[86px] mr-[10px]">Reply</button>
                                    {!user ? "" : user.user?._id === comment?.userId._id && (
                                        <div className="inline-block">
                                            {selectInputCommentId === comment?._id && openUpdateComment ? (
                                                <div className="mb-[20px]">
                                                    <form action="" className="" onSubmit={UpdateCommentFormSubmit}>
                                                        <textarea className="w-full rounded border-gray-300"
                                                            value={valueUpdateComment} onChange={handleChangeValueTextArena}
                                                        ></textarea>
                                                        <button className="border border-black rounded text-[15px] px-[7px] py-[5px] inline-block mt-[10px] bg-blue-500 text-white">Update</button>
                                                    </form>
                                                </div>
                                            ) : (
                                                <button className="mr-[10px]"
                                                    onClick={() => showFormUpdate(comment?._id)}
                                                >Edit</button>
                                            )}
                                            <button className=""
                                                onClick={() => deleteComment(comment?._id)}
                                            >Delete</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </ >
    )
}

export default Comment