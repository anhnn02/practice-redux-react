import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import { addProduct, listProduct } from './features/product/productSlice';

// pages, components
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import HomePage from './pages/client/HomePage';
import ProductPage from './pages/client/shop/ProductPage';
import ProductCatePage from './pages/client/shop/ProductCatePage';
import ProductDetailPage from './pages/client/shop/ProductDetailPage';
import AboutPage from './pages/client/AboutPage';
import ContactPage from './pages/client/ContactPage';
import NewsPage from './pages/client/news/NewsPage';
import DetailNewsPage from './pages/client/news/DetailNewsPage';
import CartPage from './pages/client/cart/CartPage';
import CheckoutPage from './pages/client/cart/CheckoutPage';
import OrderSuccessfully from './pages/client/cart/OrderSuccessfully';
import UserInvoiceDetail from './components/client/user/UserInvoiceDetail';

import UserProfileLayout from './pages/layouts/UserProfileLayout';
import Profile from './components/client/user/Profile';
import ResetPass from './components/client/user/ResetPass';
import Order from './components/client/user/Order';

import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import CategoryProduct from './pages/admin/cateProduct/Category';
import EditCategory from './pages/admin/cateProduct/EditCategory';
import Product from './pages/admin/product/Product';
import EditProduct from './pages/admin/product/EditProduct';
import AddProduct from './pages/admin/product/AddProduct';
import ListInvoice from './pages/admin/invoice/ListInvoice';
import DetailInvoice from './pages/admin/invoice/DetailInvoice';
import ListUser from './pages/admin/user/ListUser';

import Register from './pages/auth/Register';
import SignIn from './pages/auth/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import AuthLayout from './pages/layouts/AuthLayout';
import ResetPassword from './pages/auth/ResetPassword';

import PrivateRouter from './components/PrivateRouter';
import Page404 from './pages/Page404';
import ListComment from './pages/admin/comment/ListComment';
function App() {
  const product = useSelector(data => data.product.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProduct())
  }, [])

  return (
    <>
      <Routes>
        {/* Website */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/categories/all/:page" element={<ProductPage />} />
          <Route path="/categories/:cateName" element={<ProductCatePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/detail" element={<DetailNewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessfully />} />
          <Route path="/product/:productName" element={<ProductDetailPage />} />

          <Route path="/profile" element={<UserProfileLayout />}>
            <Route index element={<Navigate to="user" />} />
            <Route path="user" element={<Profile />} />
            <Route path="purchase" element={<Order />} />
            <Route path="order-success" element={<OrderSuccessfully />} />
            <Route path="purchase/:id/view" element={<UserInvoiceDetail />} />
            <Route path="change-password" element={<ResetPass />} />
          </Route>
        </Route>

        {/* auth */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset" element={<ForgotPassword />} />
          <Route path="/reset/password" element={<ResetPassword />} />
        </Route>

        {/* Admin */}
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="category-product" element={<CategoryProduct />} />
          <Route path="category-product/:id/edit" element={<EditCategory />} />
          <Route path="invoice" element={<ListInvoice />} />
          <Route path="user" element={<ListUser />} />
          <Route path="comment" element={<ListComment />} />
          <Route path="invoice/:id/view" element={<DetailInvoice />} />
          {/* <Route path="category-news" element={<CategoryNews />} />
          <Route path="category-news/:id/edit" element={<EditCategoryNews />} /> */}

          <Route path="product">
            <Route index element={< Product />} />
            <Route path=":id/edit" element={<EditProduct />} />
            <Route path="add" element={<AddProduct />} />
          </Route>
          {/* <Route path="news">
            <Route index element={<News />} />
            <Route path=":id/edit" element={<EditNews />} />
            <Route path="add" element={<AddNews />} />
          </Route> */}
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
