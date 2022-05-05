import React from "react";
import Telivery from "@images/Teliverylogo.png";
import Vector1 from "@images/Vector1.png";
import Address from "@images/Address.png";
import search from "@images/search.png";
import 양식 from "@images/양식.png";
import 한식 from "@images/한식.png";
import 일식 from "@images/일식.png";
import 중식 from "@images/중식.png";
import 치킨 from "@images/치킨.png";
import 피자 from "@images/피자.png";
import 디저트 from "@images/디저트.png";
import 아시안 from "@images/아시안.png";
import 패스트푸드 from "@images/패스트푸드.png";
import refresh from "@images/refresh.png";

import { useState } from "react";

const kakao = (window as any).kakao;

function getAddr(lat: any, lng: any) {
  console.log("getAddr started");
  let geocoder = new kakao.maps.services.Geocoder();

  let coord = new kakao.maps.LatLng(lat, lng);
  let callback = function (result: any, status: any) {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result);
    }
  };

  geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
}

const Mainpage = () => {
  const [Add, setAddress] = useState("");
  const onIncrease = () => {
    setAddress(Add);
  };

  function getLocation() {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          let lat = await position.coords.latitude;
          let lng = await position.coords.longitude;

          await console.log(lat + " " + lng);

          let geocoder = await new kakao.maps.services.Geocoder();
          await console.log(geocoder);
          let coord = await new kakao.maps.LatLng(lat, lng);
          await console.log(coord);
          let callback = await function (result: any, status: any) {
            if (status === kakao.maps.services.Status.OK) {
              console.log(result);
              setAddress(result);
            } else {
              console.log("주소를찾을수없음");
              alert("주소를찾을수없음");
              setAddress("주소를찾을수없음");
            }
          };
          await console.log(callback);

          await geocoder.coord2Address(
            coord.getLng(),
            coord.getLat(),
            callback
          );
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }

  return (
    <div
      className="bg-[length:100vw_100vh]"
      style={{ backgroundImage: `url("../images/mainpage.png")` }}
    >
      <div className="flex flex-row justify-items-start h-he items-center">
        <div>
          <img className=" ml-hml w-tew h-teh" src={Telivery} alt="Logo" />
        </div>
        <div>
          <img className=" ml-hml2 w-wv h-hv" src={Vector1} alt="Vector1" />
        </div>
        <div className="ml-hml3 w-wlo h-hlo text-10">LOGIN</div>
      </div>

      <div className="h-had flex items-start grid justify-items-center">
        <img className=" w-wad h-had" src={Address} alt="Address" />
        <div
          className="absolute mr-sti mt-s1
         w-wsei h-hsei"
        >
          <input
            className="w-w1 h-h1 bg-transparent	border-none text-white text-left text-xs	"
            type="text"
            id="lname"
            name="lname"
            placeholder={Add}
          ></input>
        </div>
        <div
          className="absolute mr-sti mt-s2
         w-wsei h-hsei"
        >
          <div className="absolute w-4 h-4 mb-s1 ml-sti">
            <button id="btnTest" onClick={() => getLocation()}>
              <img src={refresh} alt="refresh" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-hd2  flex items-start grid justify-items-center">
        <div className="text-3xl leading-10 mt-9">Welcome!</div>
        <div className="text-xs text-slate-400">
          search for menu or restaurant you want!
        </div>
      </div>
      <div className="flex items-center flex justify-center h-he3 align-">
        <div>
          <input
            className="w-wse h-he3 rounded-full bg-transparent text-center text-xs		"
            type="text"
            id="lname"
            name="lname"
          ></input>
        </div>
        <div
          className="absolute ml-hws
         float-right w-wsei h-hsei"
        >
          <img src={search} alt="search" />
        </div>
      </div>
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

        <div></div>
      </div>
    </div>
  );
};

export default Mainpage;
