import { Menu } from "@mui/icons-material"
import { Avatar } from "@mui/material"

const Navbar = () =>{
    return(
        <>
        <div className="">
        <div className="fixed w-full  flex justify-between items-center " style={{backgroundColor:'#BDF4F8'}}>
            <Menu className="m-2"/>
            <div className=" text-white font-bold">Jai Maa Vashno Devi Juice</div>
            <Avatar className="m-2"/>
        </div>
        </div>
        </>
    )
}
export default Navbar