
import HeroSection from "@/components/HeroSection";
import ToolInfo from "@/components/ToolInfo";
import './css/LandingPage.css'
import Globalization from "@/components/Globalization";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { login } from "@/redux/slices/authSlice";


function LandingPage() {
    // we have implemented checklogin in the navbar component, but we also need to check if the user is logged in or not in the landing page
    const isLogged = useSelector((state:RootState) => state.authorization.isLoggedIn);
    const dispatch = useDispatch();
     
     
    
    function isRedirected() {
        // Check if URL contains the expected parameter
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.has('sub'); // Assuming 'sub' parameter indicates successful redirection
    }
    // store user email and name from redirected url into the redux store and sub in local stprage for checing login validity 
    // run this only if user is not logged in or communet_user_sub is not in loal storage
    if(!isLogged){
        if (isRedirected()) {
            const url = new URLSearchParams(window.location.search).toString()
            const userEmail = decodeURIComponent(url.split("=")[1].split("&")[0])
            const userId  = url.split("=")[4]
            const userName = decodeURIComponent(url.split("=")[2].split("+")[0])
            const  sub = url.split("=")[3];
            // after the user logs in, save the 'sub' value to local storage
            localStorage.setItem('communet_user_sub', sub);
            localStorage.setItem('communet_user_email',userEmail);
            localStorage.setItem('communet_user_id',userId);
            localStorage.setItem('communet_user_name',userName);
            dispatch(login());
            // show dashboard and other user-specific content
    
        } else {
            // when user first time visits the page 
        }
    }  



    return ( <div className="LandingPage h-[3150px] max-w-[1304px] flex justify-start items-center flex-col sm:h-[3600px] lg:h-[3820px]">
        <HeroSection/>  
        <ToolInfo/>
        <Globalization/>
        <Services/>
        <Footer />
    </div>);
}
export default LandingPage;