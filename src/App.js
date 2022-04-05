import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addProduct, listProduct } from './features/productSlice/productSlice';

function App() {
  const product = useSelector(data => data.product.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProduct())
  },[])

  return (
    <div className="App">
      {product?.map((item) => {
        return <div class="">{item.name}</div>
      })}
      <button onClick={() => dispatch(addProduct({name: "Test redux", regularPrice: "100", img: "https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", desc: "abscjhasbjsdasascsa", size: "36, 37, 38", categoryPro: "624b16b66fb90d62cd866a2c"}))}>Add</button>
    </div>
  );
}

export default App;
