import React from "react";

import { useState } from "react";

import Header from "@components/Header";
import categoryim from "@images/categoryim.png";
import MenuDiv from "@components/MenuDiv";

const menu = [
  {
    name: "아이스크림",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
  },
  {
    name: "초콜릿",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
  },
];

const Menupage = () => {
  const [Add, setAddress] = useState("");
  const onIncrease = () => {
    setAddress(Add);
  };

  return (
    <div>
      <Header></Header>
      <div className="w-full h-h4"></div>
      <div className="w-full h-h2 bg-green-500 flex flex-row">
        <div className="w-w2 h-h2 bg-green-300 rounded-r-full">
          <img className=" w-w2 h-full" src={categoryim} alt="categoryim" />
        </div>

        <div className="w-w3 h-h3 ml-s3 mt-s4">
          <select
            className="w-w3 h-h3 text-10 flex items-center"
            defaultValue={"정렬 순"}
          >
            <option className="text-center" value="정렬 순">
              정렬 순
            </option>
            <option className="text-center" value="최신 순">
              최신 순
            </option>
            <option className="text-center" value="거리 순">
              거리 순
            </option>
            <option className="text-center" value="주문 순">
              주문 순
            </option>
          </select>
        </div>
      </div>
      <div>
        {menu.map((name) => (
          <MenuDiv name={name.name} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Menupage;
