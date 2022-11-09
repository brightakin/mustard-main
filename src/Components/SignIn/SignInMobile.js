import { Fragment } from "react";

const SignInMobile = () => {
  return (
    <Fragment>
      <span className="absolute h-[17px] w-[18px] text-[30px] text-[#51b960] top-[60px] left-[24px] ">
        &#8592;
      </span>
      <p className="absolute top-[203px] left-[23px] h-[40px] w-[186px] text-[20px] font-bold leading-[24px] text-left ">
        Welcome Back!
      </p>
      <p className="absolute top-[241px] left-[23px] h-[28px] w-[330px] text-[16px] text-[#a6a6aa] font-normal leading-[24px] text-left ">
        Let’s get you logged back in.
      </p>
      <div>
        <input
          className="absolute top-[310px] left-[24px] w-[380px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
          type={"text"}
          id="text"
          name="text"
          placeholder="Email Address"
        />
        <input
          className="absolute top-[385px] left-[24px] w-[380px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
          type={"text"}
          id="text"
          name="text"
          placeholder="Password"
        />
      </div>
      <button className="absolute top-[518px] left-[24px] h-[48px] w-[350px] rounded-tr-[5px] rounded-tl-[5px] rounded-br-[5px] bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500">
        Sign In
      </button>
      <p className="absolute top-[586px] left-[80px] h-[8px] w-[245px] text-[16px] font-normal leading-[24px] text-[#a6a6aa] text-center  ">
        Forgot your password?
        <span className="text-[#28a745]">
          <a href="/">Reset here</a>
        </span>
      </p>
      <p className="absolute top-[746px] left-[80px] h-[8px] w-[245px] text-[16px] font-normal leading-[24px] text-[#a6a6aa] text-center  ">
        Don’t have an account?
        <span className="text-[#28a745]">
          <a href="/"> Sign Up</a>
        </span>
      </p>
    </Fragment>
  );
};

export default SignInMobile;
