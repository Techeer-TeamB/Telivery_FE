import React from "react";
import styled from "styled-components";

const Btn = (props) => {
  const Container = styled.div`
    width: 30vw;
    height: 40px;

    border-radius: 26px;
    background-color: #2986c3;
    color: #fbfbfb;
  `;

  return (
    <Container className="text-center leading-9 mx-auto mt-8">
      {props.Text}
    </Container>
  );
};

export default Btn;
