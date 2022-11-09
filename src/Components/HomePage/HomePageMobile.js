import { Fragment } from "react";
import AppBar from "../AppBar";
import phoneImg from "../../Assets/phone.png";
import cardImg from "../../Assets/cards.png";
import rectangleImg from "../../Assets/rectangle.png";
import bigCircleImg from "../../Assets/bigcircle.png";
import smallCircleImg from "../../Assets/smallcircle.png";
import phoneDashboardImg from "../../Assets/phonedashboard.png";
import icon from "../../Assets/icon.png";
import joyfulImg from "../../Assets/joyful.png";
import busesImg from "../../Assets/buses.png";
import ladyleftImg from "../../Assets/ladyleft.png";
import ladyrightImg from "../../Assets/ladyright.png";
import visaImg from "../../Assets/visa.png";
import footerLogoImg from "../../Assets/footerlogo.png";
import storeIconsImg from "../../Assets/storeicons.png";
import linkedlnIconImg from "../../Assets/linkedlnicon.png";
import twitterIconImg from "../../Assets/twittericon.png";
import youtubeIconImg from "../../Assets/youtubeicon.png";
import instagramIconImg from "../../Assets/instagramicon.png";
import facebookIconImg from "../../Assets/facebookicon.png";
import worldMobileImg from "../../Assets/worldmobile.png";

