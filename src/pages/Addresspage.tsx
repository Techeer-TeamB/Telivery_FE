import React from "react";

import { useState } from "react";

import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import Welcome from "@components/Welcom";
import AddressBar from "@components/AddressBar";
import Category from "@components/Category";
import background from "../images/Addressinsert.png";
import AddressBar2 from "@components/AddressBar2";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const Addresspage = () => {
  console.log(__dirname);
  console.log(__filename);

  return (
    <div
      className="w-full h-screen bg-[length:100vw_100vh]"
      style={{ backgroundImage: `url("../images/Addressinsert.png")` }}
    >
      <Header></Header>
      <div className=" w-full h-20 mt-s17 flex flex-col flex items-center flex justify-center flex ">
        <div className="text-xs text-blue-600">WELCOME!</div>
        <div className="text-16">배달 받으실 주소를 입력 해 주세요!</div>
        <AddressBar2></AddressBar2>
        <div className="flex flex-row flex items-center ">
          <MyLocationIcon
            sx={{ fontSize: "15px" }}
            className="mt-2 mr-1 text-yellow-500"
          ></MyLocationIcon>
          <div className="text-xs text-yellow-500 mt-2">
            현재 위치로 설정하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresspage;
