import styled from "styled-components";

const WhatDoYouRoot = styled.div`
  position: relative;
  font-size: var(--font-size-17xl);
  line-height: 36px;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 581px;
  height: 50px;
`;
const WhatDoYou = () => {
  return <WhatDoYouRoot>What do you think about the article?</WhatDoYouRoot>;
};

export default WhatDoYou;
