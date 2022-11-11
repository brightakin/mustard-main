import AppBar from "../AppBar";
import footerLogoImg from "../../Assets/footerlogo.png";
import linkedlnIconImg from "../../Assets/linkedlnicon.png";
import twitterIconImg from "../../Assets/twittericon.png";
import youtubeIconImg from "../../Assets/youtubeicon.png";
import instagramIconImg from "../../Assets/instagramicon.png";
import facebookIconImg from "../../Assets/facebookicon.png";
import { Link } from "react-router-dom";

const ContactUsMobile = () => {
  return (
    <div>
      <AppBar />
      <div className="h-[89rem]">
        <section>
          <p className="text-[#28a745] mx-auto mt-10 text-center font-extrabold text-4xl w-72 h-11 ">
            Contact Us
          </p>
          <p className="w-[22rem] mx-auto text-center mt-8 text-2xl text-[#3a3a3a] ">
            Do you need help? We are available on every of our channels for
            immediate answer.
          </p>
          <p className="w-[23rem] mx-auto text-center mt-8 text-2xl text-[#3a3a3a] ">
            Everything about us is available on our website but is there any
            other way you need help,
          </p>
          <p className="w-[23rem] mx-auto text-center text-xl mt-8 text-[#3a3a3a]">
            reach us via;
          </p>
          <p className="w-[23rem] mx-auto text-center underline text-xl mt-6 text-[#28a745]">
            Call: 07019792897
          </p>
          <p className="w-[23rem] mx-auto text-center text-xl underline text-[#28a745]">
            Email: help@mustard.ng
          </p>
        </section>
      </div>
      <section className="border-t-2 mt-[-20rem]">
        <div className="flex flex-col px-5 gap-[4rem] mx-auto ">
          <div className="mt-[6rem] mr-5">
            <img className="h-6 w-36 " src={footerLogoImg} alt="footerlogo" />
          </div>
          <div className="flex">
            <div>
              <div className="mt-[5rem]">
                <p className="h-10 w-40 text-xl text-left text-[#28a745] font-bold ">
                  Features
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  Dollar Card
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  Save
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  Invest
                </p>
              </div>
              <div className="mt-[5rem]">
                <p className="h-[43px] w-[206px] text-xl text-left text-[#28a745] font-bold ">
                  Company
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  Blog
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  Join Our Team
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  About Us
                </p>
              </div>
            </div>
            <div>
              <div className="mt-[5rem]">
                <p className="h-[43px] w-[206px] text-xl text-left text-[#28a745] font-bold ">
                  Help
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  Get help
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  FAQs
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  <Link to="/contactus">Contact us</Link>
                </p>
              </div>
              <div className="mt-[5rem]">
                <p className="h-[43px] w-[206px] text-xl text-left text-[#28a745] font-bold ">
                  Transparency
                </p>
                <p className="h-10 w-50 text-sm text-left text-[#3a3a3a] font-bold ">
                  Terms & Condition
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  Privacy policy
                </p>
                <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
                  Investment policy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-5 justify-between pt-32 ">
          <div>
            <p className="text-[#28a745] h-11 w-48 text-2xl font-bold text-left ">
              Contact
            </p>
            <a
              href="/"
              className="text-[#28a745] w-48 text-xl font-normal text-left "
            >
              help@mustard.ng
            </a>
          </div>
          <div className="flex gap-3 mt-6 ">
            <img className="6 h-6" src={twitterIconImg} alt="twittericon" />
            <img className="6 h-6" src={instagramIconImg} alt="instagramIcon" />
            <img className="6 h-6" src={facebookIconImg} alt="facebookIcon" />
            <img className="6 h-6" src={linkedlnIconImg} alt="linkedlnicon" />
            <img className="6 h-6" src={youtubeIconImg} alt="youtubeicon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsMobile;
