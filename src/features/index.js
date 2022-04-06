import { combineReducers } from "redux";
import productSlice from '../features/product/productSlice';
import categorySlice from '../features/categoryPro/cateProSlice';
import userSlice from '../features/user/userSlice';

const rootReducer = combineReducers({
    product: productSlice,
    category: categorySlice,
    user: userSlice,
});


export default rootReducer;
