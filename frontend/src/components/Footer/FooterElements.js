import styled from 'styled-components';
import {blue, lightblue, brown} from '../../components/colors';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: ${lightblue};
  //light-blue
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
  //background-color: #7d0000;
  //maroon
`;

export const FooterLeft = styled.div`
  display:flex;
  height:auto;
  width:200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: #abffb6;
  //light-green
`;

export const FooterLeftIn = styled.div`
  display:flex;
  height:auto;
  width:200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: #abe4ff;
  //light-blue
`;



export const FooterRightIn = styled.div`
  display:flex;
  height:auto;
  width:200px;
  margin-right:8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: #fcfcc5;
  //light-yellow
`;

export const FooterRight = styled.div`
  display:flex;
  height:auto;
  width:210px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: #fac5fc;
  //light-pink
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
  color: ${brown};
  width: 180px;
  font-size: 14px;
  font-weight:800;
  text-align: start;
  //background-color: #ff00bf;
  //pink
`;

export const FooterPara = styled.p`
  font-family: 'Assistant', sans-serif;
  color: ${blue};
  width: 180px;
  font-size: 14px;
  font-weight: 560;
  text-align:start;
  //background-color: #fc7d05;
  //orange
`;

export const FooterPara2 = styled.p`
  font-family: 'Assistant', sans-serif;
  color: ${blue};
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