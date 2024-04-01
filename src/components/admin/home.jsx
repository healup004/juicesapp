import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Home  = () =>{
    return(
        <>
        <div className="w-screen h-screen">
            <div>
                <Navbar/>
            </div>
            <div className="flex ">
                <div><Sidebar/></div>
                <div><Outlet/></div>
            </div>
        </div>
        </>
    )
}
export default Home 