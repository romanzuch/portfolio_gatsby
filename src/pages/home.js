import React from 'react';
import { useEffect } from "react";

import { SiteHeader, Description } from '../styles/home';
import { HeaderLarge, HeaderMedium, HeaderSmall } from '../styles/home';

export default function Home() {

    useEffect(() => {
        document.title = 'romanzuch · home'
    }, []);

    return (
        <div>
            <SiteHeader>
                <HeaderLarge>my name is roman.</HeaderLarge>
                <HeaderMedium>i am a product manager and developer.</HeaderMedium>
            </SiteHeader>
 
            { /* some infos about me */}
            <Description>
                <HeaderSmall>some info about me</HeaderSmall>
                <p>
                    my name is roman. i currently live in beautiful berlin, germany. some might find that berlin isn't a nice city, but that really depends on how you experience your surroundings.
                    i find berlin very inspiring, both personally and for my development projects. 

                    <br></br><br></br>

                    i am a self-taught software developer, i learned both ios development (swiftui + uikit) and web development (reactjs). due to my work as a product manager, i also have a strong foundation in ui/ux development and design. 
                </p>

                { /* what i do */}
                <HeaderSmall>what i do</HeaderSmall>
                <p>
                    when developing, i mostly do the whole workflow from ideation, user stories and workflows, over wireframes, mockups and animations, to development and deployment.

                    <br></br><br></br>

                    i find that following an agile process with kanban boards works best for me when doing my own projects, but i also enjoy working in sprints when working on projects for my 9-5.
                </p>
            </Description>
        </div>
    )
}
