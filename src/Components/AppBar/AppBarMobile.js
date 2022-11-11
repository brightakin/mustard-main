import logoMobileImg from "../../Assets/logomobile.png";
import hamburgerIconImg from "../../Assets/hamburgericon.png";
import { useEffect, useState } from "react";

const AppBarMobile = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[5rem]">
      <div
        className={`flex transition-all z-30 justify-between w-full pt-9 px-3 h-[5rem] bg-[#28a745] ${
          scrolled ? "fixed" : ""
        }`}
      >
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