const HomePageMobile = () => {
  return (
    <Fragment>
      <AppBar />
      <div className="flex flex-col ">
        <div className="flex flex-col justify-between w-[100rem] h-[210rem] bg-[#28a745] px-12 pb-[12.25rem] ">
          <div className="flex flex-col pt-[8rem] ">
            <h1 className="text-[#ffffff] mt-[20rem] h-32 w-full text-9xl text-center font-extrabold">
              Take Control of your money with Mustard!
            </h1>
            <p className="h-[5rem] w-full mt-[20rem] text-8xl font-medium text-center text-white ">
              We’re here to help you get the best out of your money, no strings
              attached.
            </p>
            <button
              type="submit"
              className="bg-[#ffffff] text-6xl mt-[40rem] mx-auto font-bold w-[40rem] h-[13rem] text-[#28a745] py-7 rounded-[30px] cursor-pointer p-8 hover:scale-105 duration-500"
            >
              Create an Account
            </button>
            <div className="flex flex-col mx-[10rem] mt-[60rem]">
              <div className="mt-[5rem]">
                <img
                  className="h-[15px] w-[100px] "
                  src={rectangleImg}
                  alt="rectangle"
                />
                <p className="h-[64px] w-[320px] text-3xl mt-3 font-bold text-left text-[#ffffff] ">
                  Mustard Key figures
                </p>
              </div>
              <div className="flex gap-[40rem] ">
                <div>
                  <div className="mt-[5rem]">
                    <p className="h-[43px] w-[206px] text-2xl text-center text-[#ffffff] font-bold ">
                      Active accounts
                    </p>
                    <p className="h-[55px] w-[142px] text-5xl text-center text-[#ffffff] font-bold ">
                      10K+
                    </p>
                  </div>
                  <div className="mt-[5rem]">
                    <p className="h-[43px] w-[206px] text-2xl text-center text-[#ffffff] font-bold ">
                      Total transactions
                    </p>
                    <p className="h-[55px] w-[142px] text-5xl text-center text-[#ffffff] font-bold ">
                      100K+
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mt-[5rem]">
                    <p className="h-[43px] w-[206px] text-2xl text-center text-[#ffffff] font-bold ">
                      Total payouts
                    </p>
                    <p className="h-[55px] w-[142px] text-5xl text-center text-[#ffffff] font-bold ">
                      500.3M
                    </p>
                  </div>
                  <div className="mt-[5rem]">
                    <p className="h-[43px] w-[206px] text-2xl text-center text-[#ffffff] font-bold ">
                      Total Investment
                    </p>
                    <p className="h-[55px] w-[142px] text-5xl text-center text-[#ffffff] font-bold ">
                      10.3K+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              className="absolute left-[16rem] top-[130rem]  h-[342px] w-full mt-[12rem] "
              src={cardImg}
              alt="cards"
            />
            <img
              className=" absolute top-[130rem] h-[670px] w-full pt-0 "
              src={phoneImg}
              alt="phone"
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%] mx-auto h-[320rem] bg-white px-12 pt-[15rem] pb-[12.25rem]">
          <div className="flex flex-col">
            <div>
              <img
                className="absolute h-96 w-96 top-[240rem] left-[20rem] "
                src={bigCircleImg}
                alt="bigCircle"
              />
              <img
                className="absolute z-10 left-[35rem]  top-[230rem] "
                src={phoneDashboardImg}
                alt="phoneDashboard"
              />
              <img
                className="absolute left-[45rem] top-[240rem] "
                src={smallCircleImg}
                alt="smallCircle"
              />
              <div className="absolute flex bg-white h-14 w-72 left-[18rem] top-[245rem] ">
                <img className="w-10 h-9 " src={icon} alt="icon" />
                <div>
                  {" "}
                  <p className="text-[#28a745] h-1 w-24 text-xs ml-5 font-extrabold text-left ">
                    Request with tag
                  </p>
                  <p className="text-[0.5rem] ml-5 mt-5 text-left text-[#3a3a3a] h-9 w-40 ">
                    You can request money from another Mustard user by sending
                    them your tag to them.
                  </p>
                </div>
              </div>
              <div className="absolute bg-white h-14 w-72 left-[18rem] top-[250rem] ">
                <p className="text-[#28a745] h-1 w-24 text-xs ml-5 font-extrabold text-left ">
                  Bank Transfer
                </p>
                <p className="text-[0.5rem] ml-5 mt-5 text-left text-[#3a3a3a] h-9 w-40 ">
                  Transfer from bank app or internet banking to your dedicated
                  accounts.
                </p>
              </div>
              <div className="absolute bg-white h-14 w-72 left-[18rem] top-[255rem] ">
                <p className="text-[#28a745] h-1 w-24 text-xs ml-5 font-extrabold text-left ">
                  Card
                </p>
                <p className="text-[0.5rem] ml-5 mt-5 text-left text-[#3a3a3a] h-9 w-40 ">
                  Add money with a debit card.
                </p>
              </div>
            </div>
            <div>
              <p className="h-[20rem] w-[50rem] mt-[40rem] mx-[20rem]  text-7xl font-bold text-[#28a745] text-center ">
                Save in Dollars & Spend Dollar easily, Anytime, Anywhere.
              </p>
              <p className="h-[12rem] w-[60rem] mx-[15rem] text-3xl text-center text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-auto ">
            <img
              className="mt-[10rem] mx-[12rem] w-full "
              src={cardImg}
              alt="img"
            />
            <div className="ml-[10rem] mt-[10rem] ">
              <p className="h-[20rem] ml-[15rem] w-[30rem] text-7xl font-bold text-[#28a745] text-center ">
                Create Dollar Card for Internet transactions.
              </p>
              <p className="h-[12rem] w-[50rem] ml-[8rem] text-4xl text-center text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <img
                className="absolute z-10 h-[38rem] w-[35rem] top-[425rem] left-[30rem] "
                src={joyfulImg}
                alt="joyful"
              />
              <img
                className="absolute h-[45rem] w-[45rem] top-[425rem] left-[30rem] "
                src={bigCircleImg}
                alt="bigcircle"
              />
              <img
                className="absolute w-72 h-48 left-[45rem] top-[425rem] "
                src={busesImg}
                alt="buses"
              />
            </div>
            <div className="mt-[10rem]">
              <p className="h-[20rem] w-[40rem] ml-[25rem] mt-[55rem] text-6xl font-bold text-[#28a745] text-center ">
                You can make your money work when you In tangible Assets.
              </p>
              <p className="h-[12rem] w-[50rem] ml-[20rem] text-4xl text-center text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100rem] h-[110rem] bg-[#28a745] px-12 pt-[10rem] pb-[12.25rem] ">
          <div>
            <img
              className="absolute top-[550rem] h-[50rem] w-[50rem] mx-[20rem]  "
              src={worldMobileImg}
              alt="world"
            />
            <p className="h-[10rem] w-full mt-[65rem] text-white text-6xl mx-auto font-bold text-center ">
              Send money to anyone, anywhere, anytime without any limitation.
            </p>
            <p className="w-[60rem] text-white h-[40rem] mx-[12rem] text-4xl font-normal text-center ">
              You can easily send money to Domiliciary accounts and local banks
              without stress. You can easily send money to your loved ones and
              they do cash pickup or send in-app through their Mustard tags.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-[80rem] bg-white px-12 pt-[10rem] pb-[12.25rem] ">
          <div>
            <p className="h-[10rem] w-[85rem] text-[#28a745] text-6xl font-extrabold text-center ">
              For every Mustard User, We provide you an Accountability Manager
            </p>
            <div className=" flex h-[26rem] ml-11 w-[80rem] p-3 text-[#3a3a3a] bg-white shadow-2xl ">
              <div className="flex">
                <img
                  className="absolute h-[11rem] w-[11rem] "
                  src={ladyleftImg}
                  alt="ladyleft"
                />
                <img
                  className="absolute left-[8rem] h-[11rem] w-[11rem] src={ladyrightImg}"
                  src={ladyrightImg}
                  alt="ladyright"
                />
              </div>
              <div>
                <p className="h-[3rem] w-[50rem] ml-[20rem] text-[#3a3a3a] mt-10 text-4xl font-bold text-left ">
                  A better way to improve on your finances
                </p>
                <p className="mt-[2rem] w-[54rem] h-[12rem] ml-[20rem] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                  maecenas. Suspendisse{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100rem] h-[28rem] bg-[#f8f7fa] ">
          <p className="h-[7rem] w-[40rem] text-8xl text-[#28a745] m-auto font-extrabold text-center ">
            Our Partners
          </p>
          <div className="flex justify-between">
            <img className="h-[10rem] w-[12rem] " src={visaImg} alt="" />
            <img className="h-[10rem] w-[12rem] " src={visaImg} alt="" />
            <img className="h-[10rem] w-[12rem] " src={visaImg} alt="" />
            <img className="h-[10rem] w-[12rem] " src={visaImg} alt="" />
            <img className="h-[10rem] w-[12rem] " src={visaImg} alt="" />
          </div>
        </div>
        <div className="flex flex-col w-[100rem] h-[120rem] ">
          <div className="flex h-[60rem] w-[80rem] rounded-3xl bg-[#28A74533] mx-auto mt-[10rem] ">
            <div>
              <p className="h-[10rem] w-[40rem] text-7xl font-bold text-center text-[#28A745] ml-[20rem] mt-[6rem] ">
                Take Control of your money with Mustard!
              </p>
              <p className="h-[4rem] w-[35rem] mt-[5rem] text-3xl font-bold text-center text-[#3a3a3a] ml-[20rem] ">
                We’re here to help you get the best out of your money, no
                strings attached.
              </p>
              <div className="mx-[20rem] pt-28">
                <img src={storeIconsImg} alt="storeIcons" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[4rem] px-28 ">
            <div className="mt-[30rem]">
              <img
                className="h-12 w-80 "
                src={footerLogoImg}
                alt="footerlogo"
              />
            </div>
            <div className="flex gap-[50rem] ">
              <div>
                <div className="mt-[5rem]">
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
                <div className="mt-[5rem]">
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
              </div>
              <div>
                <div className="mt-[5rem]">
                  <p className="h-[43px] w-[206px] text-2xl text-left text-[#28a745] font-bold ">
                    Help
                  </p>
                  <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
                    Get help
                  </p>
                  <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
                    FAQs
                  </p>
                  <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
                    FAQs
                  </p>
                </div>
                <div className="mt-[5rem]">
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
            </div>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageMobile;
