import { memo } from "react";
import styled from "styled-components";

const DidntGetIt = styled.b`
  position: relative;
  line-height: 144%;
`;
const Rate4Root = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-chocolate-100);
  box-sizing: border-box;
  width: 159px;
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
const Rate41 = memo(() => {
  return (
    <Rate4Root>
      <DidntGetIt>Didn’t get it</DidntGetIt>
    </Rate4Root>
  );
});

export default Rate41;
