import globe from '../assets/images/net_earth.png'
import './css/Globalization.css'
function Globalization() {
    return ( <div className="Globalization h-[630px] w-full flex justify-start pt-12 items-center flex-col lg:h-[1030px] ">
        <div className="header h-20 w-5/5 flex items-start justify-center text-2xl font-semibold lg:text-4xl">
            Expand your reach globally
        </div>
        <div className="text h-20 w-4/5 text-gray-500 flex items-end justify-center text-[min(3.5vw,1.4rem)]">
            with communet you can xpand you r reach globally inmany sectors such as marketing busines e.t.c
        </div>
        <div className='globe relative top-[95px] h-1/2 w-4/5 bg-center bg-contain flex justify-center items-center lg:mt-[200px]'>
           <div className=' h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-[min(195px,27.5vw)] -mt-14 ml-2.5'></div>
        </div>
    </div> );
}

export default Globalization;