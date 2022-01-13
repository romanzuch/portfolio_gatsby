import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const ButtonDiv = styled.nav `
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position:fixed;
    bottom:0;
`

const ScrollButton = styled.div`
    margin-bottom: 16px;
`

const ScrollDownButton = () => {
    return (
        <ButtonDiv>
            <ScrollButton>
                <KeyboardArrowDownIcon />
            </ScrollButton>
        </ButtonDiv>
    )
}

export default ScrollDownButton;