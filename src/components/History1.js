import styled from "styled-components";

const HistoryRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 36px;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 163px;
  height: 14px;
`;
const History1 = () => {
  return <HistoryRoot>History</HistoryRoot>;
};

export default History1;
