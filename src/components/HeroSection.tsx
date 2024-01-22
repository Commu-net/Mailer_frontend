import { Button } from "../components/ui/button"
import "./css/HeroSection.css"
function HeroSection() {
    return ( 
        <div className=" h-[1080px] w-full flex justify-start items-center flex-col">
           <div className="h-[650px] w-full flex justify-start items-center flex-col">
            <div className="h-[70%] mt-[100px] w-[90%] text-[min(18vw,8.5rem)] font-extrabold flex justify-center items-center sm:mt-[0px]">
                <h1><span className="span_1">Comm</span>unet</h1>
            </div>
            <div className="h-[25%] w-[70%] text-[min(4vw,1.5rem)] font-medium text-[#838383] flex justify-center items-center text-center">
                The cold mailer built on microservice architecture, with the capabilities of email scraping 
            </div>
            <div className="h-[25%] w-full gap-4 flex justify-center items-center">

                <Button className="h">Get Started</Button>
                <Button className="dark:bg-black">Learn more</Button>
            </div>
           </div>
           <div className="flex justify-center items-center h-[450px] w-[60%] bg-black">
            <video className="h-full w-full">
                <source src="../assets/video.mp4" type="video/mp4"/> 
                {/* this video thing i snot working as of now */}
            </video>
           </div>
           <div className="h-[100px] w-0 mt-[100px] relative z-6 border border-[0.6px] border-[rgb(220,220,220)] transform rotate-180"></div>
        </div>);
}

export default HeroSection;