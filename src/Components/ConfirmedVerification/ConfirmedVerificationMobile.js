import rocketBody from "../../Assets/rocketBody.png";
import rocketCone from "../../Assets/rocketCone.png";
import rocketFire from "../../Assets/rocketFire.png";
import rocketBottom from "../../Assets/rocketBottom.png";
import leftSharp from "../../Assets/leftSharpo.png";
import leftBlunt from "../../Assets/leftBlunt.png";
import rightSharp from "../../Assets/rightSharp.png";
import rightBlunt from "../../Assets/rightBlunt.png";
import rocketCircle from "../../Assets/rocketCircle.png";
import bottomCircle from "../../Assets/bottomCircle.png";

const ConfirmedVerificationMobile = () => {
  return (
    <div className="h-[926px] w-[428px] bg-gradient-to-br from-yellow-100 via-[rgba(255, 255, 255, 0.652918)] to-[rgba(255, 255, 255, 0)] ">
      <div>
        <img
          className="absolute top-[204px] z-10 left-[189px] h-[29px] w-[37px] "
          src={rocketCone}
          alt="2"
        />
        <img
          className="absolute top-[204px] left-[176px] h-[117px] w-[64px] "
          src={rocketBody}
          alt="2"
        />
        <img
          className="absolute top-[327px] left-[200px] h-[29px] w-[16px] "
          src={rocketFire}
          alt="2"
        />
        <img
          className="absolute top-[305px] left-[185px] h-[21px] w-[45px] "
          src={rocketBottom}
          alt="2"
        />
        <img
          className="absolute top-[296px] left-[174px] h-[45px] w-[17px]  "
          src={leftSharp}
          alt="2"
        />
        <img
          className="absolute top-[281px] left-[170px] h-[30px] w-[17px]  "
          src={leftBlunt}
          alt="2"
        />
        <img
          className="absolute top-[296px] left-[225px] h-[45px] w-[17px]"
          src={rightSharp}
          alt="2"
        />
        <img
          className="absolute top-[281px] left-[228px] h-[30px] w-[17px]  "
          src={rightBlunt}
          alt="2"
        />
        <img
          className="absolute top-[260px] left-[188px] h-[22px] w-[16px] "
          src={rocketCircle}
          alt="2"
        />
        <img
          className="absolute top-[326px] left-[171px] h-[51px] w-[100px] "
          src={bottomCircle}
          alt="2"
        />
      </div>
      <main>
        <p className="absolute top-[411px] left-[72px] h-[40px] w-[288px] text-[#3a3a3a] text-[28px] font-bold leading-[32px] text-center ">
          Verification Successful
        </p>
        <p className="absolute top-[465px] left-[64px] h-[40px] w-[288px] text-[#a6a6aa] text-[16px] font-extrabold leading-[20px] text-center ">
          Your account has been successfully verified.
        </p>
        <button className="absolute top-[537px] left-[24px] h-[48px] w-[380px] rounded-tr-[5px] rounded-tl-[5px] rounded-br-[5px] bg-[#28a745] text-[#ffffff] ">
          Let’s get Started
        </button>
      </main>
    </div>
  );
};

export default ConfirmedVerificationMobile;
