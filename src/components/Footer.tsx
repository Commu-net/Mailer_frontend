import './css/Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
    <div className='footer mt-[10%] h-[260px] w-[85%] rounded-md flex justify-evenly items-center flex-col bg-[#0070F4] l'>
        <div className='footerhead h-1/2 flex justify-center text-4xl font-semibold text-white items-center'>Ready to get started ?</div>
        <div className='footerbottom h-3/4 w-4/5 text-[min(3.5vw,1.2rem)] flex justify-around text-[rgba(255,255,255,0.779)] flex-col lg:flex-row lg:'>
        <div className='footer_desc h-full w-7/10 flex justify-center items-center'>Excited to use but don't know where and how to start how to use ? head to our resources page.</div>
        <div className='link h-[100%] w-[100%] flex items-center justify-center  lg:w-[30%]'>
            <Link to="/resources" className='gs_link h-1/2 rounded-md flex items-center justify-center w-[min(300px,80%)] bg-white lg:h-1/3'>Get started</Link>
        </div>
        </div>
    </div> );
}

export default Footer;