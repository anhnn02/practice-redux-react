// import React from 'react'
// import { Link } from 'react-router-dom'
// import { NewsType } from '../../types/news'

// type NewsManagerProps = {
//     news: NewsType[],
//     onRemove: (id: number) => void
// }

// const Product = ({ news, onRemove }: NewsManagerProps) => {
//     console.log("object", news);
//     return (
//         <>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Name</th>
//                         <th>Author</th>
//                         <th>Action</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {news?.map((item, index) => {
//                         return <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td>{item.name}</td>
//                             <td>{item.author}</td>
//                             <td>
//                                 <Link to={`/admin/news/${item._id}/edit`}>Edit</Link>
//                             </td>
//                             <td>
//                                 <button onClick={() => onRemove(item._id)}>Remove</button>
//                             </td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default Product