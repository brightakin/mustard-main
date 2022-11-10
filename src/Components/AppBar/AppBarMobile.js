import logoMobileImg from "../../Assets/logomobile.png";
import hamburgerIconImg from "../../Assets/hamburgericon.png";

const AppBarMobile = () => {
  return (
    <div>
      <div className="flex justify-between pt-9 px-3 h-[5rem] bg-[#28a745] ">
        <div>
          <img className=" h-[1.5rem] w-[8rem] " src={logoMobileImg} alt="2" />
        </div>
        <div>
          <img
            className="h-[1.5rem] mr-7 w-[1.5rem] "
            src={hamburgerIconImg}
            alt="2"
          />
        </div>
      </div>
    </div>
  );
};

export default AppBarMobile;
