import './css/Globalization.css'
import { Player } from '@lottiefiles/react-lottie-player';
import earth from '../assets/json/earth.json'

function Globalization() {
    return ( <div className="Globalization h-[630px] w-full flex justify-start pt-12 items-center flex-col lg:h-[1030px] ">
        <div className="header h-20 w-5/5 flex items-start justify-center text-2xl font-semibold lg:text-4xl">
            Expand your reach globally
        </div>
        <div className="text h-20 w-3/5 text-gray-500 flex items-end justify-center text-[min(3.5vw,1.4rem)] sm: w-4/5">
        Amplify your global reach with Communet, connecting you to a network of potential collaborators, customers and opportunities.
        </div>
        <div className='globe relative md:top-[95px] h-1/2 w-4/5 bg-center bg-contain flex justify-center items-center lg:mt-[30px] sm: top-[45px]'>
             <Player 
             src={earth}
             loop = {true}
             autoplay
             className='planet_cont  md:scale-[0.7] sm: scale-[1]'
            
             
             />
        </div> 
    </div> );
}

export default Globalization;