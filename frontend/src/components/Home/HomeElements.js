import styled from 'styled-components';
import {darktorquise, torquise, lighttorquise, white, darkpurple} from '../../components/colors';

export const HomeContainer = styled.div`
  height: 1000px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  min-height: 854px;
  //background: ${white};
  position: relative;
  z-index: -5;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.7);
    z-index: 0;
  }
  
  @media screen and (max-width: 468px) {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    min-height: 854px;
    //background: ${white};
    position: relative;
    z-index: -5;
    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.7);
      z-index: 0;
  }

`;

export const HomeImage = styled.img`
  max-height: 360px;
  width: auto;
  z-index: -2;
  //background-color: yellow;
  //yellow

`;

export const HombeBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  //background-color: ${darktorquise};
  //kale-green
`;

export const HomeTitle = styled.h1`
  font-family: Georgia;
  font-size: 40px;
  font-weight:800;
  padding-bottom: 600px;
  color: ${lighttorquise};
  position: absolute;
  z-index: 1;
  background-color: ${torquise};
  //dirty-greendark-blueish
`;

export const HomeWrapper = styled.div`
  display: grid;
  font-family: 'Assistant', sans-serif;
  font-weight: 700;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: auto;
  justify-items: stretch;
  align-items: center;
  padding: 0px 60px 0px 60px;
  //background-color: #fffaab;
  z-index: 4;
  //background-color: ${darkpurple};
  //dark-purple

  @media screen and (max-width: 468px) {
    display: grid;
    font-family: 'Assistant', sans-serif;
    font-weight: 700;
    grid-template-columns: auto;
    grid-template-rows: 2fr 1fr 2fr; ;
    justify-items: center;
    align-items: stretch;
    /*background-color: #fffaab;*/
    z-index: 4;
    /*background-color: ${darkpurple};*/
    /*dark-purple*/
    margin: 0px 20px 0px 20px;
  }
`;

export const ContLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // Add other styles here
`;

export const ContIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // Add other styles here

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
`;

export const ContRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // Add other styles here
`;

export const TitleL = styled.h2`
  font-size: 2rem;
  line-height:3rem;
  color:${torquise};
  padding:0px;
  @media screen and (max-width: 468px) {
    font-size: 2rem;
    padding: 20px 0px 20px 0px;
  }
  // Add your styles for the h6 element here
`;

export const TitleR = styled.h2`
  font-size: 2rem;
  line-height:3rem;
  color:${torquise};
  padding: 0px;
  @media screen and (max-width: 468px) {
    font-size: 2rem;
    padding: 0px 20px 20px 20px;
  }
  // Add your styles for the h6 element here
`;

export const ParaL = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;
  color:${torquise};
  text-align: center;
  // Add your styles for the p element here
  @media screen and (max-width: 468px) {
    font-size: 1rem;
    padding: 0px 40px 0px 40px;
  }
`;

export const ParaR = styled.p`
  font-size: 1rem;
  font-weight:700;
  line-height: 2rem;
  color:${torquise};
  text-align: center;
  @media screen and (max-width: 468px) {
    font-size: 1rem;
    padding: 0px 40px 60px 40px;
  }
`;
