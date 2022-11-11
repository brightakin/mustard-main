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
import worldImg from "../../Assets/world.png";
import ladyleftImg from "../../Assets/ladyleft.png";
import ladyrightImg from "../../Assets/ladyright.png";
import visaImg from "../../Assets/visa.png";
import phoneTiltImg from "../../Assets/phonetilt.png";
import deepYellowCircleImg from "../../Assets/deepyellowcircle.png";
import footerLogoImg from "../../Assets/footerlogo.png";
import storeIconsImg from "../../Assets/storeicons.png";
import linkedlnIconImg from "../../Assets/linkedlnicon.png";
import twitterIconImg from "../../Assets/twittericon.png";
import youtubeIconImg from "../../Assets/youtubeicon.png";
import instagramIconImg from "../../Assets/instagramicon.png";
import facebookIconImg from "../../Assets/facebookicon.png";
import card2Img from "../../Assets/card2.png";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const HomePageDesktop = () => {
  // const { ref: shadowSectionRef, inView: shadowSectionInView } = useInView();
  // const { ref: sendSectionRef, inView: sendSectionInView } = useInView();
  // const { ref: createSectionRef, inView: createSectionInView } = useInView();
  // const { ref: assetsSectionRef, inView: assetsSectionInView } = useInView();
  // const { ref: worldSectionRef, inView: worldSectionInView } = useInView();
  return (
    <Fragment>
      <AppBar />
      <div className="flex flex-col ">
        <div className="flex justify-between w-full h-[1100px] bg-[#28a745] px-12 pb-[12.25rem] ">
          <div className="flex flex-col pt-[4rem] ">
            <h1 className="text-[#ffffff] h-[180px] w-[754px] text-[75px] text-left font-bold leading-[90px] ">
              Take Control of your money with Mustard!
            </h1>
            <p className="h-[78px] w-[685px] mt-8 text-3xl font-bold text-left text-white ">
              We’re here to help you get the best out of your money, no strings
              attached.
            </p>
            <button
              type="submit"
              className="bg-[#ffffff] text-4xl font-bold w-96 h-32 text-[#28a745] py-7 rounded-[30px] cursor-pointer p-8 mt-[4rem] hover:scale-105 duration-500"
            >
              Create an Account
            </button>
            <div className="flex gap-[2rem]">
              <div className="mt-[14rem]">
                <img
                  className="h-[15px] w-[56px] "
                  src={rectangleImg}
                  alt="rectangle"
                />
                <p className="h-[64px] w-[320px] text-3xl mt-3 font-bold text-left text-[#ffffff] ">
                  Mustard Key figures
                </p>
              </div>
              <div className="mt-[15rem]">
                <p className="h-[43px] w-[206px] text-2xl text-center text-[#ffffff] font-bold ">
                  Active accounts
                </p>
                <p className="h-[55px] w-[142px] text-5xl text-center text-[#ffffff] font-bold ">
                  10K+
                </p>
              </div>
              <div className="mt-[15rem]">
                <p className="h-[43px] w-[206px] text-2xl text-center text-[#ffffff] font-bold ">
                  Total transactions
                </p>
                <p className="h-[55px] w-[142px] text-5xl text-center text-[#ffffff] font-bold ">
                  100K+
                </p>
              </div>
              <div className="mt-[15rem]">
                <p className="h-[43px] w-[206px] text-2xl text-center text-[#ffffff] font-bold ">
                  Total payouts
                </p>
                <p className="h-[55px] w-[142px] text-5xl text-center text-[#ffffff] font-bold ">
                  500.3M
                </p>
              </div>
              <div className="mt-[15rem]">
                <p className="h-[43px] w-[206px] text-2xl text-center text-[#ffffff] font-bold ">
                  Total Investment
                </p>
                <p className="h-[55px] w-[142px] text-5xl text-center text-[#ffffff] font-bold ">
                  10.3K+
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              className="absolute right-[8rem] h-[342px] w-[432px] mt-[4rem] "
              src={cardImg}
              alt="cards"
            />
            <img
              className=" absolute right-[4rem] h-[500px] w-[300px] pt-0 "
              src={phoneImg}
              alt="phone"
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-[2590px] bg-white px-12 pt-[15rem] pb-[12.25rem]">
          <div className="flex">
            <div>
              <p className="h-[20rem] w-[30rem] text-6xl font-bold text-[#28a745] text-left ">
                Save in Dollars & Spend Dollar easily, Anytime, Anywhere.
              </p>
              <p className="h-[12rem] w-[38rem] text-3xl text-left text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
              <a
                href="/"
                className="h-[4rem] w-[43rem] text-4xl text-left text-[#28a745] "
              >
                Start saving in dollar on our new app{" "}
                <span className="text-[30px] text-[#28a745] m-2 ">&#8594;</span>
              </a>
            </div>
            <div>
              <img
                className="absolute h-96 w-96 top-[95rem] left-[42rem] "
                src={bigCircleImg}
                alt="bigCircle"
              />
              <img
                className="absolute z-10 left-[60rem] top-[90rem] "
                src={phoneDashboardImg}
                alt="phoneDashboard"
              />
              <img
                className="absolute w-48 h-48 left-[70rem] top-[100rem] "
                src={smallCircleImg}
                alt="smallCircle"
              />
              <div className="absolute flex bg-white h-14 w-72 left-[46rem] top-[105rem] ">
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
              <div className="absolute bg-white h-14 w-72 left-[46rem] top-[110rem] ">
                <p className="text-[#28a745] h-1 w-24 text-xs ml-5 font-extrabold text-left ">
                  Bank Transfer
                </p>
                <p className="text-[0.5rem] ml-5 mt-5 text-left text-[#3a3a3a] h-9 w-40 ">
                  Transfer from bank app or internet banking to your dedicated
                  accounts.
                </p>
              </div>
              <div className="absolute bg-white h-14 w-72 left-[46rem] top-[115rem] ">
                <p className="text-[#28a745] h-1 w-24 text-xs ml-5 font-extrabold text-left ">
                  Card
                </p>
                <p className="text-[0.5rem] ml-5 mt-5 text-left text-[#3a3a3a] h-9 w-40 ">
                  Add money with a debit card.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              className="mt-[10rem] h-[30rem] w-[32rem] "
              src={card2Img}
              alt="img"
            />
            <div className="ml-[10rem] mt-[10rem] ">
              <p className="h-[20rem] w-[28rem] text-6xl font-bold text-[#28a745] text-left ">
                Create Dollar Card for Internet transactions.
              </p>
              <p className="h-[12rem] w-[38rem] text-3xl text-left text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
              <a
                href="/"
                className="h-[4rem] w-[43rem] text-4xl text-left text-[#28a745] "
              >
                Start saving in dollar on our new app{" "}
                <span className="text-[30px] text-[#28a745] m-2 ">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="mt-[10rem]">
              <p className="h-[20rem] w-[32rem] text-6xl font-bold text-[#28a745] text-left ">
                You can make your money work when you In tangible Assets.
              </p>
              <p className="h-[12rem] w-[38rem] text-3xl text-left text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
              <a
                href="/"
                className="h-[4rem] w-[43rem] text-4xl text-left text-[#28a745] "
              >
                Start saving in dollar on our new app{" "}
                <span className="text-[30px] text-[#28a745] m-2 ">&#8594;</span>
              </a>
            </div>
            <div>
              <img
                className="absolute z-10 h-[33rem] w-[30rem] top-[192rem] left-[50rem] "
                src={joyfulImg}
                alt="joyful"
              />
              <img
                className="absolute h-[33rem] w-[30rem] top-[192rem] left-[50rem] "
                src={bigCircleImg}
                alt="bigcircle"
              />
              <img
                className="absolute w-64 h-56 left-[66rem] top-[185rem] "
                src={busesImg}
                alt="buses"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[80rem] bg-[#28a745] px-2 pt-[10rem] pb-[12.25rem] ">
          <div>
            <p className="h-[10rem] w-[60rem] text-white text-6xl ml-[22rem] font-bold text-right ">
              Send money to anyone, anywhere, anytime without any limitation.
            </p>
            <p className="w-[40rem] text-white h-[40rem] ml-[40rem] text-3xl font-normal text-left ">
              You can easily send money to Domiliciary accounts and local banks
              without stress. You can easily send money to your loved ones and
              they do cash pickup or send in-app through their Mustard tags.
            </p>
            <img
              className="absolute top-[270rem] h-[34rem] w-[75rem]  "
              src={worldImg}
              alt="world"
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-[80rem] bg-white pt-[10rem] pb-[12.25rem] ">
          <div>
            <p className="h-[10rem] w-[85rem] text-[#28a745] text-6xl font-extrabold text-center ">
              For every Mustard User, We provide you an Accountability Manager
            </p>
            <div className="flex h-[26rem] ml-11 w-[80rem] p-3 text-[#3a3a3a] bg-white shadow-2xl">
              <div>
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
        <div className="flex flex-col w-full h-[28rem] bg-[#f8f7fa] ">
          <p className="h-[7rem] w-[30rem] text-6xl text-[#28a745] m-auto font-extrabold text-center ">
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
        <div className="flex flex-col w-full h-[120rem] ">
          <div className="flex h-[39rem] w-[70rem] rounded-3xl bg-[#28A74533] mx-auto mt-[10rem] ">
            <div>
              <p className="h-[10rem] w-[40rem] text-6xl font-bold text-left text-[#28A745] ml-[6rem] mt-[8rem] ">
                Take Control of your money with Mustard!
              </p>
              <p className="h-[4rem] w-[35rem] text-3xl font-bold text-left text-[#3a3a3a] ml-[6rem] ">
                We’re here to help you get the best out of your money, no
                strings attached.
              </p>
              <button
                type="submit"
                className="bg-[#28a745] text-4xl font-bold w-96 h-[6rem] text-[#ffffff] py-7 rounded-[30px] cursor-pointer p-8 mt-[4rem] ml-[5rem] hover:scale-105 duration-500"
              >
                Create an Account
              </button>
            </div>
            <div>
              <img
                className="absolute right-[7rem] top-[439rem] z-10"
                src={phoneTiltImg}
                alt="phonetilt"
              />
              <img
                className="absolute right-[22rem] top-[462.59rem]"
                src={deepYellowCircleImg}
                alt="deepYellowCircle"
              />
              <img
                className="absolute right-[8rem] top-[450rem]"
                src={smallCircleImg}
                alt="smallcircle"
              />
            </div>
          </div>
          <div className="flex gap-[4rem] px-28 ">
            <div className="mt-[30rem]">
              <img
                className="h-12 w-80 "
                src={footerLogoImg}
                alt="footerlogo"
              />
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
              <p className="h-10 w-40 text-sm text-left text-[#3a3a3a] font-bold ">
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
      </div>
    </Fragment>
  );
};

export default HomePageDesktop;
