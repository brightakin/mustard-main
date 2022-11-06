import { Fragment } from "react";
import AppBar from "../AppBar";
import backgroundLady from "../../Assets/backgroundLady.png";
import classes from "./ConfirmedVerification.module.css";
import rocketBody from "../../Assets/rocketBody.png";
import rocketCone from "../../Assets/rocketCone.png";
import rocketFire from "../../Assets/rocketFire.png";
import rocketBottom from "../../Assets/rocketBottom.png";
import leftSharp from "../../Assets/leftSharpo.png";
import leftBlunt from "../../Assets/leftBlunt.png";
import rightSharp from "../../Assets/rightSharp.png";
import rightBlunt from "../../Assets/rightBlunt.png";
import rocketCircle from "../../Assets/rocketCircle.png";
import bottomCircle from "../../Assets/bottomCircle.png";

const ConfirmedVerificationDesktop = () => {
  return (
    <Fragment>
      <AppBar />
      <div className="relative">
        <div className={classes.container}>
          <div className={classes.layer}></div>
        </div>{" "}
        <main className="absolute top-[97px] left-[1440px] w-[887px] h-[500px] bg-[#ffffff] rounded-[30px] ">
          <div>
            <img
              className="absolute top-[204px] z-10 left-[189px] h-[29px] w-[37px] "
              src={rocketCone}
            />
            <img
              className="absolute top-[204px] left-[176px] h-[117px] w-[64px] "
              src={rocketBody}
            />
            <img
              className="absolute top-[327px] left-[200px] h-[29px] w-[16px] "
              src={rocketFire}
            />
            <img
              className="absolute top-[305px] left-[185px] h-[21px] w-[45px] "
              src={rocketBottom}
            />
            <img
              className="absolute top-[296px] left-[174px] h-[45px] w-[17px]  "
              src={leftSharp}
            />
            <img
              className="absolute top-[281px] left-[170px] h-[30px] w-[17px]  "
              src={leftBlunt}
            />
            <img
              className="absolute top-[296px] left-[225px] h-[45px] w-[17px]"
              src={rightSharp}
            />
            <img
              className="absolute top-[281px] left-[228px] h-[30px] w-[17px]  "
              src={rightBlunt}
            />
            <img
              className="absolute top-[260px] left-[188px] h-[22px] w-[16px] "
              src={rocketCircle}
            />
            <img
              className="absolute top-[326px] left-[171px] h-[51px] w-[100px] "
              src={bottomCircle}
            />
          </div>
          <p className="absolute top-[242px] left-[300px] h-[40px] w-[600px] text-[40px] font-bold leading-[40px] text-left ">
            Email Verification Successful
          </p>
          <button className="absolute top-[350px] left-[350px] h-[80px] w-[313px] rounded-[10px] bg-[#28a745] text-[28px] font-bold leading-[32px] text-center text-[#ffffff] ">
            Confirm
          </button>
        </main>
      </div>
    </Fragment>
  );
};

export default ConfirmedVerificationDesktop;
