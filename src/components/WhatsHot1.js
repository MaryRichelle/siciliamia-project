import styled from "styled-components";

const WhatsHotRoot = styled.div`
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
const WhatsHot1 = () => {
  return <WhatsHotRoot>What’s hot</WhatsHotRoot>;
};

export default WhatsHot1;
