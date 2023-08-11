import styled from "styled-components";

const SuggestAnEditRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 36px;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 284px;
  height: 11px;
`;
const SuggestAnEdit = () => {
  return <SuggestAnEditRoot>Suggest an edit!</SuggestAnEditRoot>;
};

export default SuggestAnEdit;
