import styled from "styled-components";

const SeeMoreRoot = styled.div`
  position: relative;
  font-size: var(--font-size-3xl);
  line-height: 36px;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 304px;
  height: 14px;
`;
const SeeMore = () => {
  return <SeeMoreRoot>See more...</SeeMoreRoot>;
};

export default SeeMore;
