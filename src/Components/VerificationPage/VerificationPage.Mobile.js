import React, { Component, Fragment } from "react";
import OtpInput from "react18-otp-input";

export default class VerificationPageMobile extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <Fragment>
        <span className="absolute h-[17px] w-[18px] text-[30px] text-[#51b960] top-[60px] left-[24px] ">
          &#8592;
        </span>
        <p className="absolute top-[203px] left-[24px] h-[40px] w-[186px] text-[20px] font-bold leading-[24px] text-left ">
          Email verification
        </p>
        <p className="absolute top-[252px] left-[24px] h-[28px] w-[330px] text-[16px] text-[#a6a6aa] font-normal leading-[24px] text-left ">
          We just sent a one-time-password to{" "}
          <span className="text-[#28a745]">n*******@gmail.com</span> . Insert it
          below
        </p>
        <OtpInput
          value={this.state.otp}
          onChange={this.handleChange}
          numInputs={6}
          separator={<span></span>}
          focusStyle={{
            border: "1px solid #28a745",
            outline: "none",
            width: "40px",
            height: "40px",
          }}
          className="m-[341px] otp-input bg-white mx-2 text-lg focus:outline-none focus:shadow-outline border border-[#28a745] rounded-lg  block w-[40px] h-[40px] appearance-none leading-normal"
        />
        <button className="absolute top-[519px] left-[24px] h-[48px] w-[350px] rounded-tr-[5px] rounded-tl-[5px] rounded-br-[5px] bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 ">
          Verify OTP
        </button>
        <p className="absolute top-[669px] left-[80px] h-[8px] w-[245px] text-[16px] font-normal leading-[24px] text-[#a6a6aa] text-center  ">
          {`Didn’t receiveive OTP?`}
          <span className="text-[#28a745]">
            <a href="/cl">Resend</a>
          </span>
        </p>
      </Fragment>
    );
  }
}
