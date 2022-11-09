import { Fragment } from "react";
import AppBar from "../AppBar";
import icon from "../../Assets/icon.png";
import { useHistory } from "react-router-dom";

const SignUpDesktop = () => {
  let history = useHistory();
  const signUpHandler = (e) => {
    e.preventDefault();
    history.push("/verification");
  };

  return (
    <Fragment>
      <AppBar />
      <div className="relative">
        <div className="container">
          <div className="layer"></div>
        </div>{" "}
        <main className="absolute top-[97px] left-[400px] w-[887px] h-[1054px] bg-[#ffffff] rounded-[30px] ">
          <img
            className="absolute w-[92px] h-[84px] top-[72px] left-[713px] "
            src={icon}
            alt=""
          />
          <h1 className="absolute top-[95px] left-[25px] h-[40px] w-[486px] text-[40px] font-bold text-[#000000] leading-[40px] text-center ">
            Welcome to Mustard!
          </h1>
          <p className="absolute top-[156px] left-[80px] h-[24px] w-[440px] text-[20px] font-normal text-[#a6a6aa] text-left leading-[16px] ">
            Enter your details below marching your valid ID.
          </p>
          <div>
            <input
              className="absolute top-[216px] left-[80px] w-[334px] h-[72px] text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"text"}
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              className="absolute top-[216px] left-[469px] w-[334px] h-[72px] text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"text"}
              id="Surname"
              name="Surname"
              placeholder="Surname"
            />
          </div>
          <div>
            <input
              className="absolute top-[323px] left-[73px] w-[717px] h-[73px] text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"email"}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              className="absolute top-[431px] left-[80px] w-[717px] h-[73px] text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"number"}
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              className="absolute top-[539px] left-[80px] w-[717px] h-[73px] text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"password"}
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="absolute top-[647px] left-[80px] w-[717px] h-[73px] text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"text"}
              id="text"
              name="text"
              placeholder="Referral code (optional)"
            />
          </div>
          <div className="absolute top-[755px] left-[120px] w-[586px] h-[24px] ">
            <input type={"checkbox"} id="terms" name="terms" />
            <label
              className="text-[20px] font-normal leading-[24px] text-left "
              htmlFor="terms"
            >
              By Signing Up, You Agree to the Terms of Service and Privacy
              Policy
            </label>
          </div>
          <button
            onClick={signUpHandler}
            className="absolute top-[816px] left-[80px] h-[80px] w-[717px] rounded-[10px] text-[28px] bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 "
          >
            Sign Up
          </button>
          <p className="absolute top-[932px] left-[306px] h-[10px] w-[271px] text-[24px] font-normal leading-[24px] text-[#a6a6aa] text-center  ">
            Have an account?{" "}
            <span className="text-[#28a745]">
              <a href="/">Sign in</a>
            </span>
          </p>
        </main>
      </div>
    </Fragment>
  );
};

export default SignUpDesktop;
