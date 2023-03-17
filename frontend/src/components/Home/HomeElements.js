import styled from 'styled-components';
import {darktorquise, torquise, lighttorquise, triplelightblue, white, black, darkpurple, purple, lightpurple, doublelightpurple} from '../../components/colors';

export const HomeContainer = styled.div`
  height: 1000px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  min-height: 854px;
  background: ${white};
  position: relative;
  z-index: -5;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background: rgba(28, 34, 38, 0.5);
    z-index: 0;
  }
`;

export const HomeImage = styled.img`
  max-height: 400px;
  width: auto;
  z-index: -2;
  //background-color: ${torquise};
  //dirty-greendark-blueish
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fffaab;
  z-index: -3;
  background-color: ${darkpurple}
  //dark-purple
`;





