import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="text-xl text-secondary-color">Edit my profile</div>
            <form action="" className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                    <input className="block p-2 border-[1.5px] border-gray-200 rounded-lg my-2 w-full" type="text" placeholder="Fullname" />
                    <input className="block p-2 border-[1.5px] border-gray-200 rounded-lg my-2 w-full" type="text" placeholder="Email" />
                    <input className="block p-2 border-[1.5px] border-gray-200 rounded-lg my-2 w-full" type="text" placeholder="Phone number" />
                    <input className="block p-2 border-[1.5px] border-gray-200 rounded-lg my-2 w-full" type="text" placeholder="Fullname" />
                    <select id="currency" name="currency" className="block p-2 border-[1.5px] border-gray-200 my-2 w-full focus:ring-indigo-500 focus:border-indigo-500  py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        <option>Gender</option>
                        <option>CAD</option>
                        <option>EUR</option>
                    </select>
                    <div className="text-right">
                        <button className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save change
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <img className="img-responsive w-36 h-36 object-cover inline-block rounded-full" src="https://image.thanhnien.vn/w660/Uploaded/2022/bzivoxbp/2021_01_25/rose_qnem.jpg" alt="" />
                    <input type="file" className="block w-full my-2 text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                </div>
            </form>
        </>
    )
}

export default Profile
