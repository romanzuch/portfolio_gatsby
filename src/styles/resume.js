import styled from 'styled-components';

export const ResumeHeader = styled.h1`
    margin: 0 0 1rem 0;
`

export const Info = styled.div`
    padding: 1rem 3rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const InfoElement = styled.p`
    margin: 0;
    padding: 0.2rem 0 0 0;
    font-style: italic;
`

export const Employer = styled.h2`
    font-size: 1.4rem;
    margin: 0;
`

export const Positions = styled.div`
    display: flex;
    flex-direction: column;
`

export const Position = styled.div`
    padding: 1rem 0 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const Role = styled.h2`
    font-size: 1.4rem;
`

export const RoleDescription = styled.ul`
    list-style-type: circle; 
    margin: 0.5rem 0 0 0;
    padding: 0;
    text-align: start;
`

export const RoleDescriptionElement = styled.li`
    margin: 0;
    padding: 0.5rem;
    font-weight: 300;
    
`

export const ResumeContent = styled.div`
    margin: 0 2rem 2rem 6rem;
    padding: 0;
`