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
            <div className="flex w-screen">
                <div><Sidebar/></div>
                <div className="mt-10 bg-green-600"><Outlet/></div>
            </div>
        </div>
        </>
    )
}
export default Home 