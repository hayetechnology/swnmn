import styled from 'styled-components';
import { Link } from 'react-scroll';
import {purple, lighttorquise, triplelightblue} from '../../components/colors';

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? torquise : purple)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? purple : triplelightblue)};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? triplelightblue : torquise)};
  }
`;