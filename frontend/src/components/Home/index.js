import React from 'react';
import {
  HomeContainer,
  HomeWrapper,
  HomeImage,
  HombeBg,
} from './HomeElements';
import HomeSomaliWomenNetworkLogo from '../../images/HomeSomaliWomenNetworkLogo.png';

  function HomeSection() {
    return (
    <HomeContainer id='home'>
      <HombeBg>
        <HomeImage src={HomeSomaliWomenNetworkLogo}>
        </HomeImage>
      </HombeBg>
      <HomeWrapper>
      </HomeWrapper>
    </HomeContainer>
  );
}

export default HomeSection;