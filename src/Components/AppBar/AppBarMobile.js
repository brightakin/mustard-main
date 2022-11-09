import logoMobileImg from "../../Assets/logomobile.png";
import hamburgerIconImg from "../../Assets/hamburgericon.png";

const AppBarMobile = () => {
  return (
    <div className="flex justify-between p-16 h-[10rem] w-[102rem] bg-[#28a745] ">
      <div>
        <img className=" h-[70px] w-[350px] " src={logoMobileImg} alt="2" />
      </div>
      <div>
        <img className="h-[5rem] w-[5rem] " src={hamburgerIconImg} alt="2" />
      </div>
    </div>
  );
};

export default AppBarMobile;
