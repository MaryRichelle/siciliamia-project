import styled from "styled-components";

const SeeAlso = styled.span``;
const TheBestTuna = styled.span`
  color: var(--color-chocolate-100);
`;
const SeeAlsoTheContainer1 = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const SeeAlsoTheContainerRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 36px;
  font-family: var(--font-lato);
  text-align: left;
  display: flex;
  align-items: center;
  width: 696px;
  height: 15px;
  color: var(--color-black);
`;
const SeeAlsoTheContainer = () => {
  return (
    <SeeAlsoTheContainerRoot>
      <SeeAlsoTheContainer1>
        <SeeAlso>{`See also: `}</SeeAlso>
        <TheBestTuna>The best Tuna Restaurants in Sicily</TheBestTuna>
      </SeeAlsoTheContainer1>
    </SeeAlsoTheContainerRoot>
  );
};

export default SeeAlsoTheContainer;
