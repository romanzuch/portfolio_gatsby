import React from 'react';
import styled from 'styled-components';
import { SpeedDial, SpeedDialAction } from '@mui/material';

import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Icon } from '@iconify/react';

const SocialDial = styled.nav `
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position:fixed;
    bottom:0;
`

const actions = [
    { icon: <LinkedInIcon />, name: 'linkedin', url: 'https://www.linkedin.com/in/romanzuchowski/' },
    { icon: <GitHubIcon />, name: 'github', url: 'https://github.com/romanzuch' },
    { icon: <Icon icon='mdi:stack-overflow' />, name: 'stackoverflow', url: 'https://stackoverflow.com/users/9220203/roman-zuchowski' }
  ];

function openURL(url) {
    window.open(url);
}

const Socials = () => {
    return (
        <SocialDial>
            <SpeedDial
                ariaLabel="socials"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<PublicIcon />}
                direction='up'
                >
                {actions.map((action) => (
                    <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={e => {
                        e.stopPropagation();
                        openURL(action.url)
                    }}
                    />
                ))}
            </SpeedDial>
        </SocialDial>
    )
}

export default Socials;
