import React from 'react';
import {
  HomeContainer,
  HomeWrapper,
  ContTop,
  ContMiddle,
  ContBottom,
  ContLeft,
  ContRight,
  TitleL,
  TitleR,
  ParaL,
  ParaR,
  HomeImage,
  HombeBg,
  HomeMainTitle,
  HomeLocationImageContLrg,
  HomeLocationImageContSmall
} from './HomeElements';
import HomeSomaliWomenNetworkLogo from '../../images/HomeSomaliWomenNetworkLogo.png';
import HomeLocationImageLrg  from '../../images/HomeLocationImageLrg.png';
import HomeLocationImageSmall  from '../../images/HomeLocationImageSmall.png';

  function HomeSection() {
    return (
    <HomeContainer id='home'>
      <HombeBg>
        <HomeImage src={HomeSomaliWomenNetworkLogo}>
        </HomeImage>
      </HombeBg>
      <HomeWrapper>
        <ContTop>
          <HomeMainTitle>
            About Us
          </HomeMainTitle>
        </ContTop>
        <ContMiddle>
          <ContLeft>
            <TitleL>Mission Statement</TitleL>
            <ParaL>
              "Somali Women Network is a non-profit based in Minnesota dedicated to empowering and 
              uplifting Somali women by providing essential resources, 
              support, and opportunities to overcome challenges and realize 
              their full potential. We are committed to fostering a strong,
              inclusive, and supportive community that celebrates the 
              unique cultural heritage of Somali women, while also promoting 
              their integration, independence, and success in their 
              respective societies. Together, we strive to create a 
              brighter future for all Somali women and their families, as 
              we believe in the power of unity, resilience, and 
              determination to transform lives and create lasting change."
            </ParaL>
          </ContLeft>
          <ContRight>
            <TitleR>Our Programs</TitleR>
            <ParaR>
              "Here in Somali Women Network (SWNMN) in Minneapolis, Minnesota, 
              we are dedicated to empowering and uplifting Somali women both in 
              our local community and beyond. Our Women's Empowerment and 
              Leadership Initiative (WELI) is one of our core programs, 
              providing women with the necessary skills and resources to become 
              strong leaders within their communities. Additionally, our 
              Education for All Girls program seeks to increase access to quality 
              education for Somali girls, particularly in rural and 
              underprivileged areas. Our Economic Independence initiative is 
              another vital part of our mission, as it assists Somali women in 
              Minneapolis with establishing and growing their own small businesses."
            </ParaR>
          </ContRight>
        </ContMiddle>
        <ContBottom>
          <HomeLocationImageContLrg src={HomeLocationImageLrg}>
          </HomeLocationImageContLrg>
          <HomeLocationImageContSmall src={HomeLocationImageSmall}>
          </HomeLocationImageContSmall>
        </ContBottom>
      </HomeWrapper>
    </HomeContainer>
  );
}

export default HomeSection;