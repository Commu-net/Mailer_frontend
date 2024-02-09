import  './css/Dashboard.css'
import DemoPage from '../components/table/page';

export default function Dashboard() {
  
  return (
    <div className="dashboard relative top-20  w-screen">
       <div className='dashboard_up'>
        
            <div className='dash_head'>Welcome Back, Alexis !</div>
            <div className='dash_msg'>Here is the list of all email profiles you have saved</div>
      
       </div>
       <div className='dashboard_down'>
         <div className='up_buttons'>
            <button className='add_btn'>Add New</button>
            <button className='import_btn'>Import</button>
         </div>
         <div className='table_cont overflow-y-scroll'>
          <DemoPage />
         </div>
           
       </div>
    </div>
  )
}

