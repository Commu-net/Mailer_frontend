import  './css/Dashboard.css'
import { IoIosSearch } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select"

export default function Dashboard() {
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
           <Select>
              <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                     </SelectGroup>
                  </SelectContent>
             </Select>
         </div>
        </div>
        <div className='table_cont_down'>{/* this is the table container */}</div>
      </div>
    </div>
  )
}