import  './css/Dashboard.css'
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select"
import { Payment, columns } from "../components/DataTable/Columns"
import { DataTable } from "../components/DataTable/DataTable"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "728ed51f",
      amount: 250,
      status: "pending",
      email: "fus@gace.com",
    },
    {
      id: "728ed50f",
      amount: 654,
      status: "success",
      email: "gay@gamil.com",
    },
    // ...
  ]
}
export default function Dashboard() {
  const [data, setData] = useState<Payment[]>([])
  useEffect(()=>{
    getData().then((data) => {
      setData(data)
    })
  })
  return (
    <div className="dashboard relative top-20 h-[700px] bg-[rgba(169,188,204,0.34)] w-screen">
      <div className='dashboard_header '>
        {/* all , special marked and add enty (blue big ) and create new table  */}
        <div className='dash_headup'>
          <div className='dash_head'>Dashboard</div>
          <div className='new_ent_cont'><button className='add_new_tab'>Add + </button></div>
        </div>
      </div>
      <div className='table_container'>
        <div className='table_cont_up'>{/* this is the search bar container */}
         <div className='search_bar'>
          <input type='text' placeholder='Search' className='srch_input' />
          <button className='srch_btn'>
          <IoIosSearch />
          </button>
         </div>
         <div className='table_cont_up_right'>
           {/* here will be a filter drop down  */}
           <Select >
              <SelectTrigger className="w-[120px] h-[32px]">
                  <SelectValue placeholder="Sort" className='text-[12px]' />
              </SelectTrigger>
                  <SelectContent className='w-[120px]'>
                    <SelectGroup>
                      <SelectLabel>Order by</SelectLabel>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="name (a to z)" className='text-[12px]'>A to Z </SelectItem>
                        <SelectItem value="name (z to a)" className='text-[12px]'>Z to A </SelectItem>
                     </SelectGroup>
                  </SelectContent>
             </Select>
         </div>
        </div>
        <div className='table_cont_down'>
           <DataTable columns={columns} Data={data}/>  
          {/* this is the table container */}</div>
      </div>
    </div>
  )
}