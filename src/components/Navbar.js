import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

/* App Bar */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

/* Display Mode */
import { AppSettings } from "./Constants";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { ChangeDisplayMode } from './Constants';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

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
    text-decoration: none;
`

const DisplayModeSwitcher = styled.main`
    display: flex;
    flex-direction: row;
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

const NavigationBar = () => {

    /* App Bar */
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                            <NavbarLink to='/'>home</NavbarLink>
                            <NavbarLink to='/resume'>resume</NavbarLink>
                            <NavbarLink to='/apps'>apps</NavbarLink>
                            <NavbarLink to='/websites'>websites</NavbarLink>
                            <NavbarLink to='/contact'>contact</NavbarLink>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <NavbarLink to='/'>home</NavbarLink>
                        <NavbarLink to='/resume'>resume</NavbarLink>
                        <NavbarLink to='/apps'>apps</NavbarLink>
                        <NavbarLink to='/websites'>websites</NavbarLink>
                        <NavbarLink to='/contact'>contact</NavbarLink>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <DisplayModeSwitch />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavigationBar;

/* 

<Navbar>
    <NavbarLink to='/'>home</NavbarLink>
    <NavbarLink to='/resume'>resume</NavbarLink>
    <NavbarLink to='/apps'>apps</NavbarLink>
    <NavbarLink to='/websites'>websites</NavbarLink>
    <NavbarLink to='/contact'>contact</NavbarLink>
</Navbar>

*/