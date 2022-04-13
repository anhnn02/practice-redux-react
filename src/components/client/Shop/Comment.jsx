import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toastr } from "react-redux-toastr";
import { addComment, getAllComment, removeComment, updateComment } from '../../../features/comment/commentSlice'
import { getProduct } from '../../../features/product/productSlice'

const Comment = () => {
    const [valueUpdateComment, setValueUpdateComment] = useState('')
    const [openUpdateComment, setOpenUpdateComment] = useState(false)
    const [selectInputCommentId, setSelectInputCommentId] = useState('')
    const [comment, setComment] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()
    const commentValue = useSelector(data => data.comment.value)
    const currentProductValue = useSelector(data => data.product.value)
    // const user = useSelector(state => state.user.info.user);
    const dispatch = useDispatch()
    const { productName } = useParams()

    const AddComment = (value) => {
        const dataComment = {
            comment: value.comment,
            productId: currentProductValue._id,
            // userId: user._id
        }
        dispatch(addComment(dataComment))
        setComment(dataComment)
        console.log("Render sau khi add", commentValue);
    }

    const deleteComment = (idComment) => {
        const toastrConfirmOptions = {
            onOk: () => {
                dispatch(removeComment(idComment))
            },
            onCancel: () => {}
        };
        toastr.confirm('Bạn muốn xóa bình luận?', toastrConfirmOptions);
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
        dispatch(getProduct(productName))
        console.log("first", commentValue)
    }, [productName, comment])
    return (
        <>
            <div className="  w-[1170px] mx-auto ">
                {(1==1) ? (
                    <div className="">
                        <h2 className="font-bold text-xl">Bình Luận</h2>
                        <form action="" className=""
                            onSubmit={handleSubmit(AddComment)}
                        >
                            <textarea className="w-full rounded border border-gray-300 h-[80px] focus:border-gray-100"
                                {...register('comment', { required: true })}
                            ></textarea>
                            <div className="text-right">
                                <button className="border rounded text-lg px-[10px] py-1 inline-block mt-[10px] bg-orange-500 text-white">Send</button>
                            </div>
                        </form>
                        {errors.comment && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng bình luận trước khi gửi</span>}
                    </div>
                ) : (
                    <div className="text-red-500 font-bold text-[25px] my-[20px]">Vui lòng đăng nhập để bình luận</div>
                )}
                <div className="">
                    { commentValue.length > 0 && commentValue.map((comment) => (
                        // comment.product._id === currentProductValue._id && (
                        comment.productId._id === currentProductValue._id && (
                            <div className="my-[10px] relative Comment max-w-full">
                                <img src="https://image.thanhnien.vn/w660/Uploaded/2022/bzivoxbp/2021_01_25/rose_qnem.jpg" alt="" className="rounded-full w-16 h-16 object-cover inline-block" />
                                <span className="absolute text-orange-600  top-[5px] left-[83px]">
                                    <span className="font-bold">
                                    {comment.userId.name}
                                    </span>
                                    <span className="text-gray-darker pl-2">
                                        {comment?.createdAt.slice(0, -5)}
                                    </span></span>
                                <p className="absolute top-[32px] left-[82px] text-[15px]">
                                    {comment.comment}
                                </p>
                                <div className="text-gray-400 font-bold">
                                    <button className="mx-[86px]">Trả lời</button>
                                    {/* {user?._id === comment.User._id && (
                                        <div className="inline-block">
                                            {selectInputCommentId === comment._id && openUpdateComment ? (
                                                <div className="mb-[20px]">
                                                    <form action="" className=""
                                                        onSubmit={UpdateCommentFormSubmit}
                                                    >
                                                        <textarea className="w-full rounded border-gray-300"
                                                            value={valueUpdateComment} onChange={handleChangeValueTextArena}
                                                        ></textarea>
                                                        <button className="border border-black rounded text-[15px] px-[7px] py-[5px] inline-block mt-[10px] bg-blue-500 text-white">Update</button>
                                                    </form>
                                                </div>
                                            ) : (
                                                <button className="mr-[10px]"
                                                    onClick={() => showFormUpdate(comment._id)}
                                                >Chỉnh Sửa</button>
                                            )}
                                            <button className=""
                                                onClick={() => deleteComment(comment._id)}
                                            >Xóa</button>
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </ >
    )
}

export default Comment