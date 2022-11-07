import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const AppBarDesktop = () => {
  return (
    <div className="h-[80px] w-[100%] bg-[#28a745] ">
      <div>
        <img
          className="absolute top-[30px] left-[62px] h-[20px] w-[100px] "
          src={logo}
          alt="2"
        />
      </div>
      <ul>
        <li className="absolute top-[30px] left-[608px] h-[34px] w-[199px] text-[#ffffff] text-[16px] font-bold leading-[32px] text-center ">
          <Link to="/">Features</Link>
        </li>
        <li className="absolute top-[30px] left-[817px] h-[34px] w-[199px] text-[#ffffff] text-[16px] font-bold leading-[32px] text-center ">
          <Link to="/">Company</Link>
        </li>
        <li className="absolute top-[30px] left-[1000px] h-[34px] w-[199px] text-[#ffffff] text-[16px] font-bold leading-[32px] text-center ">
          <Link to="/">Help</Link>
        </li>
      </ul>
      <button className="absolute top-[30px] left-[1178px] h-[40px] w-[110px] rounded-[10px] bg-white text-[16px] font-bold text-[#28a745] ">
        Get Started
      </button>
    </div>
  );
};

export default AppBarDesktop;
