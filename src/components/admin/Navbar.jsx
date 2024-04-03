import { Menu } from "@mui/icons-material"
import { Avatar } from "@mui/material"

const Navbar = () =>{
    return(
        <>
        <div className="">
        <div className="fixed w-full bg-sky-400 flex justify-between items-center ">
            <Menu className="m-2"/>
            <div className=" text-white">Jai Maa Vashno Devi Juice</div>
            <Avatar className="m-2"/>
        </div>
        </div>
        </>
    )
}
export default Navbar