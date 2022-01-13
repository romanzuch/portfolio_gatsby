import React from "react";
import styled from 'styled-components';
import NavigationBar from './Navbar';

import Socials from "./socials";
import ScrollDownButton from './scrollDownButton'

const LayoutMain = styled.main `
    margin: 5rem 5rem 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Layout = ({children}) => {
    return (
        <>
            <NavigationBar />
            <LayoutMain>
                {children}
                <ScrollDownButton />
                <Socials />
            </LayoutMain>
        </>
    )
}

export default Layout;
