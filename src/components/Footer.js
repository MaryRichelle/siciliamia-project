import { memo } from "react";
import styled from "styled-components";

const LoremIpsumDolor5 = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 28px);
  left: 0%;
  letter-spacing: -0.2px;
  display: inline-block;
`;
const Image13Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 86px;
  height: 60px;
  object-fit: cover;
`;
const LogoAbout = styled.div`
  position: absolute;
  height: 43.4%;
  width: 20.35%;
  top: 14.15%;
  right: 66.81%;
  bottom: 42.45%;
  left: 12.85%;
  overflow: hidden;
`;
const TermsConditions = styled.div`
  position: absolute;
  top: calc(50% + 132px);
  left: 68.61%;
  letter-spacing: -0.2px;
`;
const Copyright2020 = styled.div`
  position: absolute;
  top: calc(50% + 132px);
  left: 12.85%;
  letter-spacing: -0.2px;
  opacity: 0.5;
  mix-blend-mode: normal;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: calc(50% + 132px);
  left: 80.63%;
  letter-spacing: -0.2px;
`;
const Services1 = styled.div`
  position: absolute;
  width: 61.32%;
  top: calc(50% - 91px);
  left: 0%;
  font-size: var(--font-size-mid);
  letter-spacing: -0.23px;
  color: var(--color-darkorange-100);
  display: inline-block;
`;
const EmailMarketing = styled.div`
  position: absolute;
  width: 94.34%;
  top: calc(50% - 49px);
  left: 0%;
  letter-spacing: -0.2px;
  display: inline-block;
`;
const Campaigns = styled.div`
  position: absolute;
  width: 72.64%;
  top: calc(50% - 9px);
  left: 0%;
  letter-spacing: -0.2px;
  display: inline-block;
`;
const Branding = styled.div`
  position: absolute;
  width: 91.51%;
  top: calc(50% + 31px);
  left: 0%;
  letter-spacing: -0.2px;
  display: inline-block;
`;
const Offline = styled.div`
  position: absolute;
  width: 123.58%;
  top: calc(50% + 71px);
  left: 0%;
  letter-spacing: -0.2px;
  display: inline-block;
`;
const Services = styled.div`
  position: absolute;
  height: 42.92%;
  width: 9.03%;
  top: 14.15%;
  right: 51.04%;
  bottom: 42.92%;
  left: 39.93%;
  overflow: hidden;
`;
const About1 = styled.div`
  position: relative;
  font-size: var(--font-size-mid);
  letter-spacing: -0.23px;
  color: var(--color-darkorange-100);
`;
const OurStory = styled.div`
  position: relative;
  letter-spacing: -0.2px;
`;
const About = styled.div`
  position: absolute;
  height: 42.92%;
  width: 4.51%;
  top: 15.8%;
  right: 36.25%;
  bottom: 41.27%;
  left: 59.24%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
const FollowUs1 = styled.div`
  position: absolute;
  top: calc(50% - 71px);
  left: 0%;
  font-size: var(--font-size-mid);
  letter-spacing: -0.23px;
  color: var(--color-darkorange-100);
`;
const Facebook = styled.div`
  position: absolute;
  top: calc(50% - 29px);
  left: 31.63%;
  letter-spacing: -0.2px;
`;
const PathIcon = styled.img`
  position: absolute;
  height: 13.98%;
  width: 10.13%;
  top: 28.87%;
  right: 84.73%;
  bottom: 57.15%;
  left: 5.14%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Twitter = styled.div`
  position: absolute;
  top: calc(50% + 11px);
  left: 31.63%;
  letter-spacing: -0.2px;
`;
const PathIcon1 = styled.img`
  position: absolute;
  height: 11.19%;
  width: 19.95%;
  top: 59.86%;
  right: 80.05%;
  bottom: 28.95%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Instagram = styled.div`
  position: absolute;
  top: calc(50% + 51px);
  left: 31.63%;
  letter-spacing: -0.2px;
`;
const InstagramIcon = styled.img`
  position: absolute;
  height: 14.08%;
  width: 20.41%;
  top: 85.92%;
  right: 78.57%;
  bottom: 0%;
  left: 1.02%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FollowUs = styled.div`
  position: absolute;
  height: 33.49%;
  width: 6.81%;
  top: 15.8%;
  right: 17.57%;
  bottom: 50.71%;
  left: 75.63%;
  overflow: hidden;
`;
const FooterRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 1440px;
  height: 424px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-gray-200);
  font-family: var(--font-dm-sans);
`;
const Footer = memo(() => {
  return (
    <FooterRoot>
      <LogoAbout>
        <LoremIpsumDolor5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </LoremIpsumDolor5>
        <Image13Icon alt="" src="/image-131@2x.png" />
      </LogoAbout>
      <TermsConditions>{`Terms & Conditions`}</TermsConditions>
      <Copyright2020>
        Copyright © 2020. LogoIpsum. All rights reserved.
      </Copyright2020>
      <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
      <Services>
        <Services1>Services</Services1>
        <EmailMarketing>Accomodation</EmailMarketing>
        <Campaigns>Campaigns</Campaigns>
        <Branding>{`Tours & Travel`}</Branding>
        <Offline>Event Management</Offline>
      </Services>
      <About>
        <About1>About</About1>
        <OurStory>Our Story</OurStory>
        <OurStory>Benefits</OurStory>
        <OurStory>Team</OurStory>
        <OurStory>Careers</OurStory>
      </About>
      <FollowUs>
        <FollowUs1>Follow Us</FollowUs1>
        <Facebook>Facebook</Facebook>
        <PathIcon alt="" src="/path.svg" />
        <Twitter>Twitter</Twitter>
        <PathIcon1 alt="" src="/path1.svg" />
        <Instagram>Instagram</Instagram>
        <InstagramIcon alt="" src="/004instagram.svg" />
      </FollowUs>
    </FooterRoot>
  );
});

export default Footer;
