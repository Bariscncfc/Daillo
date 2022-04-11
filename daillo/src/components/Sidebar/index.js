import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap,SidebarMenu } from './SidebarElements'


const Sidebar = ({ isOpen, toogle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
    <Icon onClick={toogle}>
    <CloseIcon />
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink to="/">
          About
        </SidebarLink>
        <SidebarLink to="/">
          Discover
        </SidebarLink>
        <SidebarLink to="/">
          Services
        </SidebarLink>
        <SidebarLink to="/">
          Sign Up
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Sign In</SidebarRoute>
      </SideBtnWrap>
    </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;