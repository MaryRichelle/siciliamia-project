import { memo } from "react";
import styled from "styled-components";

const RectangleDivRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  width: 1440px;
  height: 75px;
`;
const Rectangle1 = memo(() => {
  return <RectangleDivRoot />;
});

export default Rectangle1;
