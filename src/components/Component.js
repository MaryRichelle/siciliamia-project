import { memo } from "react";
import styled from "styled-components";

const DivRoot = styled.div`
  position: relative;
  width: 408px;
  height: 127px;
  background-image: url("./20210304-4-1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Rectangle = memo(() => {
  return <DivRoot />;
});

export default Rectangle;
