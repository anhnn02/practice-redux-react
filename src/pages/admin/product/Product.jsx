import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { formatPrice } from '../../../utils/formatNumber';
import { useDispatch, useSelector } from 'react-redux'
import { listProduct, removeProducts } from '../../../features/product/productSlice'
import { DataGrid } from '@mui/x-data-grid';
import { formatPrice } from '../../../utils/formatNumber'

const Product = () => {
  const products = useSelector(data => data.product.value);
  const dispatch = useDispatch();

  const onRemove = (id) => {
    const confirm = window.confirm('Are you sure you want to remove this product?')
    if (confirm) {
      dispatch(removeProducts(id))
    }
  }

  useEffect(() => {
    dispatch(listProduct());
  }, [])

  const columns = [
    { field: 'index', headerName: '#', width: 50 },
    {
      field: 'name',
      headerName: 'Product name',
      width: 140,
      editable: true,
    },
    {
      field: 'img',
      headerName: 'Product Image',
      width: 100,
      editable: true,
      sortable: false,
      renderCell(params) {
        return <div className="w-20 h-20 "><img className="object-cover w-full h-full rounded p-2" src={`${params.row.img}`} alt="" /></div>
      },
    },
    {
      field: 'price',
      headerName: 'Product Price',
      width: 100,
      editable: true,
      renderCell(params) {
        return <div className="truncate">{(params.row.salePrice) ? formatPrice(params.row.salePrice) : formatPrice(params.row.regularPrice)
        }</div>
      },
    },
    {
      field: 'cate',
      headerName: 'Category',
      width: 140,
      renderCell(params) {
        return <div className="truncate px-2 py-1 leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100">{params.row.cate}</div>
      },
    },

    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 100,

    },
    {
      field: 'size',
      headerName: 'Size',
      width: 100,
      editable: true,
    },
    {
      field: 'desc',
      headerName: 'Description',
      width: 140,

    },
    {
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      renderCell(params) {
        return <Link className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-gray"
          to={`/admin/product/${params.id}/edit`}><i className="bi bi-pencil-fill"></i></Link>
      },
      width: 50
    },
    {
      field: 'del',
      headerName: 'Del',
      sortable: false,
      renderCell(params) {
        return <i onClick={() => onRemove(params.id)} className="bi bi-trash-fill cursor-pointer flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"></i>
      },
      width: 50
    },
  ];
  const newData = products?.map((product, index) => {
    return {
      index: index + 1,
      quantity: index + 1,
      action: "",
      id: product._id,
      name: product.name,
      img: product.img,
      regularPrice: product.regularPrice,
      salePrice: product.salePrice,
      desc: product.desc,
      size: product.size,
      cate: product.categoryPro.name
    }
  });


  return (
    <>
      <div className="container px-6 grid grid-cols-2">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
          Products
        </h2>
        <div className="text-right">
          <Link to="/admin/product/add" className="my-6 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded">
            <i className="bi bi-plus"></i>
            Add product
          </Link>
        </div>
      </div>
      <div style={{ height: 460, width: '100%', background: "white" }}>
        <DataGrid
          rows={newData}
          columns={columns}
          pageSize={6}
          checkboxSelection
          disableSelectionOnClick
        />
      </div >
    </>
  )
}

export default Product