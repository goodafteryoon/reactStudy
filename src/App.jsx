import React from "react";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <>
      <Container>
        <Button1 />
        <Button2 />
      </Container>
    </>
  );
}
