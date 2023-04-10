import styled from 'styled-components';
import {darktorquise, torquise, lighttorquise, triplelightblue, white, black, darkpurple, purple, lightpurple, doublelightpurple} from '../../components/colors';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: ${lighttorquise};
  //background-color: yellow;
  //light-sky-blue

  @media screen and (max-width: 880px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    //background-color: ${purple};
    background-color: yellow;
    //yellow
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: flex-start;
  height: auto;
  width: 830px;
  padding: 48px 0px 64px 0px;
  margin: 0px 0px 0px 0px;
  background-color: ${lighttorquise};
  //background-color: brown;
  //brown

  @media screen and (max-width: 480px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    padding: 0px 100px 0px 0px;
    margin: 0px 0px 0px 0px;
    background-color: ${lighttorquise};
    //background-color: brown;
    //brown
  }
`;

export const FooterLeft = styled.div`
  display:flex;
  height:auto;
  width:200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color:green;
  //green

  @media screen and (max-width: 880px) {
    height: auto;
    width: 100%;
    display: flex;
    padding: 0px;
    margin: 20px 0px 3px 0px;
    //background-color: green;
    //green
  }
`;

export const FooterLeftIn = styled.div`
  display:flex;
  height:auto;
  width:200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: orange;
  //orange

  @media screen and (max-width: 880px) {
    height: auto;
    width: 100%;
    display: flex;
    padding: 0px;
    margin: 6px 0px;
    //background-color: orange;
    //orange
  }
`;

export const FooterRightIn = styled.div`
  display:flex;
  height:auto;
  width:200px;
  margin-right:8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: violet;
  //violet

  @media screen and (max-width: 880px) {
    height: auto;
    width: 100%;
    display: flex;
    padding: 0px;
    margin: 6px 0px;
    //background-color: violet;
    //violet
  }
`;

export const FooterRight = styled.div`
  display:flex;
  height:auto;
  width:210px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: pink;
  //pink

  @media screen and (max-width: 880px) {
    height: auto;
    width: 100%;
    display: flex;
    padding: 0px;
    margin: 6px 0px 20px 0;
    //background-color: pink;
    //pink
  }
`;

export const FooterTop = styled.div`
  display:flex;
  height:100%;
  width:auto;
  padding: 0px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: #005213;
  //dark-green
`;

export const FooterBottom = styled.div`
  display:flex;
  height:100%;
  width:auto;
  padding: 0px 8px;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
  //background-color: #170575;
  //dark-blue
`;

export const FooterBottom2 = styled.div`
  display:flex;
  height:100%;
  width:auto;
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
  margin-left: 16px;
  //background-color: #170575;
  //dark-blue
`;

export const FooterTitle = styled.h6`
  font-family: 'Assistant', sans-serif;
  color: ${darkpurple};
  width: 180px;
  font-size: 14px;
  font-weight:800;
  text-align: start;
  //background-color: #ff00bf;
  //pink
`;

export const FooterPara = styled.p`
  font-family: 'Assistant', sans-serif;
  color: ${darktorquise};
  width: 180px;
  font-size: 14px;
  font-weight: 560;
  text-align:start;
  //background-color: #fc7d05;
  //orange
`;

export const FooterPara2 = styled.p`
  font-family: 'Assistant', sans-serif;
  color: ${darktorquise};
  width: 180px;
  font-size: 14px;
  font-weight: 560;
  padding-left: 4px;
  text-align:start;
  //background-color: #fc7d05;
  //orange
`;

export const FooterFacebookLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;