import React from 'react';
import {
  FaFacebookSquare
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLeft,
  FooterLeftIn,
  FooterRightIn,
  FooterRight,
  FooterTop,
  FooterBottom,
  FooterBottom2,
  FooterTitle,
  FooterPara,
  FooterPara2,
  FooterFacebookLink,
} from './FooterElements';

const Footer = () => {

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLeft>
          <FooterTop>
              <FooterTitle>
                HOURS
              </FooterTitle>
          </FooterTop>
          <FooterBottom>
              <FooterPara>
                Mon-Fri 9am-9pm
              </FooterPara>
              <FooterPara>
                Sat-Sun 12am-9pm
              </FooterPara>
          </FooterBottom>
        </FooterLeft>
        <FooterLeftIn>
          <FooterTop>
              <FooterTitle>
                ADDRESS
              </FooterTitle>
          </FooterTop>
          <FooterBottom>
              <FooterPara>
                15400 S Robert Trail
              </FooterPara>
              <FooterPara>
                Rosemount Minnesota 55068
              </FooterPara>
          </FooterBottom>
        </FooterLeftIn>
        <FooterRightIn>
          <FooterTop>
              <FooterTitle>
                CONTACT US
              </FooterTitle>
          </FooterTop>
          <FooterBottom>
              <FooterPara>
                info@swnmn.org
              </FooterPara>
              <FooterPara>
                +1 (612) 481 8447
              </FooterPara>
          </FooterBottom>
        </FooterRightIn>
        <FooterRight>
          <FooterTop>
              <FooterTitle>
                FOLLOW US
              </FooterTitle>
          </FooterTop>
          <FooterBottom2>
            <FooterFacebookLink href='https://www.facebook.com/SouthMetroChildcareCenter/'>
            <FaFacebookSquare margin-right='10px;'/>
            <FooterPara2>
              facebook
            </FooterPara2>
            </FooterFacebookLink>
          </FooterBottom2>
        </FooterRight>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;