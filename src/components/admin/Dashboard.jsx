import { Cancel, Done, LocalGroceryStoreSharp, Pending, Sell } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import { ChartsGrid, LineChart } from "@mui/x-charts"
// import userEvent from "@testing-library/user-event"
import { useState } from "react"

const Dashboard = () =>{
    const [xdata , setXdata] = useState([Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10])
    const [lable ,setLable] = useState(['sun','mon','tue','wed','thu','fri','sat'])
    const [done, setDone] = useState(parseInt(Math.random()*50))
    const [cancel, setCancel] = useState(parseInt(Math.random()*50))
    const [placed, setPlaced] = useState(parseInt(Math.random()*100))
    const [pending, setPending] = useState(parseInt(Math.random()*50))
    const [product, setProduct] = useState(parseInt(Math.random()*100))
    return(
        <>
        <div className="h-full translate-x-1/2">
            <div className="">
            <LineChart series={[{curve:"linear", color:"black", data:xdata}]} width={500} height={300} xAxis={[{scaleType:"point", data:lable}]}/>
            <div className="text-center">Orders graph</div>
            </div>
            <div className="flex gap-5 mt-10 mb-12 flex-wrap">
                <Tooltip title="Cancel Orders"><div className="border w-1/6 h-fit border-red-600 justify-center items-center flex flex-col"><Cancel style={{width:50,height:50, color:"red"}}/><div>{cancel}</div></div></Tooltip>
                <Tooltip title="Pending Orders"><div className="border w-1/6 h-fit border-yellow-600 justify-center items-center flex flex-col"><Pending style={{width:50,height:50, color:"yellow"}}/><div>{pending}</div></div></Tooltip>
                <Tooltip title="Completed Orders"><div className="border w-1/6 h-fit border-green-600 justify-center items-center flex flex-col"><Done style={{width:50,height:50, color:"green"}}/><div>{done}</div></div></Tooltip>
                <Tooltip title="Placed Orders"><div className="border w-1/6 h-fit border-sky-600 justify-center items-center flex flex-col"><LocalGroceryStoreSharp style={{width:50,height:50, color:"blue"}}/><div>{placed}</div></div></Tooltip>
                <Tooltip title="Product Orders"><div className="border w-1/6 h-fit border-sky-600 justify-center items-center flex flex-col"><Sell style={{width:50,height:50, color:"lightblue"}}/><div>{product}</div></div></Tooltip>

            </div>
        </div>
        </>
    )
}
export default Dashboard