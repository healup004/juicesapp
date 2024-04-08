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
        <div className=" fixed mt-14 bg-gray-400 h-full text-white w-fit ">
            <div className="pt-5 pb-5 pl-8 pr-8 mt-2 mb-2 " onClick={()=>handleClick("DASHBOARD")} style={selectNav == "DASHBOARD" ?{backgroundColor:"white",color:"black"}:{}}>DASHBOARD</div>
            <div className="pt-5 pb-5 pl-8 pr-8 mt-2 mb-2 "onClick={()=>handleClick("ORDERS")} style={selectNav == "ORDERS" ?{backgroundColor:"white",color:"black"}:{}}>ORDERS</div>
            <div className="pt-5 pb-5 pl-8 pr-8 mt-2 mb-2 " onClick={()=>handleClick("CATEGORIES")} style={selectNav == "CATEGORIES" ?{backgroundColor:"white",color:"black"}:{}}>CATEGORIES</div>
            <div className="pt-5 pb-5 pl-8 pr-8 mt-2 mb-2" onClick={()=>handleClick("PRODUCTS")} style={selectNav == "PRODUCTS" ?{backgroundColor:"white",color:"black"}:{}}>PRODUCTS</div>
            <div className="pt-5 pb-5 pl-8 pr-8 mt-2 mb-2 " onClick={()=>handleClick("REVENUE")} style={selectNav == "REVENUE" ?{backgroundColor:"white",color:"black"}:{}}>REVENUE</div>
        </div>
        </>
    )
}
export default Sidebar