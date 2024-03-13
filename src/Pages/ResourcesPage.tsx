import './css/Resource.css'
import communet_image from '../assets/images/comunet_text.png'
import custom_emails from '../assets/images/custom_mail.png'

import { FaGithub } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const ResourcePage = () => {
  return (
    <div className="doc flex justify-center  text-black w-[100%]">
      

      {/* Main content area */}
      <div className=" main_doc py-8 ">
          {/* Documentation content */}
          <div id='getting-started' className='page_start'>
            <div className='page_head'> Getting Started</div>
            <div className='page_intro'>
              Welcome to the official documentation for Communet, a cutting-edge open-source bulk mailing service platform crafted to elevate your email marketing endeavors. Communet offers a robust suite of tools and features, meticulously designed to streamline the entire process, from list management to campaign execution and performance tracking.
              With Communet, users are empowered to efficiently organize and manage their mailing lists, ensuring targeted communication with their audience. Whether you're nurturing leads, engaging with customers, or disseminating information to subscribers, Communet provides the flexibility and scalability to meet your diverse needs.
              Compose personalized emails effortlessly using Communet's intuitive interface and dynamic content capabilities. Tailor your messages with custom templates, dynamic tags, and rich media, ensuring each communication resonates with your recipients on a personal level. From promotional offers to informational newsletters, Communet enables you to deliver impactful content that drives engagement and conversions.</div>
          </div>
          <div>
            <div className='image_cont'>
              <img src={communet_image} alt='communet image' style={{width:"80%"}}></img>
            </div>
          </div>
          <div id='introduction_doc' className='introduction_doc'>
            <div className='introduction_head page_head'> Introduction</div>
            <div className='introduction_body page_intro'>
              Communet is meticulously crafted to cater to a diverse range of users, encompassing businesses, organizations, and individuals alike, who are in pursuit of a reliable and scalable solution for fostering meaningful connections with their audience. Whether you're a budding entrepreneur seeking to forge lasting relationships with your customer base or a seasoned marketing professional entrusted with managing campaigns for a multitude of clients, Communet stands as your steadfast ally, offering a versatile toolkit and unparalleled flexibility to accommodate your distinct requirements and aspirations.
              For small business owners, Communet serves as a pivotal platform to cultivate meaningful interactions with customers. Whether you're launching a new product, announcing special promotions, or simply staying connected with your audience, Communet empowers you to craft compelling email campaigns that resonate with your clientele, driving engagement and fostering brand loyalty.
              Marketing professionals entrusted with overseeing campaigns for multiple clients will find Communet to be a game-changer in their arsenal. With its intuitive interface and robust feature set, Communet simplifies the complexities of managing diverse campaigns, allowing you to execute strategies seamlessly across various client portfolios. From segmenting audiences to tracking campaign performance, Communet equips you with the tools and insights needed to deliver exceptional results for your clients, all from a centralized and efficient platform.
              Regardless of your role or industry, Communet's adaptability and scalability ensure that it remains a valuable asset in your quest to connect with your audience effectively. Whether you're a solopreneur, a burgeoning startup, or a well-established enterprise, Communet adapts to your needs, empowering you to amplify your messaging and achieve your marketing objectives with unparalleled ease and efficiency.</div>
          </div>
          <div id="features" className=" features">
            <h2 className=" page_head">Features</h2>
            <div className='page_intro'>Explore the key features of Communet designed to streamline your email marketing efforts:</div>
            
              <div className='sub_head'>
                1. Bulk Mailing
              </div>
              <div className='sub_body'>
                Effortlessly send bulk emails to your subscribers with Communet's powerful bulk mailing feature. Whether you're sending newsletters, promotional offers, or important announcements, Communet ensures reliable delivery and efficient management of large email campaignsEffortlessly send bulk emails to your subscribers with Communet's powerful bulk mailing feature. Whether you're sending newsletters, promotional offers, or important announcements, Communet ensures reliable delivery and efficient management of large email campaigns..
              </div>
            <div>
              <div className='sub_head'>
                2. Scraping and Storing
              </div>
              <div className='sub_body'>
                Utilize Communet's scraping and storing capabilities to gather email addresses and other relevant information from sources like LinkedIn. Seamlessly store this data within Communet's secure database, ready to be utilized for targeted email campaigns.
              </div>
            </div> <div>
              <div className='sub_head'>
                3. Mailing List Management
              </div>
              <div className='sub_body'>
                Organize and manage your mailing lists effectively with Communet's intuitive interface. Create, edit, and segment your lists to ensure targeted communication with your audience. Import contacts from various sources and maintain clean and up-to-date subscriber lists effortlessly.
              </div>
            </div> <div>
              <div className='sub_head'>
                4. Personalized Email Campaigns (future functionality)
              </div>
              <div className='sub_body'>
                Compose personalized email campaigns with ease using Communet's dynamic content capabilities. Customize your emails with recipient-specific information using dynamic tags. Choose from a library of pre-designed templates or create your own to match your brand identity.
              </div>
              <div className='sub_body'>
                <div className='in_text'> <span style={{color:"rgb(0,160,255)"}}>@name</span> for the name of the profile </div>
                <div className='in_text'> <span style={{color:"rgb(0,160,255)"}}>@company</span> for the company name</div>
                <div className='in_text'> <span style={{color:"rgb(0,160,255)"}}>@occupation</span> for the occupation of the profile</div>
              </div>
              <div className='image_cont' style={{height:"500px"}}>
                 <img src={custom_emails}  style={{height:"80%"}}></img>
              </div>
            </div>
          </div>
          <div id="security" className="security">
            <div className='page_head'>
              Security and User Privacy
            </div>
            <div className='page_intro'>
              Ensuring the security and privacy of our users' data is a top priority at Communet. We have implemented robust measures to safeguard your information and maintain the highest standards of data protection. This section outlines the key security features and practices employed by Communet to protect your privacy:
            </div>
            {/*  ere starts various points regarding security */}
            <div>
              <div className='sub_head'>1. Data Encryption
              </div>
              <div className='sub_body'>
                All data transmitted between your device and Communet's servers is encrypted using industry-standard encryption protocols (such as SSL/TLS). This ensures that your data remains confidential and secure during transit, protecting it from unauthorized access or interception by third parties.
              </div>
            </div>
            <div>
              <div className='sub_head'>2. Secure Storage </div>
              <div className='sub_body'> Your data is stored securely on Communet's servers, which are hosted on trusted and reputable cloud infrastructure providers. We adhere to strict security standards and regularly audit our systems to ensure compliance with industry best practices.</div>
            </div>
            <div>
              <div className='sub_head'>3. User Authentication </div>
              <div className='sub_body'> Communet utilizes strong user authentication mechanisms to verify the identity of users accessing the platform. We support multi-factor authentication (MFA) and encourage users to enable this feature to add an extra layer of security to their accounts. </div>
            </div>
            <div>
              <div className='sub_head'>4. Continuous Improvement </div>
              <div className='sub_body'> We are dedicated to continuously improving our security measures and privacy practices to adapt to evolving threats and challenges. We regularly review and update our security policies, conduct security assessments and audits, and invest in the latest security technologies to safeguard your data effectively. </div>
            </div>
            <div>
              <div className='sub_head'>5. Reporting Security Concerns </div>
              <div className='sub_body'> If you have any security concerns or believe that your data has been compromised, please report it to us immediately at <a href='mailto:communet@gmail.com' style={{color:"rgb(0,100,255)",cursor:"pointer"}}>communet@gmail.com</a>. We take all reports of security incidents seriously and will investigate and address them promptly. </div>
            </div>
          </div>
          <div id='contribute' className='contribute flex flex-col justify-center  items-center gap-[15px] '>
            <div className='page_head gap-[30px]'>
              <div>Contribute to Communet</div>
              <a className='hover:text-blue-400 cursor-pointer' href='https://github.com/orgs/Commu-net/repositories' style={{height:"50px",width:"50px",display:"flex",cursor:"pointer"}}><FaGithub /></a></div>
            <div className='page_intro'>Communet is an open-source project, and we welcome contributions from the community to help improve and enhance the platform. Whether you're a developer, designer, tester, or enthusiast, there are many ways you can contribute to Communet's development and growth. This section outlines how you can get involved and contribute to the project:</div>
            <div>
              <div className='sub_head'> 1. Reporting Issues</div>
              <div className='sub_body'>If you encounter any bugs, errors, or issues while using Communet, we encourage you to report them to us on our GitHub repository. Please provide detailed information about the problem you encountered, including steps to reproduce it and any relevant error messages. Your feedback helps us identify and address issues promptly, improving the overall quality and stability of Communet.</div>
            </div>
            <div>
              <div className='sub_head'>2. Feature Requests</div>
              <div className='sub_body'>Have an idea for a new feature or enhancement that you'd like to see in Communet? We'd love to hear from you! Submit your feature requests on our GitHub repository, and share your vision for how the feature would improve the platform. We value your input and take feature requests into consideration when planning future development efforts.</div>
            </div>
            <div>
              <div className='sub_head'>3. Code Contributions</div>
              <div className='sub_body'> If you're a developer, you can contribute directly to the development of Communet by submitting code contributions via pull requests on GitHub. Whether it's fixing bugs, implementing new features, or improving existing functionality, your contributions are invaluable to the project's success. Please follow our contribution guidelines and coding standards when submitting pull requests to ensure smooth integration into the project.</div>
            </div>
            <div>
              <div className='sub_head'>4. Testing</div>
              <div className='sub_body'>Help ensure the quality and reliability of Communet by participating in testing efforts. You can help test new features, verify bug fixes, and report any issues you encounter during testing. Your testing feedback helps us identify and address potential issues before they affect users, improving the overall stability and performance of Communet.</div>
            </div>
            <div>
              <div className='sub_head'>5. Documentation</div>
              <div className='sub_body'>Good documentation is essential for helping users understand how to use Communet effectively. If you have strong writing skills, you can contribute to the project by improving our documentation. This could involve writing new documentation, updating existing documentation, or translating documentation into different languages. Your contributions help make Communet more accessible and user-friendly for everyone.</div>
            </div>
          </div>
          
          <div id='faqs' className='h-[300px] w-[100%] flex justify-center items-center gap-[20px] flex-col'>
            <h2 className='page_head'>Frequently Asked Questions</h2>
            <div className='w-[100%] px-[1rem]'>
            <Accordion type="single" collapsible className="w-[100%]">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is there any rate limiting on the number of emails to which a mail can be sent at once ?</AccordionTrigger>
                <AccordionContent>
                  Yes. due to constraints on the server, we have a rate limit of 20 emails per request at once.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does the platform supports importing profile via excel sheet ?</AccordionTrigger>
                <AccordionContent>
                   Currently we do not support importing profiles via excel sheet. However, we are working on this feature and it will be available soon.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </div>
          {/* Add more sections of the documentation as needed */}
      </div>

      {/* Sidebar */}
      <div className="side_doc ">
        <div className="inner_side p-4">
          {/* Sidebar navigation links */}
          <ul className="space-y-2 flex justify-start items-start flex-col">
            <li><a href="#getting-started" className="hover:text-blue-500">Getting Started</a></li>
            <li><a href="#introduction_doc" className="hover:text-blue-500">Introduction</a></li>
            <li><a href="#features" className="hover:text-blue-500">Features</a></li>
            <li><a href="#security" className="hover:text-blue-500">Security</a></li>
            <li><a href="#contribute" className="hover:text-blue-500">Contribute</a></li>
            <li><a href="#faqs" className="hover:text-blue-500">FAQs</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
