import styled from "styled-components";

const JumpToChapterRoot = styled.div`
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
const JumpToChapter = () => {
  return <JumpToChapterRoot>Jump to chapter</JumpToChapterRoot>;
};

export default JumpToChapter;
