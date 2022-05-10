import React from "react";

import { useState } from "react";

import Header from "@components/Header";

const Menupage = () => {
  const [Add, setAddress] = useState("");
  const onIncrease = () => {
    setAddress(Add);
  };

  return <Header></Header>;
};

export default Menupage;
