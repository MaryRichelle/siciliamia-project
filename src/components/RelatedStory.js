import styled from "styled-components";

const RelatedStoryRoot = styled.div`
  position: relative;
  font-size: var(--font-size-3xl);
  line-height: 36px;
  font-weight: 600;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 163px;
  height: 14px;
`;
const RelatedStory = () => {
  return <RelatedStoryRoot>Related story</RelatedStoryRoot>;
};

export default RelatedStory;
