import styled from "styled-components";

const WantToFind = styled.b`
  position: relative;
  line-height: 144%;
`;
const Rate3Root = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-chocolate-100);
  box-sizing: border-box;
  width: 243px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-lato);
`;
const Rate3 = () => {
  return (
    <Rate3Root>
      <WantToFind>Want to find out more</WantToFind>
    </Rate3Root>
  );
};

export default Rate3;
