import React from "react";
import InputBox from "@components/inputBox";
import Btn from "@components/Btn";
import styled from "styled-components";
import loginBackground from "../images/loginBackground.png";

export const Login = () => {
  const MainCon = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${loginBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  const LoginCon = styled.div`
    width: 45vw;
    height: 55vh;

    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 2px 2px 8px #e2e2e2;
  `;

  const AccountFinder = styled.p`
    color: #fd927d;
  `;

  return (
    <MainCon className="fixed">
      <LoginCon className="m-auto flex flex-col mt-36 text-center">
        <h1 className="text-xl font-bold mb-6 mt-12">WELCOME!</h1>
        <InputBox className="pb-4" Type="ID" />
        <InputBox className="mt-4" Type="PASSWORD" />
        <Btn Text="Login" className="mt-2" />
        <AccountFinder className="text-xs font-bold mt-1">
          Don’t have an account?
        </AccountFinder>
      </LoginCon>
    </MainCon>
  );
};
