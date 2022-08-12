import React from "react";
import 디저트 from "@images/i1.png";
import 아시안 from "@images/i2.png";
import 양식 from "@images/i3.png";
import 일식 from "@images/i4.png";
import 중식 from "@images/i5.png";
import 치킨 from "@images/i6.png";
import 패스트푸드 from "@images/i7.png";
import 피자 from "@images/i8.png";
import 한식 from "@images/i9.png";

import { useNavigate } from "react-router-dom";

var category = [
  {
    name: 한식,
    name2: "한식",
  },
  {
    name: 일식,
    name2: "일식",
  },
  {
    name: 중식,
    name2: "중식",
  },
  {
    name: 양식,
    name2: "양식",
  },
  {
    name: 패스트푸드,
    name2: "패스트푸드",
  },
];

var category2 = [
  {
    name: 치킨,
    name2: "치킨",
  },
  {
    name: 피자,
    name2: "피자",
  },
  {
    name: 디저트,
    name2: "디저트",
  },
  {
    name: 아시안,
    name2: "아시안",
  },
];

const Category = (props: any) => {
  const navigate = useNavigate();

  const cate = category.map((name) => (
    <button
      onClick={() =>
        navigate("/MenuPage", {
          state: { name: name.name2 },
        })
      }
    >
      <img className="h-36 w-36  " src={name.name} alt={name.name} />
    </button>
  ));

  const cate2 = category2.map((name) => (
    <button
      onClick={() =>
        navigate("/MenuPage", {
          state: { name: name.name2 },
        })
      }
    >
      <img className="h-36 w-36  " src={name.name} alt={name.name} />
    </button>
  ));

  return (
    <div className="h-he4   flex flex-col  ">
      <div className="mt-hms flex flex-row  flex justify-center ">{cate}</div>
      <div className="flex flex-row  flex justify-center mr-36">{cate2}</div>
    </div>
  );
};

export default Category;
