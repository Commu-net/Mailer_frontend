
import "./css/HeroSection.css"

import { Player } from "@lottiefiles/react-lottie-player";
import main from '../assets/json/main.json'
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();
    return ( 
        <div className="hero h-[840px]  w-full flex justify-center items-center flex-col sm:h-[1080px] 2xl:h-[1280px] pb-[200px]">
           <div className="heromain h-[500px] w-full flex justify-center items-center flex-col sm:h-[650px]">
            <div className="h-[40%]  mt-[30px] w-[90%] text-[min(18vw,8.5rem)] font-extrabold flex justify-center items-end sm:mt-[0px] lg:mt-[50px]">
                <h1><span className="span_1">Comm</span>unet</h1>
            </div>
            <div className="h-[10%] w-[90%] mt-[30px] text-[min(4vw,1.5rem)] font-medium text-[#838383] flex justify-center items-center text-center sm:w-[70%] lg:w-[50%]">
            Speed your way to the perfect destination: Reach the right place, audience, and opportunities at the right time.
            </div>
            <div className="h-[10%] w-full mt-[40px] gap-3 flex justify-center items-center sm:h-[13%] mt-[60px]    ">

                <button className="gs_button h-9 w-28 text-white sm:h-[50px] w-[150px]" 
                onClick={()=>{
                    navigate('/login')
                }}>Get Started</button>
                <button     className="lm_button  h-9 w-28 text-white sm:h-[50px] w-[150px] "
                onClick={()=>{
                    navigate('/resources    ')
                }}>Learn more</button>
            </div>
           </div>
           <div className=" video_cont relative top-[50px] flex justify-center items-center h-[100px] w-[80%]  lg:mt-[50px]  lg:w-[60%] lg:h-[36%] sm: h-[32%] sm: w-[90%] ">
              <Player 
              autoplay 
              loop
              src={main}/>
           </div>
        </div>);
}

export default HeroSection;