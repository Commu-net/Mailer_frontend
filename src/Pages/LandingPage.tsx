
import HeroSection from "@/components/HeroSection";
import ToolInfo from "@/components/ToolInfo";
import './css/LandingPage.css'
import Globalization from "@/components/Globalization";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
function LandingPage() {
    function isRedirected() {
        // Check if URL contains the expected parameter
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.has('sub'); // Assuming 'sub' parameter indicates successful redirection
    }
    
    // Example usage
    if (isRedirected()) {
        console.log('User is redirected.');
        // Proceed with handling the redirection, like storing the 'sub' value
    } else {
        console.log('User is not redirected.');
        // Handle the case when the user is not redirected, maybe show an error message or redirect them to the login page
    }
    return ( <div className="LandingPage h-[3250px] max-w-[1304px] flex justify-start items-center flex-col sm:h-[3600px] lg:h-[3820px]">
        <HeroSection/> 
        <ToolInfo/>
        <Globalization/>
        <Services/>
        <Footer />
    </div>);
}
export default LandingPage;