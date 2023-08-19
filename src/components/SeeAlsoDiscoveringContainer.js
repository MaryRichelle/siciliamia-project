import { memo } from "react";
import styled from "styled-components";

const SeeAlso = styled.span``;
const DiscoveringFavignana = styled.span`
  color: var(--color-chocolate-100);
`;
const SeeAlsoDiscoveringContainer1 = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const SeeAlsoDiscoveringContainerRoot = styled.div`
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
const SeeAlsoDiscovering = memo(() => {
  return (
    <SeeAlsoDiscoveringContainerRoot>
      <SeeAlsoDiscoveringContainer1>
        <SeeAlso>{`See also: `}</SeeAlso>
        <DiscoveringFavignana>Discovering Favignana</DiscoveringFavignana>
      </SeeAlsoDiscoveringContainer1>
    </SeeAlsoDiscoveringContainerRoot>
  );
});

export default SeeAlsoDiscovering;
