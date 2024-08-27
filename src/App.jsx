import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
import Brands from './Components/Brands/Brands'
import Login from './Components/Login/Login'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import ProductsBy from './Components/ProductsBy/ProductsBy'
import NotFound from './Components/NotFound/NotFound'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import Wishlist from './Components/Wishlist/Wishlist'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient();

export default function App() {

  const routes = createHashRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { index: true, element: <ProtectedRoute><Home></Home></ProtectedRoute> },
        { path: '/cart', element: <ProtectedRoute><Cart></Cart></ProtectedRoute> },
        { path: '/products', element: <ProtectedRoute><Products></Products></ProtectedRoute> },
        { path: '/categories', element: <ProtectedRoute><Categories></Categories></ProtectedRoute> },
        { path: '/brands', element: <ProtectedRoute><Brands></Brands></ProtectedRoute> },
        { path: '/productsBy/:by/:id', element: <ProductsBy></ProductsBy> },
        { path: '/register', element: <Register></Register> },
        { path: '/login', element: <Login></Login> },
        { path: '/resetPassword', element: <ResetPassword></ResetPassword> },
        { path: 'productDetails/:id/:categoryId', element: <ProtectedRoute><ProductDetails></ProductDetails></ProtectedRoute> },
        { path: '/wishlist', element: <Wishlist></Wishlist> },
        { path: '*', element: <NotFound></NotFound> }
      ]
    }
  ])



  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
      <ToastContainer></ToastContainer>
    </>
  )
}

