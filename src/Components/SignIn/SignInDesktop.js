import { Fragment } from "react";
import AppBar from "../AppBar";
import icon from "../../Assets/icon.png";

const SignInDesktop = () => {
  return (
    <Fragment>
      <AppBar />
      <div className="relative">
        <div className="container">
          <div className="layer"></div>
        </div>{" "}
        <main className="absolute top-[97px] left-[1440px] w-[887px] h-[912px] bg-[#ffffff] rounded-[30px] ">
          <img
            className="absolute w-[92px] h-[84px] top-[72px] left-[713px] "
            src={icon}
            alt="2"
          />
          <h1 className="absolute top-[95px] left-[25px] h-[40px] w-[486px] text-[40px] font-bold text-[#000000] leading-[40px] text-center ">
            Welcome to Mustard!
          </h1>
          <p className="absolute top-[156px] left-[80px] h-[24px] w-[440px] text-[20px] font-normal text-[#a6a6aa] text-left leading-[16px] ">
            Let’s continue from where you stopped.
          </p>
          <div>
            <input
              className="absolute top-[249px] left-[73px] w-[717px] h-[73px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"email"}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              className="absolute top-[353px] left-[80px] w-[717px] h-[73px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"password"}
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="absolute top-[457px] left-[110px] w-[586px] h-[24px] ">
            <input type={"checkbox"} id="terms" name="terms" />
            <label
              className="text-[20px] font-normal leading-[24px] text-left "
              htmlFor="terms"
            >
              Remember me
            </label>
          </div>
          <button className="absolute top-[514px] left-[80px] h-[80px] w-[717px] rounded-[10px] text-[28px] bg-[#28a745] text-[#ffffff] ">
            Sign Up!
          </button>
          <p className="absolute top-[626px] left-[273px] h-[24px] w-[338px] text-[22px] font-normal leading-[24px] text-[#a6a6aa] text-center  ">
            Forgotten Password?{" "}
            <span className="text-[#28a745]">
              <a href="/">Reset here</a>
            </span>
          </p>
          <p className="absolute top-[698px] left-[273px] h-[24px] w-[338px] text-[22px] font-normal leading-[24px] text-[#3a3a3a] text-center  ">
            Create new account
          </p>
        </main>
      </div>
    </Fragment>
  );
};

export default SignInDesktop;
