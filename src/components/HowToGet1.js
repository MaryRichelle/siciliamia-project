import { memo } from "react";
import styled from "styled-components";

const HowToGetRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 36px;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 163px;
  height: 14px;
`;
const HowToGet = memo(() => {
  return <HowToGetRoot>How to get there</HowToGetRoot>;
});

export default HowToGet;
