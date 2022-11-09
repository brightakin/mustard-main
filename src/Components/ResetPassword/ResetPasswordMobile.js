import { Fragment } from "react";

const ResetPasswordMobile = () => {
  return (
    <Fragment>
      <span className="absolute h-[17px] w-[18px] text-[30px] text-[#51b960] top-[60px] left-[24px] ">
        &#8592;
      </span>
      <p className="absolute top-[203px] left-[23px] h-[40px] w-[186px] text-[20px] font-bold leading-[24px] text-left ">
        Reset your password
      </p>
      <p className="absolute top-[244px] left-[23px] h-[28px] w-[330px] text-[16px] text-[#a6a6aa] font-normal leading-[24px] text-left ">
        Enter your email address below and we will send a code to reset your
        password.
      </p>
      <div>
        <input
          className="absolute top-[320px] left-[24px] w-[380px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
          type={"email"}
          id="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <button className="absolute top-[401px] left-[24px] h-[48px] w-[380px] rounded-tr-[5px] rounded-tl-[5px] rounded-br-[5px] bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 ">
        Confirm Email
      </button>
    </Fragment>
  );
};

export default ResetPasswordMobile;
