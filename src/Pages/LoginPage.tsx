
import './css/LoginPage.css'
import { FcGoogle } from "react-icons/fc";

import mailanimation from '../assets/json/mailanimation.json'

import { Player } from '@lottiefiles/react-lottie-player';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function LoginPage() {


  return (
    <div className='login h-[728px] w-[100% ] flex justify-center items-center'>
      <div className='image_container'>
        <div className='mail_anim_cont'>
           <Player
            src={mailanimation}
            loop
            autoplay
            className='h-[650px] w-[650px]'
            />
        </div>
      </div>
      <div className='login_sect'>
        <div className='card_container'>
          <div className='log_head'>
            Welcome user
          </div>
          <div className='log_text'>
            Create an account or login using
          </div>
          <div className='log_link'>
            <a
              href='https://api.api-communet.tech/api/v1/user/auth/google'
              className='log_link_t'>
              <div ><FcGoogle className='h-[25px] w-[25px]' /></div>
              <div>Google</div>
            </a> 
          </div>
          <div className='log_terms'>
            By continuing, you agree to our
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className='text-cyan-600'> user agreement</span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Communet</h4>
                    <p className="text-sm">
                      You agree to share your email data with us
                    </p>
                    <div className="flex items-center pt-2">

                      <span className="text-xs text-muted-foreground">
                        to fascilitate mailing services
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>


            and <HoverCard>
              <HoverCardTrigger asChild>
                <span className='text-cyan-600'> privacy policy</span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework - created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">

                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>

    </div>
  )
}
