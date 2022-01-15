import React from 'react';
import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


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
                <ArrowDownwardIcon color="action" fontSize="large" />
            </ScrollButton>
        </ButtonDiv>
    )
}

export default ScrollDownButton;