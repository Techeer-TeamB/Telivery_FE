/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

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
import styled from "styled-components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderradius: "0.5rem",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement("#Detailmenu");

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

function Addresspage() {
  console.log(__dirname);
  console.log(__filename);
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [menuisOpen, setMenuOpen] = useState(true);
  const [reviewisOpen, setReviewOpen] = useState(false);
  const [restinfoisOpen, setRestinfoOpen] = useState(false);
  const [color1, setColor1] = useState("#64AAFF");
  const [color2, setColor2] = useState("#64AAFF");
  const [color3, setColor3] = useState("#64AAFF");

  const onClick1 = () => {
    color1 === "#64AAFF" && setColor1("#2986C3");
    setColor2("#64AAFF");
    setColor3("#64AAFF");
  };
  const onClick2 = () => {
    color2 === "#64AAFF" && setColor2("#2986C3");
    setColor1("#64AAFF");
    setColor3("#64AAFF");
  };
  const onClick3 = () => {
    color3 === "#64AAFF" && setColor3("#2986C3");
    setColor2("#64AAFF");
    setColor1("#64AAFF");
  };

  const Button1 = styled.button`
    background-color: ${color1};
  `;
  const Button2 = styled.button`
    background-color: ${color2};
  `;
  const Button3 = styled.button`
    background-color: ${color3};
  `;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openReview() {
    onClick2();
    setReviewOpen(true);
    setMenuOpen(false);
    setRestinfoOpen(false);
  }

  function openMenu() {
    onClick1();
    setReviewOpen(false);
    setMenuOpen(true);
    setRestinfoOpen(false);
  }
  function openRestinfo() {
    onClick3();
    setReviewOpen(false);
    setMenuOpen(false);
    setRestinfoOpen(true);
  }

  const menuList = menu1.map((menu) => (
    <button onClick={openModal}>
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
    </button>
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

  const reviewList = menu2.map((menu) => (
    <div className="float-left w-w21 h-h21   flex flex-col flex justify-start  shadow-lg">
      <div className="mt-2">{menu.name}</div>
      <div className="mt-2">⭐ ⭐ ⭐ ⭐ ⭐</div>

      <div className="w-w22 h-h22 mt-1">
        <img
          className="w-full h-full "
          src="http://www.bapsangnews.com/repository/image/jpeg/8/d/8d81bf9f74b9c569665382b46f1970c1000001eb15"
        ></img>
      </div>
      <button className="rounded-full bg-teliverycolor w-40 h-8 text-white mt-1">
        {menu.name}
      </button>
      <div className="mt-s11 flex flex-row">
        <text className="text-10">{menu.comment}</text>
      </div>
    </div>
  ));

  return (
    <div>
      <Header></Header>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-100 h-h19 flex flex-col rounded-full">
            <div className="h-4 ml-s24">
              <button onClick={closeModal}>X</button>
            </div>
            <div className="flex justify-center flex flex-col  grid justify-items-center">
              <div className="text-xl">마늘 보쌈</div>
              <img
                className="w-18 h-h20 mt-2"
                src="http://www.bapsangnews.com/repository/image/jpeg/8/d/8d81bf9f74b9c569665382b46f1970c1000001eb15"
              ></img>
              <div className="w-w19 mt-5 text-white">
                원할머니 본점은 1975년 서울 청계 8가 황학동 끝자락에 작고 소박한
                보쌈집으로 시작하였습니다. 따뜻한 보쌈 고기와 아삭한 보쌈 김치는
                할머니의 특별한 정성과 손맛이 더해져 수많은 이들의 입맛을
                사로잡았고 보쌈집은 언제나 문전성시를 이루었습니다. 세월에도
                변함없이 원할머니 본점은 그 시절 할머니의 비법과 마음을 고스란히
                이어가며
              </div>

              <div>필수선택사항</div>

              <div className="flex flex-row">
                <div>마늘 양</div>
                <div className="ml-2">
                  <input className="rounded-lg mr-2" type="checkbox"></input>
                  마늘적게
                  <input
                    className="rounded-lg ml-2 mr-2"
                    type="checkbox"
                  ></input>
                  마늘중간
                  <input
                    className="rounded-lg ml-2 mr-2"
                    type="checkbox"
                  ></input>
                  마늘많이
                </div>
              </div>

              <div>추가 선택 사항</div>
              <div className="flex flex-row">
                <div>사이드 메뉴</div>
                <div className="ml-2">
                  <input className="rounded-lg mr-2" type="checkbox"></input>
                  보쌈 1p 추가 + 6000원
                  <input
                    className="rounded-lg ml-2 mr-2"
                    type="checkbox"
                  ></input>
                  국수 + 5000원
                  <input
                    className="rounded-lg ml-2 mr-2"
                    type="checkbox"
                  ></input>
                  백김치 +1500원
                </div>
              </div>
            </div>
            <form>
              <button className="bg-blue-400 rounded-full text-white w-w20 h-12 mr-6 mt-28 ml-s26">
                주문하기
              </button>
            </form>
          </div>
        </Modal>
      </div>

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
            <Button1
              onClick={openMenu}
              className="bg-blue-400 rounded-full text-white w-w14 h-h13"
            >
              Menu
            </Button1>

            <Button2
              onClick={openReview}
              className="bg-blue-400 rounded-full text-white w-w14 h-h13 ml-4"
            >
              REVIEW
            </Button2>
            <Button3
              onClick={openRestinfo}
              className="bg-blue-400 rounded-full text-white w-w14 h-h13 ml-4"
            >
              가게 정보
            </Button3>
          </div>

          {menuisOpen && (
            <div>
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
          )}

          {reviewisOpen && (
            <div>
              <div>
                <div>
                  <div className="mt-6 text-15 text-bo font-bold">REVIEW</div>
                  <div className="float-left w-w15 h-h14   flex flex-col flex items-center shadow-lg">
                    <div className="">{reviewList}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {restinfoisOpen && <div>helloworld!!3</div>}
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
}

export default Addresspage;
