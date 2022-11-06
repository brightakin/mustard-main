import { useHistory } from "react-router-dom";

const SignUpMobile = () => {
  let history = useHistory();
  const signUpHandler = (e) => {
    e.preventDefault();
    history.push("/verification");
  };

  return (
    <div className="w-[428px] h-[928px] bg-[#28A745]">
      <span className="absolute text-[30px] text-[#ffffff] top-[60px] left-[24px] ">
        &#8592;
      </span>
      <main className="absolute top-[145px] w-[428px] h-[781px] bg-[#ffffff] rounded-tl-[50px] rounded-tr-[50px] ">
        <h1 className="absolute top-[53px] left-[24px] h-[40px] w-[186px] text-[20px] font-bold text-[#000000] leading-[24px] text-center ">
          Setup Your Account!
        </h1>
        <p className="absolute top-[86px] left-[24px] h-[18px] w-[330px] text-[12px] font-normal text-[#a6a6aa] text-left leading-[16px] ">
          Enter your Information below to create a Mustard.ng account
        </p>
        <div>
          <input
            className="absolute top-[137px] left-[24px] w-[179px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
            type={"text"}
            id="firstName"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            className="absolute top-[137px] left-[222px] w-[182px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
            type={"text"}
            id="Surname"
            name="Surname"
            placeholder="Surname"
          />
        </div>
        <div>
          <input
            className="absolute top-[209px] left-[24px] w-[380px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
            type={"email"}
            id="email"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            className="absolute top-[281px] left-[24px] w-[380px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
            type={"number"}
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            className="absolute top-[353px] left-[24px] w-[380px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
            type={"password"}
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <input
            className="absolute top-[425px] left-[24px] w-[380px] h-[48px] text-[16px] pd-[20px] font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
            type={"text"}
            id="text"
            name="text"
            placeholder="Referral code (optional)"
          />
        </div>
        <div className="absolute top-[493px] left-[24px] w-[378px] h-[46px] ">
          <input type={"checkbox"} id="terms" name="terms" />
          <label htmlFor="terms">
            By Signing Up, You Agree to the Terms of Service and Privacy Policy
          </label>
        </div>
        <button
          onClick={signUpHandler}
          className="absolute top-[565px] left-[24px] h-[48px] w-[380px] rounded-tr-[5px] rounded-tl-[5px] rounded-br-[5px] bg-[#28a745] text-[#ffffff] "
        >
          Sign Up
        </button>
        <p className="absolute top-[638px] left-[114px] h-[8px] w-[203px] text-[16px] font-normal leading-[24px] text-[#a6a6aa] text-center  ">
          Have an account?{" "}
          <span className="text-[#28a745]">
            <a href="#">Sign in</a>
          </span>
        </p>
      </main>
    </div>
  );
};

export default SignUpMobile;
