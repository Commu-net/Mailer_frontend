import features from '../assets/images/features-top-image.png'

import './css/toolinfo.css'
function ToolInfo() {
    return ( <div className=" toolinfo -mt-12 h-[405px] w-screen bg-gray-200 bg-opacity-30 flex justify-around items-center flex-col 2xl:h-[600px]">
    <div className="heading_disc h-1/5 w-4/5 flex justify-center items-center text-2xl font-semibold lg:text-4xl">
        What Communet does ?
    </div>
    <div className='text_mid w-4/5 text h-30 w-4/5 text-gray-500 flex items-end justify-center text-[min(3.5vw,1.4rem)]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non vero nulla quod tempora at 
    </div>
    <div className='image h-1/2 w-4/5 flex justify-center items-center'>
        <img src={features}  className='h-[60%] sm:w-[60%] sm:h-[90%] '/>
    </div>
    </div> );
}

export default ToolInfo;