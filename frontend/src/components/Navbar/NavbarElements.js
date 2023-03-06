import { Link as LinkR } from 'react-router-dom';
import {lightblue} from '../../components/colors';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '00FFFFFF' : lightblue)};
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
  padding: 0 24px;
  max-width: 1100px;
  //background-color:#800000 ;
  //maroon
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
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