import { memo } from "react";
import styled from "styled-components";

const Useful = styled.b`
  position: relative;
  line-height: 144%;
`;
const Rate2Root = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-chocolate-100);
  box-sizing: border-box;
  width: 116px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-lato);
`;
const Rate2 = memo(() => {
  return (
    <Rate2Root>
      <Useful>Useful</Useful>
    </Rate2Root>
  );
});

export default Rate2;
