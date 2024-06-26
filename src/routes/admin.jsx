import { Route, Routes } from "react-router-dom"
import Dashboard from "../components/admin/Dashboard"
// import Navbar from "../components/admin/Navbar"
import Orders from "../components/admin/Orders"
import Category from "../components/admin/Categories"
import Products from "../components/admin/Product"
import Revenue from "../components/admin/Revenue"
import Home from "../components/admin/home"

const AdminRoute = ()=>{
    return(
        <>
        <Routes>
            <Route path="admin" element={<Home/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="categories" element={<Category/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="revenue" element={<Revenue/>}/>
            </Route>
        </Routes>
        </>
    )
}
export default AdminRoute