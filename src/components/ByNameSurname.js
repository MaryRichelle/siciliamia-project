import { memo } from "react";
import styled from "styled-components";

const ByNameSurnameRoot = styled.div`
  position: relative;
  font-size: var(--font-size-3xl);
  line-height: 31.68px;
  font-weight: 600;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 193px;
  height: 15px;
`;
const ByNameSurname = memo(() => {
  return <ByNameSurnameRoot>By Name Surname</ByNameSurnameRoot>;
});

export default ByNameSurname;
