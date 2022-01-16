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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IOSSwitch } from './IosSwitch';

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

    const [ displayMode, setDisplayMode ] = useState();
    const [ switchState, setSwitchState ] = useState(false);

    useEffect(() => {

        checkCorrectDisplayMode()

    }, []);

    const checkCorrectDisplayMode = () => {

        const storedDisplayMode = (sessionStorage.getItem('displayMode') ? sessionStorage.getItem('displayMode') : 'light');
        setDisplayMode(storedDisplayMode);

        const storedSwitchState = (sessionStorage.getItem('switchState') ? sessionStorage.getItem('switchState') : 'false');
        setSwitchState(storedSwitchState === 'true' ? true : false);

        switch (storedSwitchState) {
            case 'false':
                document.body.classList.remove('dark-content');
                document.body.classList.add('light-content');
                break;
            case 'true':
                document.body.classList.remove('light-content');
                document.body.classList.add('dark-content');
                break;
            default:
                console.log('default');
                break;
        }
    }

    const changeDisplayMode = () => {

        if (displayMode === 'light') {

            setDisplayMode('dark');
            setSwitchState(true);
            sessionStorage.setItem('displayMode', 'dark');
            sessionStorage.setItem('switchState', true);
            document.body.classList.remove('light-content');
            document.body.classList.add('dark-content');

        } else if (displayMode === 'dark') {

            setDisplayMode('light');
            setSwitchState(false);
            sessionStorage.setItem('displayMode', 'light');
            sessionStorage.setItem('switchState', false);
            document.body.classList.remove('dark-content');
            document.body.classList.add('light-content');
            
        }

        console.log('display mode: ', displayMode);
        console.log('class list: ', document.body.classList.value);

    }

    const getDisplayModeIcon = () => {
        switch (displayMode) {
            case 'light':
                return (<LightModeIcon />);
            case 'dark':
                return (<DarkModeIcon />);
            default: 
                return (<LightModeIcon />);
        }
    }

    return (
        <DisplayModeSwitcher>
            <FormGroup>
                <FormControlLabel 
                    control={<IOSSwitch sx={{ m: 1 }} checked={switchState} />} 
                    label={getDisplayModeIcon()} 
                    onChange={changeDisplayMode}
                />
            </FormGroup>
        </DisplayModeSwitcher>
    );
}

const NavigationBar = () => {

    /* App Bar */
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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