import styled from "styled-components";

const HowToGetRoot = styled.div`
  position: relative;
  font-size: var(--font-size-17xl);
  line-height: 36px;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 279px;
  height: 50px;
`;
const HowToGet = () => {
  return <HowToGetRoot>How to get there</HowToGetRoot>;
};

export default HowToGet;
