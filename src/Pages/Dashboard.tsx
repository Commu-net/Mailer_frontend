import  './css/Dashboard.css'
import DemoPage from '../components/table/page';

export default function Dashboard() {
  
  return (
    <div className="dashboard relative top-20 hzbg-[rgba(169,188,204,0.34)] w-screen">
      <div className='dashboard_header '>
        {/* all , special marked and add enty (blue big ) and create new table  */}
        <div className='dash_headup'>
          <div className='dash_head'>Welcome back!</div>
          <div className='new_ent_cont'><button className='add_new_tab'>Add + </button></div>
        </div>
      </div>
      <div className='table_container'>
        <div className='table_cont_down'>
          <DemoPage />
          {/* this is the table container */}</div>
      </div>
    </div>
  )
}

