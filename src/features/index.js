import { combineReducers } from "redux";
import productSlice from '../features/product/productSlice';
import categorySlice from '../features/categoryPro/cateProSlice';
import userSlice from '../features/user/userSlice';
import proInCateSlice from '../features/categoryPro/proInCateSlice';
import cartSlice from '../features/cart/cartSlice';
import productSearchSlice from '../features/product/productSearchSlice';
import { reducer as toastrReducer } from 'react-redux-toastr'
import invoiceSlice from "../features/invoice/invoiceSlice";
import commentSlice from "./comment/commentSlice";

const rootReducer = combineReducers({
    toastr: toastrReducer,
    product: productSlice,
    category: categorySlice,
    user: userSlice,
    proInCate: proInCateSlice,
    productSearch: productSearchSlice,
    cart: cartSlice,
    invoice: invoiceSlice,
    comment: commentSlice
});


export default rootReducer;
