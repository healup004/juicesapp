import { DataGrid } from "@mui/x-data-grid"

const Revenue = ()=>{
    const total  =  parseInt(Math.random()*10000)
    const rows  = [{ id: 1, name: 'Hello', mobile: `${parseInt(Math.random()*1000000000)}`, txnId:`txn${parseInt(Math.random()*100)}`, amount: parseInt(Math.random()*100) },
    { id: 2, name: 'Hello', mobile: `${parseInt(Math.random()*1000000000)}`, txnId:`txn${parseInt(Math.random()*100)}`, amount: parseInt(Math.random()*100) },
    { id: 3, name: 'Hello', mobile: `${parseInt(Math.random()*1000000000)}`, txnId:`txn${parseInt(Math.random()*100)}`, amount: parseInt(Math.random()*100) },
    { id: 4, name: 'Hello', mobile: `${parseInt(Math.random()*1000000000)}`, txnId:`txn${parseInt(Math.random()*100)}`, amount: parseInt(Math.random()*100) },
    { id: 5, name: 'Hello', mobile: `${parseInt(Math.random()*1000000000)}`, txnId:`txn${parseInt(Math.random()*100)}`, amount: parseInt(Math.random()*100) },
    { id: 6, name: 'Hello', mobile: `${parseInt(Math.random()*1000000000)}`, txnId:`txn${parseInt(Math.random()*100)}`, amount: parseInt(Math.random()*100) },
    { id: 7, name: 'Hello', mobile: `${parseInt(Math.random()*1000000000)}`, txnId:`txn${parseInt(Math.random()*100)}`, amount: parseInt(Math.random()*100) },
    { id: 8, name: 'Hello', mobile: `${parseInt(Math.random()*1000000000)}`, txnId:`txn${parseInt(Math.random()*100)}`, amount: parseInt(Math.random()*100) }
]
    const column = [
        { field: 'id', headerName: 'S.no.', width: 50 },
        { field: 'name', headerName: 'username', width: 150 },
        { field: 'mobile', headerName: 'mobile', width: 150 },
        { field: 'txnId', headerName: 'transactionId', width: 150 },
        { field: 'amount', headerName: 'amount', width: 150 },

      ]
      
        
    return(
        <>
        <div className="w-fit translate-x-1/4 h-full ">
        <div className="  flex  justify-end items-center h-1/6 bg-gray-400 mt-16 mb-1" >
        <div className=" mr-3 text-white">Total Revenue : {total}</div>
        </div>
        <div className=" h-fit w-full">
        <DataGrid columns={column} rows={rows} dataSet= 'Commodity'
        rowLength= {100}
        maxColumns= {6} pageSizeOptions={[5, 10, 25]}  initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
        }}  />
        </div>
        </div>
        </>
    )
}
export default Revenue