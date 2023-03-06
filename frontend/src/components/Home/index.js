import React from 'react';
import {
  HomeContainer,
  HomeWrapper,
  HomeImage,
  HombeBg,
  HomeTitle,
} from './HomeElements';
import ChildrenImage from '../../images/HomeChildren.png';

  function HomeSection() {
    return (
    <HomeContainer id='home'>
    <HomeTitle>
          SOMALI WOMEN NETWORK
    </HomeTitle>
      <HombeBg>
        <HomeImage src={ChildrenImage}>
        </HomeImage>
      </HombeBg>
      <HomeWrapper>
      </HomeWrapper>
    </HomeContainer>
  );
}

export default HomeSection;