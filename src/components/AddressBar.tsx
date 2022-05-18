import React, { useState } from "react";

import Address from "@images/Address.png";

import refresh from "@images/refresh.png";

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

const AddressBar = (props: any) => {
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
  );
};

export default AddressBar;
