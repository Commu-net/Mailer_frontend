import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
// delete this - this is just for testing
// becaouse we are not using redux store here, we are using a dummy data from the emailContent file
// now we extract user saved profiles from the redux store and pass it to the data prop of the data-table

// import { useSelector } from "react-redux"
// import { RootState } from "@/redux/store"


//  const data = useSelector((state: RootState) => state.emailList.emailList)

export default function DemoPage() {
  const data = useSelector((state: RootState) => state.userData.userLeads)
  return (
    <div className="container max-w-full flex justify-center items-center  h-[100%] p-0 w-[100%]">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
