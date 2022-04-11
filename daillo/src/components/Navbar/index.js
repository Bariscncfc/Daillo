import React from 'react'
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav,NavbarContainer,NavBtn,NavBtnLink,NavItem,NavLinks,NavLogo, NavMenu } from './NavbarElements'

const Navbar = ({toogle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                DİALLO
            </NavLogo>
            <MobileIcon onClick={toogle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="/">About</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="/">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="/">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="/">Sign Up</NavLinks>
                    </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar