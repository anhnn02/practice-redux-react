import { combineReducers } from "redux";
import productSlice from '../features/product/productSlice';
import categorySlice from '../features/categoryPro/cateProSlice';
import userSlice from '../features/user/userSlice';
import proInCateSlice from '../features/categoryPro/proInCateSlice';
import productSearchSlice from '../features/product/productSearchSlice';

const rootReducer = combineReducers({
    product: productSlice,
    category: categorySlice,
    user: userSlice,
    proInCate: proInCateSlice,
    productSearch: productSearchSlice,
});


export default rootReducer;
