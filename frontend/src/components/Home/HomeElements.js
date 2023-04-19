import styled from 'styled-components';
import {darktorquise, torquise, white, black, lightpurple, lighttorquise} from '../../components/colors';

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
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
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
  display: flex;
  justify-content: center;
  align-items: start;
  position: absolute;
  padding:40px 0px 0px 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  //background-color: ${darktorquise};
  //kale-green
`;

export const HomeImage = styled.img`
  position: absolute;
  height: 40%;
  border: 4px solid ${lightpurple};
  border-radius: 20px;
  z-index: -2;
  background-color: aqua;
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
  //background-color: gray;
  //gray

  @media (max-width: 468px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    //background-color:gray;
    //gray
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
  //background-color:navy;
  //light purple
  
  @media screen and (max-width: 468px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
`;

export const HomeMainTitle = styled.h4`
  font-family: Georgia;
  font-size: 2.5rem;
  font-weight:800;
  margin: 0px 0px 0px 0px;
  color: ${torquise};
  //background-color: aqua;
  //aqua
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
  //background-color: brown;
  //brown

  @media screen and (max-width: 468px) {
    display: grid;
    font-family: 'Assistant', sans-serif;
    font-weight: 700;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin: 0px 20px 0px 20px;
    z-index: 4;
    //background-color: brown;
    //brown
  }
`;

export const ContLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 60px 0 60px;
  //background-color: yellow;
  //yellow
`;

export const TitleL = styled.h6`
  font-size: 1.5rem;
  line-height:3rem;
  color:${darktorquise};
  padding:0px;
  @media screen and (max-width: 468px) {
    font-size: 2rem;
    padding: 0px 20px 0px 20px;
  }
`;

export const ParaL = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  font-style: italic;
  line-height: 2rem;
  color:${darktorquise};
  text-align: justify;
  @media screen and (max-width: 468px) {
    font-size: 1rem;
    padding: 0px 40px 0px 40px;
  }
`;

export const ContRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: lightgreen;
`;

export const TitleR = styled.h6`
  font-size: 1.5rem;
  line-height:3rem;
  color:${darktorquise};
  padding: 0px;
  @media screen and (max-width: 468px) {
    font-size: 2rem;
    padding: 0px 20px 0px 20px;
  }
`;

export const ParaR = styled.p`
  font-size: 1.2rem;
  font-weight:700;
  font-style: italic;
  line-height: 2rem;
  color:${darktorquise};
  text-align: justify;
  @media screen and (max-width: 468px) {
    font-size: 1rem;
    padding: 0px 40px 0px 40px;
  }
`;

export const ContBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  margin: 0px auto 0px auto;
  background-color: lightgreen;
  //light green

  @media screen and (max-width: 468px) {
    display: grid;
    font-family: 'Assistant', sans-serif;
    font-weight: 700;
    grid-template-columns: auto;
    grid-template-rows: 2fr 1fr 2fr; ;
    justify-items: center;
    align-items: center;
    margin: 0px 20px 0px 20px;
    z-index: 4;
    //background-color: lightgreen;
    //light green
  }
`;

export const HomeLocationImageCont = styled.img`
  max-height: 232px;
  width: auto;
  background-color: ${lighttorquise};
  border:4px solid ${lightpurple};
  //yellow
`;