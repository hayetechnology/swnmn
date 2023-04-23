import styled from 'styled-components';
import {darktorquise, torquise, white, black, lightpurple} from '../../components/colors';

export const HomeContainer = styled.div`
  height: 960px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-top:200px;
  position: relative;
  z-index: -5;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }
  
  @media screen and (max-width: 468px) {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-top: 60px;
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
      background: rgba(255, 255, 255, 0.8);
      z-index: 0;
    }
  }
`;

export const HombeBg = styled.div`
  max-height: 700px;
  display: flex;
  justify-content: center;
  align-items: start;
  position: absolute;
  padding:40px 0px 0px 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  //background-color:purple;
  //purple
`;

export const HomeImage = styled.img`
  position: absolute;
  height: 40%;
  border: 4px solid ${lightpurple};
  border-radius: 20px;
  z-index: -2;
  //background-color: yellow;
  //yellow
`;

export const HomeWrapper = styled.div`
  position: relative;
  height: 960px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  z-index: 4;
  //background-color: lightskyblue;
  //sky blue

  @media (max-width: 468px) {
    position: relative;
    height: 1110px;
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items: center;
    //background-color: lightskyblue;
    //sky blue
  }
`;

export const ContTop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: -100px 60px 60px 60px;
  z-index: -4;
  //background-color:lightpink;
  //lightpink
  
  @media screen and (max-width: 468px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: lightpink;
    //lightpink
  }
`;

export const HomeMainTitle = styled.h4`
  font-family: Georgia;
  font-size: 2.5rem;
  font-weight:800;
  margin: 0px 0px 0px 0px;
  color: ${torquise};
  //background-color: gold;
  //gold
  
  @media screen and (max-width: 468px) {
    font-family: Georgia;
    font-size: 1.8rem;
    font-weight:800;
    margin: 0px 0px 40px 0px;
    //background-color:gold;
    //gold
  }
`;

export const ContMiddle = styled.div`
  display: grid;
  font-family: 'Assistant', sans-serif;
  font-weight: 700;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  padding: 0px 60px 60px 60px;
  //background-color: lightyellow;
  //lightyellow

  @media screen and (max-width: 468px) {
    display: grid;
    font-family: 'Assistant', sans-serif;
    font-weight: 700;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding:0px;
    margin: 0px;
    z-index: 4;
    //background-color: lightyellow;
    //lightyellow
  }
`;

export const ContLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 60px;
  align-items: center;
  //background-color: cadetblue;
  //bluegray

  @media screen and (max-width: 468px) {
    padding: 0px 20px 0px 20px;
    margin: 0px;
    //background-color: cadetblue;
    //blluegray;
  }
`;

export const TitleL = styled.h6`
  font-size: 1.5rem;
  line-height:3rem;
  color:${darktorquise};
  padding:0px;
  //background-color: darkturquoise;
  //turquoise
  
  @media screen and (max-width: 468px) {
    font-size: 1.5rem;
    line-height:1.5rem;
    padding: 0px;
    margin-bottom:20px;
    //background-color: pink;
    //pink
  }
`;

export const ParaL = styled.p`
  font-size: 1rem;
  font-weight: 700;
  font-style: italic;
  line-height: 2rem;
  color:${darktorquise};
  text-align: justify;
  //background-color:lightgreen;
  //lightgreen
  
  @media screen and (max-width: 468px) {
    font-size: 14px;
    font-weight: 700;
    font-style: italic;
    line-height: 1rem;
    padding: 0px;
    margin:0px;
    color:${darktorquise};
    text-align: justify;
    //background-color:lightgreen;
    //lightgreen
  }
`;

export const ContRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 60px;
  align-items: center;
  //background-color: plum;
  //violet

  @media screen and (max-width: 468px) {
    padding: 0px 20px 0px 20px;
    margin: 30px 0px 0px 0px;
    //background-color: plum;
    //violet;
  }
`;

export const TitleR = styled.h6`
  font-size: 1.5rem;
  line-height: 3rem;
  color:${darktorquise};
  padding: 0px;
  //background-color:lightblue;
  //lightblue
 
    @media screen and (max-width: 468px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 0px;
    margin-bottom: 20px;
    //background-color: lightblue;
    //lightblue
  }
`;

export const ParaR = styled.p`
  font-size: 1rem;
  font-weight:700;
  font-style: italic;
  line-height: 2rem;
  color:${darktorquise};
  text-align: justify;
  //background-color: lightpink;
  //salmon pink
  
  @media screen and (max-width: 468px) {
    font-size: 14px;
    font-weight: 700;
    font-style: italic;
    line-height: 1rem;
    padding: 0px;
    margin: 0px;
    color:${darktorquise};
    text-align: justify;
    //background-color:lightpink;
    //salmon pink
  }
`;

export const ContBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  margin: 0px auto 0px auto;
  //background-color: lightgreen;
  //light green

  @media screen and (max-width: 468px) {
    display: flex;
    justify-content: center;
    margin: 60px auto 0px auto;
    //background-color: lightgreen;
    //light green
  }
`;

export const HomeLocationImageContLrg = styled.img`
  max-height: 232px;
  width: auto;
  border:4px solid ${lightpurple};
  //background-color: yellow;
  //yellow
  
  @media screen and (max-width: 468px) {
    display: none;
  }
`;

export const HomeLocationImageContSmall = styled.img`
  display: none;
  
  @media screen and (max-width: 468px) {  
    display flex;
    max-height: 270px;
    width: auto;
    border:4px solid ${torquise};
    //background-color: plum;
    //light purple
  }
`;