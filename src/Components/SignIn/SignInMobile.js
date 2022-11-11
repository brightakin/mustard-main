import AppBar from "../AppBar";
import icon from "../../Assets/icon.png";

const SignInMobile = () => {
  return (
    <div>
      <AppBar />
      <div className="containermobile">
        <div className="layermobile">
          <div className="bg-white w-96 h-[40rem] pt-[2rem] rounded-[50px] mt-11 mx-auto ">
            <img className=" h-8 w-8 ml-[18rem]" src={icon} alt="" />
            <h1 className="text-xl mt-[-2rem] w-56 h-3 font-bold text-[#000000] text-center ">
              Welcome to Mustard!
            </h1>
            <p className=" text-sm mt-[2rem] ml-[1rem] h-4 w-[20rem] font-normal text-[#a6a6aa] text-left ">
              Enter your details below marching your valid ID.
            </p>
            <div>
              <input
                required
                className="w-[22.5rem] h-11 mt-[1.5rem] ml-[0.8rem] text-sm pl-3 font-normal text-left border border-[#a6a6aa] rounded-[9px] "
                type={"email"}
                id="email"
                name="email"
                placeholder="Phone number"
              />
            </div>
            <div>
              <input
                required
                className="w-[22.5rem] h-11 mt-[1.5rem] ml-[0.8rem] text-sm pl-3 font-normal text-left border border-[#a6a6aa] rounded-[9px] "
                type={"email"}
                id="email"
                name="email"
                placeholder="Password"
              />
            </div>
            <div className=" h-11 w-[22rem] ml-[1.5rem] mt-[1.5rem] ">
              <input type={"checkbox"} id="terms" name="terms" />
              <label
                className="text-sm font-normal leading-[24px] text-left "
                htmlFor="terms"
              >
                Remember me
              </label>
            </div>
            <button className="h-11 w-[22rem] mt-[1.5rem] ml-[1rem] rounded-[4px] text-sm bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 ">
              Sign In
            </button>
            <p className="h-2 w-52 text-sm font-normal mt-[1.5rem] ml-[5.5rem] text-[#a6a6aa] text-center  ">
              Forgot Password ?
              <span className="text-[#28a745]">
                <a href="/">Reset here</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInMobile;
