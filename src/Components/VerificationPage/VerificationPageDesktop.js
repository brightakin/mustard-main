import { Component, Fragment } from "react";
import AppBar from "../AppBar";
import backgroundLady from "../../Assets/backgroundLady.png";
import classes from "./VerificationPage.module.css";
import icon from "../../Assets/icon.png";
import OtpInput from "react-otp-input";

export default class VerificationPageDesktop extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <Fragment>
        <AppBar />
        <div className="relative">
          <div className={classes.container}>
            <div className={classes.layer}></div>
          </div>{" "}
          <main className="absolute top-[97px] left-[1440px] w-[884px] h-[612px] bg-[rgb(255,255,255)] rounded-[30px] ">
            <img
              className="absolute w-[92px] h-[84px] top-[61px] left-[713px] "
              src={icon}
            />
            <p className="absolute top-[95px] left-[89px] h-[40px] w-[464px] text-[40px] font-bold leading-[40px] text-left ">
              Verify Email Address
            </p>
            <p className="absolute top-[156px] left-[90px] h-[38px] w-[552px] text-[20px] text-[#a6a6aa] font-normal leading-[24px] text-left ">
              We just sent a one-time-password to{" "}
              <span className="text-[#28a745]">n*******@gmail.com</span> .
              Insert it below
            </p>
            <OtpInput
              value={this.state.otp}
              onChange={this.handleChange}
              numInputs={6}
              separator={<span></span>}
              focusStyle={{
                border: "1px solid #28a745",
                outline: "none",
                width: "83px",
                height: "83px",
              }}
              className=" my-[250px] ml-[50px] otp-input pd-[20px] align-middle bg-white mx-2 h-[83px] w-[83px] text-[26px] focus:outline-none focus:shadow-outline border border-[#28a745] rounded-lg flex appearance-none leading-normal"
            />
            <button className="absolute top-[380px] left-[84px] h-[80px] w-[717px] rounded-tr-[5px] rounded-tl-[5px] rounded-br-[5px] text-[28px] bg-[#28a745] text-[#ffffff] ">
              Confirm Email
            </button>
          </main>
        </div>
      </Fragment>
    );
  }
}
