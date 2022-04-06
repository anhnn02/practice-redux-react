import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/product/productSlice';
import categoryReducer from '../features/categoryPro/cateProSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    category: categoryReducer,
  },
});
