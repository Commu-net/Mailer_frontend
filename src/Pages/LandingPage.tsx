
import HeroSection from "@/components/HeroSection";
import ToolInfo from "@/components/ToolInfo";
import './css/LandingPage.css'
import Globalization from "@/components/Globalization";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";


function LandingPage() {
    const dispatch = useDispatch();
    var storedSubValue = localStorage.getItem('communet_user_sub');
    
    // Check if 'sub' value is already logged in
    if (storedSubValue) {
        console.log('Already logged in');
        dispatch(login());
        // show dashboard and other user-specific content
    } else {
        console.log('Please login');
        // set the protected URL to redirect after successful login
    }


    function isRedirected() {
        // Check if URL contains the expected parameter
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.has('sub'); // Assuming 'sub' parameter indicates successful redirection
    }
    
    // run this only if user is not logged in or communet_user_sub is not in loal storage
    if(!storedSubValue){
        if (isRedirected()) {
            console.log('User is redirected.');
            var sub = new URLSearchParams(window.location.search).toString().split("=")[3];
            // after the user logs in, save the 'sub' value to local storage
            localStorage.setItem('communet_user_sub', sub);
            dispatch(login());
            // show dashboard and other user-specific content
    
        } else {
            console.log('User is not redirected.');
            // when user first time visits the page 
        }
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