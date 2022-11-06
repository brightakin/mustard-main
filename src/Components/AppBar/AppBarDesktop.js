import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const AppBarDesktop = () => {
  return (
    <div className="h-[148px] w-full bg-[#28a745] ">
      <div>
        <img
          className="absolute top-[54px] left-[62px] h-[40px] w-[231px] "
          src={logo}
        />
      </div>
      <ul>
        <li className="absolute top-[54px] left-[1200px] h-[34px] w-[199px] text-[#ffffff] text-[28px] font-bold leading-[32px] text-center ">
          <Link to="/">Features</Link>
        </li>
        <li className="absolute top-[54px] left-[1600px] h-[34px] w-[199px] text-[#ffffff] text-[28px] font-bold leading-[32px] text-center ">
          <Link to="/">Company</Link>
        </li>
        <li className="absolute top-[54px] left-[2000px] h-[34px] w-[199px] text-[#ffffff] text-[28px] font-bold leading-[32px] text-center ">
          <Link to="/">Help</Link>
        </li>
      </ul>
      <button className="absolute top-[39px] left-[2300px] h-[70px] w-[210px] rounded-[10px] bg-white text-[28px] font-bold text-[#28a745] ">
        Get Started
      </button>
    </div>
  );
};

export default AppBarDesktop;
