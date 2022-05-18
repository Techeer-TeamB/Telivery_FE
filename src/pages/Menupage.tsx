import React from "react";

import { useState } from "react";

import Header from "@components/Header";
import categoryim from "@images/categoryim.png";
import MenuDiv from "@components/MenuDiv";
import sms from "@images/sms.png";
import star from "@images/star.png";

const menu = [
  {
    name: "원할머니 보쌈.족발",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    point: 4.5,
    comment: 72,
    min: 12000,
    fee: 3000,
  },
  {
    name: "피자헛",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    point: 4.5,
    comment: 72,
    min: 12000,
    fee: 3000,
  },
  {
    name: "피자헛",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    point: 4.5,
    comment: 72,
    min: 12000,
    fee: 3000,
  },
  {
    name: "피자헛",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    point: 4.5,
    comment: 72,
    min: 12000,
    fee: 3000,
  },
  {
    name: "피자헛",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    point: 4.5,
    comment: 72,
    min: 12000,
    fee: 3000,
  },
  {
    name: "피자헛",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    point: 4.5,
    comment: 72,
    min: 12000,
    fee: 3000,
  },
  {
    name: "굽네치킨",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    point: 4.5,
    comment: 72,
    min: 12000,
    fee: 3000,
  },
];

const Menupage = () => {
  const [Add, setAddress] = useState("");
  const onIncrease = () => {
    setAddress(Add);
  };
  const menuList = menu.map((menu) => (
    <div className="float-left w-w5 h-h5  mx-2 flex flex-col flex items-center my-2 shadow-lg">
      <div className="w-20 h-20 mt-s9">
        <img
          className="w-20 h-20 rounded-full"
          src="http://www.bapsangnews.com/repository/image/jpeg/8/d/8d81bf9f74b9c569665382b46f1970c1000001eb15"
        ></img>
      </div>
      <div className="mt-s10">{menu.name}</div>
      <div className="mt-s11 flex flex-row">
        <img className="w-4 h-4" src={star}></img>
        <text className="text-xs">{menu.point}</text>
        <img className="w-4 h-4 ml-4" src={sms}></img>
        <text className="text-xs">{menu.comment}</text>
      </div>
      <div className="mt-s12 flex flex-col">
        <text className="text-xs">
          최소주문금액 <text className="ml-2">{menu.min}원</text>
        </text>
        <text className="text-xs">
          배달비
          <text className="ml-11"> {menu.fee}원</text>
        </text>
      </div>
    </div>
  ));

  return (
    <div>
      <Header></Header>
      <div className="w-full h-h4"></div>
      <div className="w-full h-h2  flex flex-row">
        <div className="w-w2 h-h2  rounded-r-full">
          <img className=" w-w2 h-full" src={categoryim} alt="categoryim" />
        </div>

        <div className="w-w3 h-h3 ml-s3 mt-s4">
          <select
            className="w-w3 h-7 text-fs1 flex items-center"
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

      <div className="w-full overflow-auto">
        <div className="mt-s5 mx-s6">{menuList}</div>
      </div>
      <div className="h-h6 grid justify-items-center">
        <div className="mt-s7">
          <button className="mr-s8">1</button>
          <button className="mr-s8">2</button>
          <button className="mr-s8">3</button>
          <button className="mr-s8">4</button>
          <button className="">5</button>
        </div>
      </div>
    </div>
  );
};

export default Menupage;

/*
    {menu.map((name) => (
          <MenuDiv name={name.name} />
        ))}
*/
