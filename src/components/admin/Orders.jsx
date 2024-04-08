import { CancelSharp, Done } from "@mui/icons-material"
import { Button } from "@mui/material"
const data = [{
    status: 'init',
    data: 'ORANGE JUICE  |  SWEET JUICES',
}, {
    status: 'accept',
    data: 'ORANGE JUICE  |  SWEET JUICES',
}, {
    status: 'cancel',
    data: 'ORANGE JUICE  |  SWEET JUICES',
}, {
    status: 'ready',
    data: 'ORANGE JUICE  |  SWEET JUICES',
}, {
    status: 'complete',
    data: 'ORANGE JUICE  |  SWEET JUICES',
},]


const Orders = () => {
    function Card(props) {
        return (<>

            <div className=" flex justify-between items-center mt-3 mb-3 h-1/3 bg-slate-300 w-full">
                {props.status == "init"
                    ? (<><div><Button className=" bg-blue-500 text-white ">Accept</Button> <Button className=" bg-red-600 text-white">Reject</Button></div></>)
                    : props.status == "accept"
                        ? (<><div><Button className=" bg-green-500 text-white">ready to deliver</Button></div></>)
                        : props.status == 'ready'
                            ? (<><div><Button className=" bg-green-500">delivered</Button></div></>)
                            : props.status == 'cancel'
                                ? (<CancelSharp sx={{ width: 50, height: 50, color: 'red' }} />)
                                : (<Done sx={{ width: 50, height: 50, color: "green" }} />)}
                <div className="flex flex-wrap">{props.data}</div></div>
        </>)
    }
    return (
        <>
            <div className=" h-full bg-blue-500 translate-x-3/4 mt-10 w-full overflow-y-scroll	 ">
                {data.map(val => (<Card status={val.status} data={val.data} />))}
            </div>
        </>
    )
}
export default Orders