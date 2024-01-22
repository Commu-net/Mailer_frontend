
import "./css/HeroSection.css"
function HeroSection() {
    return ( 
        <div className="hero h-[800px] w-full flex justify-center items-center flex-col sm:h-[1080px] 2xl:h-[1280px] pb-[200px]">
           <div className="heromain h-[450px] w-full flex justify-center items-center flex-col sm:h-[650px]">
            <div className="h-[40%]  mt-[30px] w-[90%] text-[min(18vw,8.5rem)] font-extrabold flex justify-center items-end sm:mt-[0px] lg:mt-[50px]">
                <h1><span className="span_1">Comm</span>unet</h1>
            </div>
            <div className="h-[10%] w-[90%] mt-[30px] text-[min(4vw,1.5rem)] font-medium text-[#838383] flex justify-center items-center text-center sm:w-[70%] lg:w-[50%]">
                The cold mailer built on microservice architecture, with the capabilities of email scraping 
            </div>
            <div className="h-[10%] w-full mt-[40px] gap-3 flex justify-center items-center sm:h-[13%] mt-[60px]    ">

                <button className="gs_button h-9 w-28 text-white sm:h-[50px] w-[150px]">Get Started</button>
                <button     className="lm_button  h-9 w-28 text-white sm:h-[50px] w-[150px] ">Learn more</button>
            </div>
           </div>
           <div className=" video_cont flex justify-center items-center h-[170px] w-[80%] bg-black lg:mt-[50px]  lg:w-[60%] lg:h-[36%] sm:h-[32%] sm:w-[70%] ">
            <video className="h-full w-full">
                <source src="../assets/video.mp4" type="video/mp4"/> 
                {/* this video thing i snot working as of now */}
            </video>
           </div>
        </div>);
}

export default HeroSection;