import React from "react";
import styled from 'styled-components';
import NavigationBar from './Navbar';
import Socials from "./socials";
import { LayoutWrapper, setDisplayMode } from "../styles/layout";
import { AppSettings } from "./Constants";

/* Display Mode */
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { ChangeDisplayMode } from './Constants';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const LayoutMain = styled.main `
    margin: 2rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const DisplayModeSwitcher = styled.main`
    margin-top: 2rem;
    position: fixed;
    display: flex;
    flex-direction: row;
    top: 0;
    right: 0;
`

const DisplayModeSwitch = () => {

    const [ displayModeIcon, setDisplayModeIcon ] = useState(<LightModeIcon />)

    const changeDisplayMode = () => {

        if (AppSettings.displayMode === 'light') {

            ChangeDisplayMode('dark');
            setDisplayModeIcon(<DarkModeIcon />);
            document.body.classList.remove('light-content');
            document.body.classList.add('dark-content');

        } else if (AppSettings.displayMode === 'dark') {

            ChangeDisplayMode('light');
            setDisplayModeIcon(<LightModeIcon />);
            document.body.classList.remove('dark-content');
            document.body.classList.add('light-content');
            
        }
    }

    return (
        <DisplayModeSwitcher>
            <FormGroup>
                <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label={displayModeIcon} 
                    onChange={changeDisplayMode}
                />
            </FormGroup>
        </DisplayModeSwitcher>
    );
}

const Layout = ({children}) => {
    return (
        <LayoutWrapper>
            <NavigationBar />
            <DisplayModeSwitch />
            <LayoutMain>
                {children}
                <Socials />
            </LayoutMain>
        </LayoutWrapper>
    )
}

export default Layout;
