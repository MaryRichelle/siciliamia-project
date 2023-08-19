import { memo } from "react";
import styled from "styled-components";
import BottomFooter from "./BottomFooter";

const FrameChild = styled.img`
  position: relative;
  border-radius: 1.57px 1.57px 0px 0px;
  width: 283px;
  height: 123px;
  object-fit: cover;
`;
const TempleOfValley = styled.b`
  position: relative;
  line-height: 144%;
  display: inline-block;
  width: 160px;
  height: 22px;
  flex-shrink: 0;
`;
const RectangleParent = styled.div`
  border-radius: 3.14px;
  background-color: var(--color-white);
  box-shadow: 0px 3.8931150436401367px 23.36px rgba(189, 189, 189, 0.23);
  width: 283px;
  height: 337px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const Hotel1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: var(--shadow);
  width: 283px;
  height: 337px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const From = styled.div`
  position: relative;
  line-height: 144%;
  font-weight: 300;
  display: inline-block;
  width: 70.41px;
  height: 26.54px;
  flex-shrink: 0;
`;
const Div = styled.div`
  position: relative;
  font-size: 14.13px;
  line-height: 144%;
  font-weight: 900;
  display: inline-block;
  width: 33.72px;
  height: 26.2px;
  flex-shrink: 0;
  margin-top: -11px;
`;
const FromParent = styled.div`
  position: absolute;
  top: 296px;
  left: 202px;
  width: 70.41px;
  height: 41px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-0) 0.00000762939453125px var(--padding-0)
    var(--padding-0);
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: right;
  font-size: 11.39px;
  color: var(--dark-blue);
`;
const ReviewChild = styled.div`
  position: absolute;
  height: 89.81%;
  width: 24.07%;
  top: 7.31%;
  right: 75.93%;
  bottom: 2.88%;
  left: 0%;
  border-radius: 3.14px;
  background-color: var(--color-chocolate-100);
`;
const Div1 = styled.div`
  position: absolute;
  height: 45.14%;
  width: 13.81%;
  top: 29.67%;
  left: 4.89%;
  font-weight: 900;
  display: inline-block;
`;
const Reviews = styled.div`
  position: absolute;
  top: 0px;
  left: 39.38px;
  font-size: 11.39px;
  line-height: 144%;
  font-weight: 300;
  color: var(--dark-blue);
  text-align: left;
  display: inline-block;
  width: 62px;
  height: 30.6px;
`;
const StarsIcon = styled.img`
  position: absolute;
  top: 14.73px;
  left: 39.38px;
  width: 91px;
  height: 16.28px;
`;
const Review = styled.div`
  position: absolute;
  top: 296px;
  left: 14px;
  width: 130.38px;
  height: 31.01px;
  text-align: center;
  font-size: 12.56px;
  color: var(--color-white);
`;
const CardBestRoot = styled.div`
  position: relative;
  width: 283px;
  height: 337px;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-chocolate-100);
  font-family: var(--font-lato);
`;
const CardBest1 = memo(() => {
  return (
    <CardBestRoot>
      <Hotel1>
        <RectangleParent>
          <FrameChild alt="" src="/rectangle-273@2x.png" />
          <TempleOfValley>Temple of Valley</TempleOfValley>
        </RectangleParent>
        <BottomFooter flexibleMarginTop="-98px" />
      </Hotel1>
      <FromParent>
        <From>From</From>
        <Div>$349</Div>
      </FromParent>
      <Review>
        <ReviewChild />
        <Div1>4.8</Div1>
        <Reviews>100 reviews</Reviews>
        <StarsIcon alt="" src="/stars.svg" />
      </Review>
    </CardBestRoot>
  );
});

export default CardBest1;
