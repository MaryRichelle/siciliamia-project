import { memo } from "react";
import styled from "styled-components";

const PopularAttraction = styled.p`
  margin: 0;
`;
const PopularAttractionNearbyContainer1 = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const PopularAttractionNearbyContainerRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 21px;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 205px;
  height: 35px;
`;
const PopularAttractionNearby = memo(() => {
  return (
    <PopularAttractionNearbyContainerRoot>
      <PopularAttractionNearbyContainer1>
        <PopularAttraction>Popular attraction</PopularAttraction>
        <PopularAttraction>nearby</PopularAttraction>
      </PopularAttractionNearbyContainer1>
    </PopularAttractionNearbyContainerRoot>
  );
});

export default PopularAttractionNearby;
