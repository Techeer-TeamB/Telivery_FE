import React from "react";

import { useState } from "react";

import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import Welcome from "@components/Welcom";
import AddressBar from "@components/AddressBar";
import Category from "@components/Category";

const Mainpage = () => {
  const [Add, setAddress] = useState("");
  const onIncrease = () => {
    setAddress(Add);
  };

  return (
    <div
      className="bg-[length:100vw_100vh]"
      style={{ backgroundImage: `url("../images/mainpage.png")` }}
    >
      <Header></Header>
      <AddressBar></AddressBar>
      <Welcome></Welcome>
      <SearchBar></SearchBar>
      <Category></Category>
    </div>
  );
};

export default Mainpage;
