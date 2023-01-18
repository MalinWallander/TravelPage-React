import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  HeadingWide,
  Input,
  ImageContainer,
  Imgbusiness,
  Subscribe,
  Leftdiv,
  Rightdiv,
  InputContainer,
  ImageButton,
  Img,
} from "./FooterStyles";
import facebookimg from "../images/facebook.svg";
import twitterimg from "../images/twitterimg.svg";
import instagramimg from "../images/instagramimg.svg";
import emailimg from "../images/emailicon.svg";
import business from "../images/business.svg";
import iconbutton from "../images/iconbutton.svg";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>
              <span>2rism</span>
              <Imgbusiness src={business} alt={"facebook"} />
            </Heading>
            <Column>
              We always make our customers happy by providing as many choises as
              possible
            </Column>
            <ImageContainer>
              <FooterLink href="https://www.hyperisland.com">
                <Img src={facebookimg} alt={"facebook"} />
              </FooterLink>
              <FooterLink href="https://www.hyperisland.com">
                <Img src={twitterimg} alt={"twitter"} />
              </FooterLink>
              <FooterLink href="https://www.hyperisland.com">
                <Img src={instagramimg} alt={"instagram"} />
              </FooterLink>
            </ImageContainer>
          </Column>
          <Column>
            <Heading>About </Heading>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">News</FooterLink>
            <FooterLink href="#">Menus</FooterLink>
          </Column>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="#">Why 2rism</FooterLink>
            <FooterLink href="#">Partner With Us</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </Column>
          <Column>
            <Heading>Support</Heading>
            <FooterLink href="#">Account</FooterLink>
            <FooterLink href="#">Support Center</FooterLink>
            <FooterLink href="#">Feedback</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            <HeadingWide>
              Subscribe on our destination review newsletters
            </HeadingWide>
            <Subscribe>
              <Leftdiv>
                <Imgbusiness src={emailimg} alt="email" />
                <InputContainer>
                  <label>name</label>
                  <Input
                    name="username"
                    type={"email"}
                    placeholder="your email"
                  />
                </InputContainer>
              </Leftdiv>
              <Rightdiv>
                <ImageButton src={iconbutton} alt="purplebutton" />
              </Rightdiv>
            </Subscribe>
          </Column>
        </Row>
      </Container>
    </Box>
  );

};
export default Footer;
