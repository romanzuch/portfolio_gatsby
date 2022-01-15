import React from 'react';
import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { AppSettings, ChangeDisplayMode } from './Constants';
import '../styles/index.css';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const DisplayModeSwitcher = styled.main`
    margin-top: 2rem;
    position: fixed;
    display: flex;
    flex-direction: row;
    top: 0;
    right: 0;
`

const DisplayModeSwitch = () => {

    const changeDisplayMode = () => {

        if (AppSettings.displayMode === 'light') {

            ChangeDisplayMode('dark');
            console.log('Removing light-content')
            document.body.classList.remove('light-content');
            console.log('Adding dark-content')
            document.body.classList.add('dark-content');
            console.log('Setting to dark mode');

        } else if (AppSettings.displayMode === 'dark') {

            ChangeDisplayMode('light');
            console.log('Removing dark-content')
            document.body.classList.remove('dark-content');
            console.log('Adding light-content')
            document.body.classList.add('light-content');
            
        }
    }

    return (
        <DisplayModeSwitcher>
            <FormGroup>
                <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label={(AppSettings.displayMode === 'light' ? <LightModeIcon /> : <DarkModeIcon />)} 
                    onChange={changeDisplayMode}
                />
            </FormGroup>
        </DisplayModeSwitcher>
    );
}

export default DisplayModeSwitch;

            