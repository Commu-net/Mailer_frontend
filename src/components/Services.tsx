import ServiceCard from './ServiceCard';
import './css/services.css'
import { service } from '@/Content/service';
function Services() {
    return ( <div className="services h-[930px] w-[100vw] bg-black flex justify-start items-center flex-col sm:h-[1100px] lg:h-[420px]">
       <div className='service_head text-white flex h-1/6 text-4xl font-semibold tracking-wider w-full justify-center items-center mt-[20px]'>
        Services we offer
       </div>
       {/* services heading  */}
       <div className='service_body h-90 w-3/4 bg-black flex justify-between items-center flex-col lg:flex-row'>
         {
            service.map((service) => {
                return( <ServiceCard service={service} />)
            })
         }
       </div >
       {/* services body */}
    </div> );
}

export default Services;