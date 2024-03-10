
import './css/LoginPage.css'
import plane from '../assets/images/plane.png'
import { FcGoogle } from "react-icons/fc";


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
        <div className='planet_cont'>
          <div className='plane'>
            <img src={plane} />
          </div>
        </div>
      </div>
      <div className='login_sect'>
        <div className='card_container'>
          <div className='log_head'>
            Welcome user
          </div>
          <div>
            Create an account or login using
          </div>
          <div>
            <a
              href='https://api.api-communet.tech/api/v1/user/auth/google'
              className='h-[50px] w-[200px] bg-black text-white'>
              <div className='bg-black'><FcGoogle /></div>
              <div className='bg-black'>Google</div>
            </a>
          </div>
          <div>
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
