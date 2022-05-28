import React from "react";
import styled from "styled-components";

const InputBox = (props) => {
  const Container = styled.div`
    width: 30vw;
    height: 40px;

    background-color: #fbfbfb;
    border: 4px solid #2986c3;
    border-radius: 26px;
  `;

  return (
    <Container className="flex flex-col text-center mx-auto mb-3">
      <input
        className="my-auto ml-4 w-72 text-xs"
        placeholder={props.Type}
      ></input>
    </Container>
  );
};

export default InputBox;
