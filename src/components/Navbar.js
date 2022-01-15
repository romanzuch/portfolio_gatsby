import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navbar = styled.nav `
    margin: 0;
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const NavbarLink = styled(Link) `
    padding: 1;
    margin: 10px; 
    color: grey;
    text-decoration: none;
`

const NavigationBar = () => {
    return (
        <Navbar>
            <NavbarLink to='/'>home</NavbarLink>
            <NavbarLink to='/resume'>resume</NavbarLink>
            <NavbarLink to='/apps'>apps</NavbarLink>
            <NavbarLink to='/contact'>contact</NavbarLink>
        </Navbar>
    )
}

export default NavigationBar;