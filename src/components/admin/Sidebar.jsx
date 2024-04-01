import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Sidebar = () =>{
    const [selectNav, setSelectNav] = useState("DASHBOARD")
    const navigate = useNavigate()
    const handleClick = (value)=>{
     setSelectNav(value)
     navigate(`/admin/${value.toLowerCase()}`)
    }
    return(
        <>
        <div>
            <div onClick={()=>handleClick("DASHBOARD")} style={selectNav == "DASHBOARD" ?{backgroundColor:"white",color:"black"}:{}}>DASHBOARD</div>
            <div onClick={()=>handleClick("ORDERS")} style={selectNav == "ORDERS" ?{backgroundColor:"white",color:"black"}:{}}>ORDERS</div>
            <div onClick={()=>handleClick("CATEGORIES")} style={selectNav == "CATEGORIES" ?{backgroundColor:"white",color:"black"}:{}}>CATEGORIES</div>
            <div onClick={()=>handleClick("PRODUCTS")} style={selectNav == "PRODUCTS" ?{backgroundColor:"white",color:"black"}:{}}>PRODUCTS</div>
            <div onClick={()=>handleClick("REVENUE")} style={selectNav == "REVENUE" ?{backgroundColor:"white",color:"black"}:{}}>REVENUE</div>
        </div>
        </>
    )
}
export default Sidebar