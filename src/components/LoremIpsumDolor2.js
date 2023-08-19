import { memo } from "react";
import styled from "styled-components";

const LoremIpsumDolorRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 36px;
  font-family: var(--font-lato);
  color: var(--color-black);
  text-align: left;
  display: flex;
  align-items: center;
  width: 696px;
  height: 198px;
`;
const LoremIpsumDolor1 = memo(() => {
  return (
    <LoremIpsumDolorRoot>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</LoremIpsumDolorRoot>
  );
});

export default LoremIpsumDolor1;
