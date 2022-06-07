import React from "react";
import 양식 from "@images/i1.png";
import 한식 from "@images/i2.png";
import 일식 from "@images/i3.png";
import 중식 from "@images/i4.png";
import 치킨 from "@images/i5.png";
import 피자 from "@images/i6.png";
import 디저트 from "@images/i7.png";
import 아시안 from "@images/i8.png";
import 패스트푸드 from "@images/i9.png";

const Category = (props: any) => {
  return (
    <div className="h-he4   flex flex-col  ">
      <div className="mt-hms flex flex-row  flex justify-center ">
        <img className="h-36 w-36  " src={한식} alt="한식 " />
        <img className="h-36 w-36 " src={일식} alt="일식" />
        <img className="h-36 w-36 " src={중식} alt="중식" />
        <img className="h-36 w-36 " src={양식} alt="양식" />
        <img className="h-36 w-36 " src={패스트푸드} alt="패스트푸드" />
      </div>
      <div className="flex flex-row  flex justify-center mr-36">
        <img className="h-36 w-36" src={치킨} alt="치킨" />
        <img className="h-36 w-36" src={피자} alt="피자" />
        <img className="h-36 w-36" src={디저트} alt="디저트" />
        <img className="h-36 w-36" src={아시안} alt="아시안" />
      </div>
    </div>
  );
};

export default Category;
