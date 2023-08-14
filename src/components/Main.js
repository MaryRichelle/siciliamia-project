import styled from "styled-components";
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
import Middle from "./Middle"
import OtherInterestingArticles from "./OtherInterestingArticles"
import TopAttra from "./TopAttra"
import Footer from "./Footer"
const Columns = styled.div`
margin-top: 6rem;
   display:flex;
   gap:15px;
   `

const Main = () => {
  return (
    <>
      <Columns>
        <LeftSide />
        <Middle />
        <RightSide />
      </Columns>
      <OtherInterestingArticles />
      <TopAttra />
      <Footer />
    </>
  )
}
export default Main