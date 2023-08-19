import { memo } from "react";
import styled from "styled-components";

const TagsRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 36px;
  font-weight: 600;
  font-family: var(--font-lato);
  color: var(--color-black);
  text-align: left;
  display: flex;
  align-items: center;
  width: 93px;
  height: 14px;
`;
const TagsText = memo(() => {
  return <TagsRoot>Tags</TagsRoot>;
});

export default TagsText;
