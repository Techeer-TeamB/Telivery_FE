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
import detailmenu from "@images/detailmenu.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CallIcon from "@mui/icons-material/Call";
import sms from "@images/sms.png";
import star from "@images/star.png";

const menu1 = [
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
];

const menu2 = [
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
  {
    name: "마늘보쌈",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aladin.co.kr%2Fshop%2Fwproduct.aspx%3FItemId%3D218911203&psig=AOvVaw0g6yWi-7xweZ40-2DwCq0R&ust=1605342401333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjh786M_-wCFQAAAAAdAAAAABAD",
    comment:
      "의성마늘만을 사용하여 만든 마늘소스와 탱글탱글한 식감과 부드러운 맛이 일품인 족발입니다.",
    price: 16000,
  },
];

const Addresspage = () => {
  console.log(__dirname);
  console.log(__filename);

  const menuList = menu1.map((menu) => (
    <div className="float-left w-w16 h-h17  mx-2 flex flex-col flex items-center my-2 shadow-lg">
      <div className="w-w17 h-18 mt-1">
        <img
          className="w-w17 h-h18 "
          src="http://www.bapsangnews.com/repository/image/jpeg/8/d/8d81bf9f74b9c569665382b46f1970c1000001eb15"
        ></img>
      </div>
      <div className="mt-2">{menu.name}</div>
      <div className="mt-s11 flex flex-row">
        <text className="text-10">{menu.comment}</text>
      </div>
      <div className="mt-2 flex flex-col">
        <text className="text-14">{menu.price}원</text>
      </div>
      <button className="rounded-full bg-teliverycolor w-40 h-8 text-white mt-1">
        담기
      </button>
    </div>
  ));
  const menuList2 = menu2.map((menu) => (
    <div className="float-left w-w16 h-h17  mx-2 flex flex-col flex items-center my-2 shadow-lg">
      <div className="w-w17 h-18 mt-1">
        <img
          className="w-w17 h-h18 "
          src="http://www.bapsangnews.com/repository/image/jpeg/8/d/8d81bf9f74b9c569665382b46f1970c1000001eb15"
        ></img>
      </div>
      <div className="mt-2">{menu.name}</div>
      <div className="mt-s11 flex flex-row">
        <text className="text-10">{menu.comment}</text>
      </div>
      <div className="mt-2 flex flex-col">
        <text className="text-14">{menu.price}원</text>
      </div>
      <button className="rounded-full bg-teliverycolor w-40 h-8 text-white mt-1">
        담기
      </button>
    </div>
  ));

  return (
    <div>
      <Header></Header>
      <div className="text-xs ml-s23 mt-8"> 카테고리명{">"}가게 이름 </div>
      <div className="mt-4 ml-s20 flex flex-row">
        <img className="h-h9 w-w10 " src={detailmenu} alt="detailmenu" />
        <div className="ml-10 mt-10">
          <div className="text-30">원할머니 보쌈, 족발</div>
          <div className="mt-2">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div className="flex flex-row mt-6">
            <div className="text-xs">최소배달금액</div>
            <div className="ml-20 text-xs">12000원</div>
          </div>
          <div className="flex flex-row">
            <div className="text-xs">배달팁</div>
            <div className="text-xs ml-s21 ">3000원</div>
          </div>

          <div className="flex flex-col mt-s22 ">
            <button className="bg-yellow-400 rounded-full text-white w-w11 h-h10">
              <FavoriteIcon sx={{ fontSize: "17px" }} className="mb-1 mr-2" />
              찜하기
            </button>
            <button className="bg-yellow-100 rounded-full  w-w11 h-h10 mt-3 ">
              <CallIcon
                sx={{ fontSize: "17px" }}
                className="mb-1 mr-2"
              ></CallIcon>
              전화걸기
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className=" w-w12 ml-16 mt-14 flex flex-col">
          <div>
            <button className="bg-blue-400 rounded-full text-white w-w14 h-h13">
              Menu
            </button>
            <button className="bg-blue-400 rounded-full text-white w-w14 h-h13 ml-4">
              REVIEW
            </button>
            <button className="bg-blue-400 rounded-full text-white w-w14 h-h13 ml-4">
              가게 정보
            </button>
          </div>

          <div>
            <div className="mt-6 text-15 text-bo font-bold">전체 메뉴</div>
            <div className="float-left w-w15 h-h14  mx-2 flex flex-col flex items-center my-2 shadow-lg">
              <div className="w-full overflow-auto">
                <div className="mt-4 ml-16">{menuList}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6 text-15 text-bo font-bold">전체 메뉴</div>

            <div className="float-left w-w15 h-h15  mt-4 mx-2 flex flex-col flex items-center my-2 shadow-lg">
              <div className="w-full overflow-auto">
                <div className="mt-4 ml-16">{menuList2}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-w13 bg-teliverycolor h-h16 ml-20 mt-14 rounded-md text-white flex flex-col">
            <div className="mt-8 ml-6 flex flex-col">
              <text>주문표</text>
              <div className="text-10 mt-6 flex-row">
                <text>마늘보쌈</text> <text className="ml-8">10000원</text>
              </div>
              <div className="text-10 flex-row">
                <text>마늘보쌈</text> <text className="ml-8">10000원</text>
              </div>
              <div className="text-10 flex-row">
                <text>마늘보쌈</text> <text className="ml-8">10000원</text>
              </div>
              <div className=" mt-6 mr-6 h-0.5 bg-blue-200"></div>
              <div className="text-xs flex-row mt-2">
                <text>총합</text> <text className="ml-2 ml-10">30000원</text>
              </div>
              <button className="bg-yellow-400 rounded-full text-white w-50 h-8 mr-6 mt-1">
                주문하기
              </button>
              <button className="bg-blue-200 rounded-full text-white w-50 h-8 mt-2 mr-6">
                초기화
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Addresspage;
