
import HeroSection from "@/components/HeroSection";
import ToolInfo from "@/components/ToolInfo";
import './css/LandingPage.css'
import Globalization from "@/components/Globalization";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
function LandingPage() {
    return ( <div className="LandingPage h-[3250px] max-w-[1304px] flex justify-start items-center flex-col sm:h-[3600px] lg:h-[3820px]">
        <HeroSection/> 
        <ToolInfo/>
        <Globalization/>
        <Services/>
        <Footer />
    </div>);
}
export default LandingPage;