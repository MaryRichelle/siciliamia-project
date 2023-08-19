import { memo } from "react";
import styled from "styled-components";

const SomethingIncorrectInRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 36px;
  font-family: var(--font-lato);
  color: var(--color-black);
  text-align: left;
  display: flex;
  align-items: center;
  width: 284px;
  height: 11px;
`;
const SomethingIncorrectIn = memo(() => {
  return (
    <SomethingIncorrectInRoot>
      Something incorrect in this review?
    </SomethingIncorrectInRoot>
  );
});

export default SomethingIncorrectIn;
