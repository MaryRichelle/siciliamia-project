import { memo } from "react";
import styled from "styled-components";

const Spring = styled.div`
  position: relative;
  line-height: 36px;
  display: flex;
  align-items: center;
  width: 50px;
  height: 14px;
  flex-shrink: 0;
`;
const SpringParentRoot = styled.div`
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--color-chocolate-100);
  width: 82px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-lato);
`;
const Frame2 = memo(() => {
  return (
    <SpringParentRoot>
      <Spring data-scroll-to="springText">Spring</Spring>
    </SpringParentRoot>
  );
});

export default Frame2;
