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
import card2Img from "../../Assets/card2.png";

const HomePageMobile = () => {
  return (
    <div>
      <AppBar />
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-between w-full h-[85rem] bg-[#28a745] px-12 pb-[12.25rem] ">
          <div className="flex mx-auto flex-col pt-[6rem] ">
            <h1 className="text-[#ffffff] h-32 w-full text-5xl text-center font-extrabold">
              Take Control of your money with Mustard!
            </h1>
            <p className="h-[5rem] w-full mt-[6rem] text-3xl font-medium text-center text-white ">
              We’re here to help you get the best out of your money, no strings
              attached.
            </p>
            <button
              type="submit"
              className="bg-[#ffffff] text-xl mt-[9rem] mx-auto font-bold w-[13rem] h-[4rem] text-[#28a745] rounded-2xl px-2 cursor-pointer hover:scale-105 duration-500"
            >
              Create an Account
            </button>
            <div className="flex flex-col mx-auto mt-[15rem]">
              <div className="mt-[5rem]">
                <img
                  className="h-[9px] w-[50px] "
                  src={rectangleImg}
                  alt="rectangle"
                />
                <p className="h-[64px] w-[320px] text-3xl mt-3 font-bold text-left text-[#ffffff] ">
                  Mustard Key figures
                </p>
              </div>
              <div className="flex ">
                <div>
                  <div className="mt-[5rem]">
                    <p className="h-[43px] w-[180px] text-xl text-center text-[#ffffff] font-bold ">
                      Active accounts
                    </p>
                    <p className="h-[55px] w-[142px] text-3xl text-center text-[#ffffff] font-bold ">
                      10K+
                    </p>
                  </div>
                  <div className="mt-[5rem]">
                    <p className="h-[43px] w-[180px] text-xl text-center text-[#ffffff] font-bold ">
                      Total transactions
                    </p>
                    <p className="h-[55px] w-[142px] text-3xl text-center text-[#ffffff] font-bold ">
                      100K+
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mt-[5rem]">
                    <p className="h-[43px] w-[180px] text-xl text-center text-[#ffffff] font-bold ">
                      Total payouts
                    </p>
                    <p className="h-[55px] w-[142px] text-3xl text-center text-[#ffffff] font-bold ">
                      500.3M
                    </p>
                  </div>
                  <div className="mt-[5rem]">
                    <p className="h-[43px] w-[180px] text-xl text-center text-[#ffffff] font-bold ">
                      Total Investment
                    </p>
                    <p className="h-[55px] w-[142px] text-3xl text-center text-[#ffffff] font-bold ">
                      10.3K+
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col mx-auto">
              <img
                className="absolute mx-auto left-[4rem] top-[36rem]  h-[12rem] w-[16rem] mt-[12rem] "
                src={cardImg}
                alt="cards"
              />
              <img
                className=" absolute left-[10rem] top-[46rem] h-[14rem] w-52 pt-0 "
                src={phoneImg}
                alt="phone"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[158rem] w-full bg-white pt-[15rem] pb-[12.25rem]">
          <div className="flex flex-col mx-auto">
            <div>
              <img
                className="absolute h-56 w-56 top-[98rem] "
                src={bigCircleImg}
                alt="bigCircle"
              />
              <img
                className="absolute left-[11rem] h-64 w-28 z-10 top-[94rem] "
                src={phoneDashboardImg}
                alt="phoneDashboard"
              />
              <img
                className="absolute h-28 left-[15rem] w-28 top-[101rem] "
                src={smallCircleImg}
                alt="smallCircle"
              />
              <div className="absolute flex bg-white h-8 w-40  top-[100rem] ">
                <img className="w-5 h-4 " src={icon} alt="icon" />
                <div>
                  {" "}
                  <p className="text-[#28a745] h-1 w-24 text-[6px] ml-5 font-extrabold text-left ">
                    Request with tag
                  </p>
                  <p className="text-[4px] ml-5 mt-5 text-left text-[#3a3a3a] h-9 w-40 ">
                    You can request money from another Mustard user by sending
                    them your tag to them.
                  </p>
                </div>
              </div>
              <div className="absolute bg-white h-8 w-40 top-[103rem] ">
                <p className="text-[#28a745] h-1 w-24 text-[6px] ml-5 font-extrabold text-left ">
                  Bank Transfer
                </p>
                <p className="text-[4px] ml-5 mt-5 text-left text-[#3a3a3a] h-9 w-40 ">
                  Transfer from bank app or internet banking to your dedicated
                  accounts.
                </p>
              </div>
              <div className="absolute bg-white h-8 w-40 top-[106rem] ">
                <p className="text-[#28a745] h-1 w-24 text-[6px] ml-5 font-extrabold text-left ">
                  Card
                </p>
                <p className="text-[4px] ml-5 mt-5 text-left text-[#3a3a3a] h-9 w-40 ">
                  Add money with a debit card.
                </p>
              </div>
            </div>
            <div>
              <p className="h-[12rem] w-[19rem] mx-auto mt-[10rem] text-4xl font-bold text-[#28a745] text-center ">
                Save in Dollars & Spend Dollar easily, Anytime, Anywhere.
              </p>
              <p className="h-[7rem] w-[19rem] mx-auto text-xl text-center text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-auto ">
            <img className="h-72 w-80 mt-[10rem] " src={card2Img} alt="img" />
            <div className="mt-[10rem] ">
              <p className="h-[12rem] w-[17rem] text-4xl font-bold text-[#28a745] text-center ">
                Create Dollar Card for Internet transactions.
              </p>
              <p className="h-[7rem] w-[19rem] mx-auto text-xl text-center text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-auto  mt-[12rem]">
            <div>
              <img
                className="absolute ml-7 z-10 h-60 w-60"
                src={joyfulImg}
                alt="joyful"
              />
              <img
                className="absolute ml-7 h-52 w-52 "
                src={bigCircleImg}
                alt="bigcircle"
              />
              <img
                className="absolute ml-7 left-[10rem] w-32 h-20"
                src={busesImg}
                alt="buses"
              />
            </div>
            <div className="mt-[20rem]">
              <p className="w-[18rem] h-36 text-4xl font-bold text-[#28a745] text-center ">
                You can make your money work when you In tangible Assets.
              </p>
              <p className="h-[7rem] w-[19rem] mt-8 mx-auto text-xl text-center text-[#3a3a3a] ">
                Mustard uses the highest level of internet security and it is
                protected by Comodo SSL certificate with end-to-end data
                encryption to completely protect your data.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[49rem] w-full bg-[#28a745] pt-[3rem] pb-[6rem] ">
          <div>
            <img
              className="absolute h-64 w-[38rem]"
              src={worldMobileImg}
              alt="world"
            />
            <p className="h-[9rem] w-[23rem] mt-[20rem] text-white text-4xl mx-auto font-bold text-center ">
              Send money to anyone, anywhere, anytime without any limitation.
            </p>
            <p className="text-white mx-auto mt-8 px-4 w-96 h-28 text-2xl font-normal text-center ">
              You can easily send money to Domiliciary accounts and local banks
              without stress. You can easily send money to your loved ones and
              they do cash pickup or send in-app through their Mustard tags.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full h-[64rem] bg-white pt-[3rem] pb-[12.25rem] ">
          <div>
            <p className="text-[#28a745] mx-auto px-4 h-28 w-96 text-3xl font-extrabold text-center ">
              For every Mustard User, We provide you an Accountability Manager
            </p>
            <div className="px-7 pt-11">
              <div className=" flex h-[29rem] mx-auto w-80 text-[#3a3a3a] bg-white shadow-2xl ">
                <div className="flex">
                  <img
                    className="absolute h-32 w-32 "
                    src={ladyleftImg}
                    alt="ladyleft"
                  />
                  <img
                    className="absolute ml-20 h-32 w-32"
                    src={ladyrightImg}
                    alt="ladyright"
                  />
                </div>
                <div>
                  <p className=" text-[#3a3a3a] mt-[10rem] h-16 w-72 text-2xl font-bold text-center ">
                    A better way to improve on your finances
                  </p>
                  <p className="w-[20rem] h-36 pt-4 text-sm px-4 text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Cursus nibh mauris, nec turpis
                    orci lectus maecenas. Suspendisse{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-colw-full h-[24rem] pt-[1rem] pb-3 bg-[#f8f7fa]">
          <p className="h-9 w-full m-auto text-3xl text-[#28a745] font-extrabold text-center ">
            Our Partners
          </p>
          <div className="flex justify-evenly w-full ">
            <div>
              <img className="h-14 w-16 " src={visaImg} alt="" />
              <img className="h-14 w-16 " src={visaImg} alt="" />
            </div>
            <div>
              <img className="h-14 w-16 " src={visaImg} alt="" />
              <img className="h-14 w-16 " src={visaImg} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full">
          <div className="flex h-[29rem] mx-auto w-[21rem] rounded-3xl bg-[#28A74533] mt-[10rem] ">
            <div>
              <p className="h-32 w-80 text-3xl font-bold text-center text-[#28A745] mt-[2rem] ">
                Take Control of your money with Mustard!
              </p>
              <p className="h-[2rem] w-[20rem] text-xl font-bold text-center text-[#3a3a3a]">
                We’re here to help you get the best out of your money, no
                strings attached.
              </p>
              <div className="mt-[10rem]">
                <img src={storeIconsImg} alt="storeIcons" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[4rem] mx-auto ">
            <div className="mt-[8rem] mr-5">
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
                    FAQs
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
          <div className="flex justify-between mx-auto pt-32 ">
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
    </div>
  );
};

export default HomePageMobile;
