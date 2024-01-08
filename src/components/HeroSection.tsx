import { Button } from "../components/ui/button"
import "./css/HeroSection.css"
function HeroSection() {
    return ( 
        <div className=" h-[1080px] w-full flex justify-start items-center flex-col">
           <div className="h-[450px] w-full flex justify-start items-center flex-col">
            <div className="h-[60%] w-[90%] text-[min(18vw,7.5rem)] font-extrabold flex justify-center items-center">
                <h1><span className="span_1">Comm</span>unet</h1>
            </div>
            <div className="h-[15%] w-[65%] text-[min(4vw,1.5rem)] font-medium text-[#b4b4b4] flex justify-center items-center text-center">
                The cold mailer built on microservice architecture, with the capabilities of email scraping 
            </div>
            <div className="h-[25%] w-full gap-4 flex justify-center items-center">

                <Button className="h">Get Started</Button>
                <Button className="dark:bg-black">Learn more</Button>
            </div>
           </div>
           <div className="hero-vid">
            <video>
                <source src="../assets/video.mp4" type="video/mp4"/> 
                {/* this video thing i snot working as of now */}
            </video>
           </div>
        </div> );
}

export default HeroSection;