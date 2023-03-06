import styled from 'styled-components';
import {lightbrown, lightblue} from '../../components/colors';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  min-height: 854px;
  background: ${lightbrown};
  position: relative;
  z-index: -6;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(28, 34, 38, 0.5);
    z-index: 0;
  }
`;

export const HomeImage = styled.img`
  height: 100%;
  width: auto;
  z-index: -2;
`;

export const HombeBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const HomeTitle = styled.h1`
  font-family: Georgia;
  font-size: 40px;
  font-weight:800;
  padding-bottom: 600px;
  color: #bae2ff;
  position: absolute;
  z-index: 1;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fffaab;
  z-index: -4;
`;





