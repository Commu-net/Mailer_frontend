import { RootState } from "@/redux/store"
import {  columns } from "./columns"
import { DataTable } from "./data-table"
import { useSelector } from "react-redux"
// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

export default  function DemoPage() {
//   const data = 
    const emailList = useSelector((state: RootState) => state.emailList.emailList)
    console.log(emailList)
  return (
    <div className="container max-w-full flex justify-center items-center  h-[100%] p-0 w-[100%]">
      <DataTable columns={columns} data={emailList} />
    </div>
  )
}
