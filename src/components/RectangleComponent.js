import styled from "styled-components";


const RectangleDivRoot = styled.div`
  // position: relative;
  border-radius: var(--br-5xs);
  background-color: rgba(81, 131, 60, 0.1);
  width: 648px;
  height: 118px;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  align-item: center;
  flex-wrap: wrap;
`;
const TagsSec = styled.p`
font-size: var(--font-size-lg);
  line-height: 36px;
  font-weight: 600;
  font-family: var(--font-lato);
  color: var(--color-black);
`;
const TagsBox = styled.p`
padding-inline:2rem;
padding-block:0.5rem;
font-size:1em;
  font-weight: 600;
  font-family: var(--font-lato);
  color: var(--color-black);
border-radius: var(--br-8xs);
background-color: var(--color-chocolate-100);
`
const RectangleComponent = () => {
  return <RectangleDivRoot >
    <TagsSec>Tags</TagsSec>
    <TagsBox>Authentic</TagsBox>
    <TagsBox>Low Budget </TagsBox>
    <TagsBox>Outdoors</TagsBox>
    <TagsBox>Spring</TagsBox>
    <TagsBox>Connect with locals</TagsBox>
    <TagsBox>Sailing</TagsBox>
    <TagsBox>History</TagsBox>
  </RectangleDivRoot>;
};

export default RectangleComponent;
