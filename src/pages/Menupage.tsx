/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { useState } from "react";

import Header from "@components/Header";
import categoryim from "@images/categoryim.png";
import sms from "@images/sms.png";
import star from "@images/star.png";
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';


const icon = (
  <div className="mt-3 bg-teliverycolor rounded-r-full bg-teliverycolor w-w8 h-h8 " >
    <div className="mx-20 mt-3 flex justify-around ">
    <button className = "text-white ">
      한식
    </button>
    <button className = "text-white">
      중식
    </button>
    <button className = "text-white">
      일식
    </button>
    <button className = "text-white">
      양식
    </button>
    <button className = "text-white">
      치킨
    </button>
    </div>
 
  </div>

);
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

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  
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
        <div className="w-w2 h-h2  rounded-r-full flex items-center flex justify-center">
          <img className=" w-w2 h-full" src={categoryim} alt="categoryim" />
          <text className= "text-24 text-white mt-s14 font-bold mr-s15 absolute">한식</text>
          <text className= "text-xs text-white mt-s16 ml-s14 font-bold absolute">KoreanFood</text>        
          <div className="absolute h-h7 w-w7 mt-s14 ml-s13 ">
          <button className="h-h7 w-w7"onClick={handleChange}></button>
          </div>
      
      
      </div>

        <div className="w-w3 h-h3 ml-s3 mt-s4">
          <select
            className="w-w3 h-h3 text-fs1 flex items-center"
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
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
      </Box>
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
      <div>
 

    </div>

    </div>
  );
};

export default Menupage;

