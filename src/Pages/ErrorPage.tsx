import { Player } from "@lottiefiles/react-lottie-player";
import error from '../assets/json/error.json'
import './css/ErrorPage.css'

function ErrorPage (){
    return (
        <div className="error_page">
            <Player
                autoplay
                loop
                src={error}
                style={{ height: '100%' }} />
            <div className="error_text_cont">
                <div className="error_text">Page not available</div>
            </div>
            
            
        </div>
    )
}

export default ErrorPage;