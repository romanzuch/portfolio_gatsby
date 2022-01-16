import React from "react";
import styled from 'styled-components';
import NavigationBar from './Navbar';
import Socials from "./socials";
import { LayoutWrapper } from "../styles/layout";

const LayoutMain = styled.main `
    margin: 2rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Layout = ({children}) => {
    return (
        <LayoutWrapper>
            <NavigationBar />
            <LayoutMain>
                {children}
                <Socials />
            </LayoutMain>
        </LayoutWrapper>
    )
}

export default Layout;
