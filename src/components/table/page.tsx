import {  columns } from "./columns"
import { DataTable } from "./data-table"
import { payments} from "./dummy"
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
    
  return (
    <div className="container  h-[100%] p-0 w-[100%]">
      <DataTable columns={columns} data={payments} />
    </div>
  )
}
