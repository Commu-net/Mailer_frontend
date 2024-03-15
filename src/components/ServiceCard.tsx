
import { MdMail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import './css/servicecard.css'
function ServiceCard({service}: {service: {icon:number,head:string,desc:string}}) {
    return ( 
    <div className="serviceCard h-[200px] w-[min(100%,400px)] rounded-lg flex justify-center gap-2 items-center flex-col bg-white lg:h-55 sm:h-45 lg:w-[30%]  px-[15px]">
        <div className="iconCont h-12  w-12 rounded-full flex justify-center items-center text-white text-xl">
            {
                service.icon==0  ? (<FaGlobeAmericas />):(null)
            }
            {
                service.icon==1 ? (<MdMail />):(null)
            }
            {
                service.icon==2 ? (<IoPerson />):(null)
            
            }
        </div>
        <div className="serviceHead h-10 w-4/5 flex justify-center items-center text-lg font-semibold">
            {
                service.head
            }
        </div>
        <div className="  h-30 w-7/10 flex text-gray-500 justify-center items-center">
            {
                service.desc
            }
        </div>
    </div> );
}

export default ServiceCard;