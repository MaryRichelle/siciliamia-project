import styled from "styled-components";

const IllustrationsLikeTheseRoot = styled.div`
  position: relative;
  font-size: var(--font-size-3xl);
  font-weight: 500;
  font-family: var(--font-lato);
  color: var(--color-black);
  text-align: center;
  display: inline-block;
  width: 479px;
  height: 98px;
`;
const IllustrationsLikeThese = () => {
  return (
    <IllustrationsLikeTheseRoot>
      Illustrations like these
    </IllustrationsLikeTheseRoot>
  );
};

export default IllustrationsLikeThese;
