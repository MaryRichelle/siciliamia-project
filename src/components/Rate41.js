import { memo } from "react";
import styled from "styled-components";

const NotMyCup = styled.b`
  position: relative;
  line-height: 144%;
`;
const Rate4Root = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-chocolate-100);
  box-sizing: border-box;
  width: 207px;
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
const Rate4 = memo(() => {
  return (
    <Rate4Root>
      <NotMyCup>Not my cup of tea</NotMyCup>
    </Rate4Root>
  );
});

export default Rate4;
