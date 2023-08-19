import { memo } from "react";
import styled from "styled-components";

const HistoryRoot = styled.div`
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
const HistoryText = memo(() => {
  return <HistoryRoot>History</HistoryRoot>;
});

export default HistoryText;
