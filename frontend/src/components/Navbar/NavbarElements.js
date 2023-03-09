import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {lighttorquise, purple, black} from '../../components/colors';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '00FFFFFF' : lighttorquise)};
  height: 50px;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
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
  color: ${purple};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
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
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  font-size: 17px;
  font-weight: 560;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  font-family: 'Assistan', 'sans-serif';
  color: ${black};
  display: flex;
  font-size: 17px;
  font-weight: 560;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #bf0101;
  }
`;

export const NavBtn = styled(LinkR)`
  font-family: 'Assistan', 'sans-serif';
  color: ${black};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
