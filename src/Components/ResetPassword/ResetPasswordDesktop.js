import { Fragment } from "react";
import AppBar from "../AppBar";
import classes from "./ResetPassword.module.css";
import icon from "../../Assets/icon.png";

const ResetPasswordDesktop = () => {
  return (
    <Fragment>
      <AppBar />
      <div className="relative">
        <div className={classes.container}>
          <div className={classes.layer}></div>
        </div>{" "}
        <main className="absolute top-[97px] left-[1440px] w-[884px] h-[612px] bg-[#ffffff] rounded-[30px] ">
          <img
            className="absolute w-[92px] h-[84px] top-[72px] left-[713px] "
            src={icon}
            alt=""
          />
          <h1 className="absolute top-[95px] left-[35px] h-[40px] w-[386px] text-[40px] font-bold text-[#000000] leading-[40px] text-center ">
            Reset Password!
          </h1>
          <p className="absolute top-[156px] left-[80px] h-[38px] w-[451px] text-[20px] font-normal text-[#a6a6aa] text-left leading-[16px] ">
            Enter your email address and we will send a code to reset your
            password.
          </p>
          <div>
            <input
              className="absolute top-[234px] left-[73px] w-[717px] h-[73px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[15px] "
              type={"email"}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <button className="absolute top-[370px] left-[80px] h-[80px] w-[717px] rounded-[10px] text-[28px] bg-[#28a745] text-[#ffffff] ">
            Confirm Email
          </button>
        </main>
      </div>
    </Fragment>
  );
};

export default ResetPasswordDesktop;
