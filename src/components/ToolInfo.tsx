import features from '../assets/images/features-top-image.png'

import './css/toolinfo.css'
function ToolInfo() {
    return ( <div className=" toolinfo  h-[405px] w-screen bg-gray-200 bg-opacity-30 flex justify-around items-center flex-col 2xl:h-[600px]">
    <div className="heading_disc h-1/5 w-4/5 flex justify-center items-center text-2xl font-semibold lg:text-4xl">
        What is Communet ?
    </div>
    <div className='text_mid md:w-[60%]  text h-30  text-gray-500 flex items-end justify-center text-[min(3.5vw,1.4rem)] sm:w-[90%] '>
    Communet is a bulk mailing utility for targeted outreach, connecting you with the right audience, in the right way to maximize your opportunities.
    </div>
    <div className='image md:h-[70%] w-4/5 flex justify-center items-center sm:h-[90%]'>
        <img src={features}  style={{height:"80%", width:"auto"}} alt='feat'/>
    </div>
    </div> );
}

export default ToolInfo;