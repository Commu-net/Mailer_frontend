import  './css/Dashboard.css'
import DemoPage from '../components/table/page';
import EmailForm from '@/components/emailForm/EmailForm';
import AddProfileForm from '@/components/addProfileForm/AddProfileForm';
import ImportProfileForm from '@/components/importProfileForm/ImportProfileForm';

export default function Dashboard() {

  // wrirte a function to implement create and import data from excel method and pass them to add and import buttons in Demo page and button inside data-table inside DemoPage and do an api call 
  return (
    <div className="dashboard relative top-20  w-screen top-20 pl-2.5 pr-2.5 flex justify-start flex-col items-center space-y-5 md:w-[95%]">
      <div className='email_container h-full w-full fixed z-[105] top-[90%] left-0 md:h-0'>
        <EmailForm />
      </div>
       <div className='dashboard_up h-[15%] w-full flex justify-between items-center'>
        
            <div className='dash_up_left h-full w-3/4 flex justify-center gap-[7px] space-x-1.5 py-0 pl-2.5 items-start flex-col md:gap-[15px] md:pl-4'>
              <div className='dash_head text-lg font-semibold tracking-wider md:text-[30px]'>Welcome Back, Alexis !</div>
              <div className='dash_msg text-sm w-9/10 text-gray-600 text-left font-normal md:text-[20px]'>Here is the list of all email profiles you have saved</div>
            </div>
            <div className='dash_up_right h-full w-1/4 flex justify-center items-center md:justify-end md:pr-[20px]'>
                <div className='un_image h-12 w-12 rounded-full object-cover bg-black text-white flex justify-center items-center md:h-16 md:w-16 md:text-[24px]'>AL</div>
            </div>
      
       </div>
       <div className='dashboard_down space-y-5 h-[85%] w-full flex justify-start flex-col items-center '>
         <div className='up_buttons flex space-x-5 justify-center gap-[20px] items-center h-[10%] w-full md:invisible md:h-0 md:w-0 md:opacity-0 '>
           <AddProfileForm/>
           <ImportProfileForm />
           </div>
         <div className='table_cont overflow-y-scroll h-[95%] w-full flex justify-center items-center flex-col p-0 m-0'>
          <DemoPage />
         </div>
         
       </div>
    </div>
  )
}

