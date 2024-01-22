import { Button } from "../components/ui/button"
import HeroSection from "@/components/HeroSection";
import ToolInfo from "@/components/ToolInfo";
import './css/LandingPage.css'
function LandingPage() {
    return ( <div className="LandingPage">
        <HeroSection></HeroSection> 
        <ToolInfo></ToolInfo>
    </div>);
}

export default LandingPage;