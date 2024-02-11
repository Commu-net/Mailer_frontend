import  './css/Dashboard.css'
import DemoPage from '../components/table/page';
import EmailForm from '@/components/emailForm/EmailForm';
import { useEffect } from 'react';

export default function Dashboard() {
  useEffect(()=>{
    async function getUserData(email:string) {
  const response = await fetch('https://api.api-communet.tech/api/v1/user/auth/google', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body:{
      'userEmail':`${email}`
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data)
  return data;

}

getUserData('internship4857@gmail.com')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  })
  return (
    <div className="dashboard relative top-20  w-screen">
      <div className='email_container'>
        <EmailForm />
      </div>
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

