import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
       <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='home'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={0}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='contact'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={0}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>  
    </SidebarContainer>
  );
};

export default Sidebar;