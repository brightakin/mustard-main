import AppBar from "../AppBar";
import footerLogoImg from "../../Assets/footerlogo.png";
import storeIconsImg from "../../Assets/storeicons.png";
import linkedlnIconImg from "../../Assets/linkedlnicon.png";
import twitterIconImg from "../../Assets/twittericon.png";
import youtubeIconImg from "../../Assets/youtubeicon.png";
import instagramIconImg from "../../Assets/instagramicon.png";
import facebookIconImg from "../../Assets/facebookicon.png";
import { Link } from "react-router-dom";

const ContactUsDesktop = () => {
  return (
    <div className="w-full h-[180rem]">
      <AppBar />
      <div className="flex gap-[12rem] pt-[8rem] pl-[5rem]">
        <section className="w-[29rem] h-[43rem] border-t-[8px] border-[#28a745] rounded-[24px] shadow-lg">
          <h1 className="w-[21rem] mt-9 text-[#3a3a3a] mx-auto h-8 font-bold text-3xl text-center">
            Send Us Your Request
          </h1>
          <div>
            <div className="flex">
              <div className="mt-[1.5rem] ml-8">
                <label className="text-xl text-[#3a3a3a]">First Name</label>{" "}
                <br />
                <input
                  className=" w-[10.5rem] h-11 text-sm ml-[1rem] mt-2 font-normal text-left border border-[#a6a6aa] rounded-[10px] "
                  type={"text"}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="mt-[1.5rem] ml-8">
                <label className="text-xl text-[#3a3a3a]">Surname</label> <br />
                <input
                  className=" w-[10.5rem] h-11 text-sm ml-[1rem] mt-2 font-normal text-left border border-[#a6a6aa] rounded-[10px] "
                  type={"text"}
                  id="surname"
                  name="surname"
                  placeholder="Surname"
                />
              </div>
            </div>
            <div className="mt-[1.5rem] ml-8">
              <label className="text-xl text-[#3a3a3a]">Email Address</label>{" "}
              <br />
              <input
                className=" w-[24rem] h-11 text-sm ml-[1rem] mt-2 font-normal text-left border border-[#a6a6aa] rounded-[10px] "
                type={"email"}
                id="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mt-[1.5rem] ml-8">
              <label className="text-xl text-[#3a3a3a]">Subject</label> <br />
              <input
                className=" w-[24rem] h-11 text-sm ml-[1rem] mt-2 font-normal text-left border border-[#a6a6aa] rounded-[10px] "
                type={"text"}
                id="email"
                name="email"
                placeholder="Subject"
              />
            </div>
            <div className="mt-[1.5rem] ml-8">
              <label className="text-xl text-[#3a3a3a]">
                How can we help you
              </label>{" "}
              <br />
              <input
                className=" w-[24rem] h-24 text-sm ml-[1rem] mt-2 font-normal text-left border border-[#a6a6aa] rounded-[10px] "
                type={"text"}
                id="help"
                name="help"
                placeholder="Message"
              />
            </div>
          </div>
          <button className="bg-[#28a745] w-52 h-14 rounded-3xl text-2xl font-bold text-white mx-auto mt-[3rem] ml-[8rem]">
            Submit
          </button>
        </section>
        <section>
          <p className="text-[#28a745] font-extrabold text-5xl w-72 h-11 ">
            Contact Us
          </p>
          <p className="w-[32rem] mt-8 text-2xl text-[#3a3a3a] ">
            Do you need help? We are available on every of our channels for
            immediate answer. Everything about us is available on our website
            but is there any other way you need help,
          </p>
          <p className="w-[32rem] text-xl mt-8 text-[#3a3a3a]">reach us via;</p>
          <p className="w-[32rem] underline text-xl mt-6 text-[#28a745]">
            Call: 07019792897
          </p>
          <p className="w-[32rem] text-xl underline text-[#28a745]">
            Email: help@mustard.ng
          </p>
        </section>
      </div>
      <div className="flex gap-[4rem] border-t-2 mt-80  px-28 ">
        <div className="mt-[30rem]">
          <img className="h-12 w-80 " src={footerLogoImg} alt="footerlogo" />
        </div>
        <div className="mt-[31rem]">
          <p className="h-10 w-40 text-2xl text-left text-[#28a745] font-bold ">
            Features
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Dollar Card
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Save
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Invest
          </p>
        </div>
        <div className="mt-[31rem]">
          <p className="h-[43px] w-[206px] text-2xl text-left text-[#28a745] font-bold ">
            Company
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Blog
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Join Our Team
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            About Us
          </p>
        </div>
        <div className="mt-[31rem]">
          <p className="h-[43px] w-[206px] text-2xl text-left text-[#28a745] font-bold ">
            Help
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Get help
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            FAQs
          </p>{" "}
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            <Link to="/contactus">Contact us</Link>
          </p>
        </div>
        <div className="mt-[31rem]">
          <p className="h-[43px] w-[206px] text-2xl text-left text-[#28a745] font-bold ">
            Transparency
          </p>
          <p className="h-10 w-50 text-2xl text-left text-[#3a3a3a] font-bold ">
            Terms & Condition
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Privacy policy
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Investment policy
          </p>
        </div>
      </div>
      <div className="px-28 pt-28">
        <img src={storeIconsImg} alt="storeIcons" />
      </div>
      <div className="flex justify-between px-36 pt-32 ">
        <div>
          <p className="text-[#28a745] h-11 w-48 text-3xl font-bold text-left ">
            Contact
          </p>
          <a
            href="/"
            className="text-[#28a745] w-48 text-2xl font-normal text-left "
          >
            help@mustard.ng
          </a>
          <div className="flex gap-3 mt-6 ">
            <img src={twitterIconImg} alt="twittericon" />
            <img src={instagramIconImg} alt="instagramIcon" />
            <img src={facebookIconImg} alt="facebookIcon" />
            <img src={linkedlnIconImg} alt="linkedlnicon" />
            <img src={youtubeIconImg} alt="youtubeicon" />
          </div>
        </div>
        <div>
          <p className="text-[#28a745] h-11 w-48 text-3xl font-bold text-left">
            Location
          </p>
          <p className="w-40 text-2xl font-normal text-left text-[#3a3a3a]">
            151, Lekki Phase II, Lagos, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDesktop;
