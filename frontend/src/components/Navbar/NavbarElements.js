import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {darktorquise, torquise, lighttorquise, triplelightblue, white, black, darkpurple, purple, lightpurple, doublelightpurple} from '../../components/colors';

export const Nav = styled.nav`
  font-family: 'Assistant', sans-serif;
  background:  ${lighttorquise};
  height: 50px;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 560;
  position: sticky;
  top: 0;
  z-index: 10;
  //background-color: ${darkpurple}
  //dark-purple
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    //background-color: ${darkpurple}
    //dark-purple
  }
`;

export const NavbarContainer = styled.div`
  font-family: 'Assistant', sans-serif;
  display: flex;
  justify-content: space-between;
  height: 50px;
  z-index: 1;
  width: 100%;
  padding: 0px 100px 0px 0px;
  max-width: 1460px;
  //background-color:#800000 ;
  //maroon
`;

export const NavLogo = styled(LinkR)`
  font-family: 'Assistant', sans-serif;
  justify-self: flex-start;
  color: ${darkpurple};
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 560;
  //background-color: #90EE90;
  //light green
`;

export const NavIcon = styled.img`
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  height: 50px;
  //background-color: #FFC0CB;
  //pink
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    //background-color: ${lighttorquise};
    //light-sky-blue
  }
`;

export const NavMenu = styled.ul`
  font-family: 'Assistant', sans-serif;
  color: ${darktorquise};
  display: flex;
  font-size: 17px;
  font-weight: 800;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  //background-color: #fc7d05;
  //orange

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 48px;
`;

export const NavLinks = styled(LinkS)`
  font-family: 'Assistant', 'sans-serif';
  color: ${darktorquise};
  display: flex;
  font-size: 18px;
  font-weight: 560;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  //background-color: #fac5fc;
  //light-pink

  cursor: pointer;
  &.active {
    border-bottom: 3px solid ${purple};
  }
`;

export const NavBtn = styled(LinkR)`
  font-family: 'Assistant', 'sans-serif';
  color: ${purple};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  //background-color: #170575;
  //dark-blue
`;
