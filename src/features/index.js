import { combineReducers } from "redux";
import productSlice from '../features/product/productSlice';
import categorySlice from '../features/categoryPro/cateProSlice';
import userSlice from '../features/user/userSlice';
import proInCateSlice from '../features/categoryPro/proInCateSlice';
import cartSlice from '../features/cart/cartSlice';
import productSearchSlice from '../features/product/productSearchSlice';
import { toastReducer } from 'react-redux-toasts'

const rootReducer = combineReducers({
    toastr: toastReducer,
    product: productSlice,
    category: categorySlice,
    user: userSlice,
    proInCate: proInCateSlice,
    productSearch: productSearchSlice,
    cart: cartSlice,
});


export default rootReducer;
