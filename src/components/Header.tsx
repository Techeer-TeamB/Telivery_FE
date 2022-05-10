import React from "react";
import Telivery from "@images/Teliverylogo.png";
import Vector1 from "@images/Vector1.png";

const Header = (props: any) => {
  return (
    <div className="flex flex-row justify-items-start h-he items-center">
      <div>
        <img className=" ml-hml w-tew h-teh" src={Telivery} alt="Logo" />
      </div>
      <div>
        <img className=" ml-hml2 w-wv h-hv" src={Vector1} alt="Vector1" />
      </div>
      <div className="ml-hml3 w-wlo h-hlo text-10">LOGIN</div>
    </div>
  );
};

export default Header;
