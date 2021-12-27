import React from "react";
import styled from "styled-components";
export default function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}
const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 550px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 500px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0482ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`;
const CTALogoTwo = styled.img`
  max-width: 500px;
  width: 100%;
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 20px;
`;
