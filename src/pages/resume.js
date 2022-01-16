import React from 'react';
import Layout from '../components/Layout';
import { ResumeContent, ResumeHeader } from '../styles/resume';
import { Info, InfoElement } from '../styles/resume';
import { Employer, Role, Positions, Position } from '../styles/resume';
import { RoleDescription, RoleDescriptionElement } from '../styles/resume';
import ScrollDownButton from '../components/scrollDownButton';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Constants } from '../components/Constants';

export default function Resume() {

    const isScrollable = function (ele) {
        // Compare the height to see if the element has scrollable content
        const hasScrollableContent = ele.scrollHeight > ele.clientHeight;
    
        // It's not enough because the element's `overflow-y` style can be set as
        // * `hidden`
        // * `hidden !important`
        // In those cases, the scrollbar isn't shown
        const overflowYStyle = window.getComputedStyle(ele).overflowY;
        const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;
    
        return hasScrollableContent && !isOverflowHidden;
    };

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollable, setScrollable] = useState();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    function ScrollIndicator() {
        if (scrollable) {
            if (scrollPosition < 50) {
                return <ScrollDownButton />
            } else {
                return <div />
            }
        } else {
            return <div />
        }
    };

    useEffect(() => {

        document.title = 'romanzuch · resume'

        setScrollable(isScrollable(document.body));
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Layout>
                
            <ResumeContent>

            <ResumeHeader>resume</ResumeHeader>

                <Grid container spacing={0}>

                    { /* station 1 */}
                    <Grid item 
                        xs={Constants.gridSizing.small.left} 
                        md={Constants.gridSizing.medium.left} 
                        lg={Constants.gridSizing.large.left}
                    >
                        <Info>
                            <Employer>medloop</Employer>
                            {/* here comes some info similar to LinkedIn */}
                            <InfoElement>2020/09 - today</InfoElement>
                            <InfoElement>berlin, germany</InfoElement>
                        </Info>
                    </Grid>

                    <Grid item 
                        xs={Constants.gridSizing.small.right} 
                        md={Constants.gridSizing.medium.right} 
                        lg={Constants.gridSizing.large.right}
                    >
                        <Positions>
                            <Position>
                                {/* position 1 */}
                                <Role>product manager</Role>
                                <InfoElement>2021/09 - today</InfoElement>
                                <RoleDescription>
                                    <RoleDescriptionElement>development of a seamless patient experience to ensure easier access to health care</RoleDescriptionElement>
                                    <RoleDescriptionElement>advancements to our services to digitalize and improve the patient journey</RoleDescriptionElement>
                                    <RoleDescriptionElement>creating workflows, wireframes, mockups, and user stories, and carrying out client/user research</RoleDescriptionElement>
                                    <RoleDescriptionElement>technical onboarding of new colleagues, including setting up keys and vpn connections</RoleDescriptionElement>
                                    <RoleDescriptionElement>basically the go-to IT admin + support for the whole company</RoleDescriptionElement>
                                    <RoleDescriptionElement>used technology: whimsical, figma, jira, confluence</RoleDescriptionElement>
                                </RoleDescription>
                            </Position>
                            <Position>
                                {/* position 2 */}
                                <Role>technical account manager</Role>
                                <InfoElement>2020/09 - 2021/09</InfoElement>
                                <RoleDescription>
                                    <RoleDescriptionElement>responsible for the implementation and the operation of PMS software</RoleDescriptionElement>
                                    <RoleDescriptionElement>responsible for the technical realization on-site, training of the practice staff, and for technical support</RoleDescriptionElement>
                                    <RoleDescriptionElement>involved in the development of the PMS software as well as our patient app</RoleDescriptionElement>
                                    <RoleDescriptionElement>used technology: swift, uikit, reactjs, linux</RoleDescriptionElement>
                                </RoleDescription>
                            </Position>
                        </Positions>
                    </Grid>

                    { /* station 2 */}
                    <Grid item 
                        xs={Constants.gridSizing.small.left} 
                        md={Constants.gridSizing.medium.left} 
                        lg={Constants.gridSizing.large.left}
                    >
                        <Info>
                            <Employer>edag group</Employer>
                            {/* here comes some info similar to LinkedIn */}
                            <InfoElement>2018/05 - 2020/09</InfoElement>
                            <InfoElement>munich, germany</InfoElement>
                        </Info>
                    </Grid>

                    <Grid item 
                        xs={Constants.gridSizing.small.right} 
                        md={Constants.gridSizing.medium.right} 
                        lg={Constants.gridSizing.large.right}
                    >
                        <Positions>
                            <Position>
                                {/* position 3 */}
                                <Role>systems engineer</Role>
                                <InfoElement>2020/04 - 2020/09</InfoElement>
                                <RoleDescription>
                                    <RoleDescriptionElement>ecu software testing for large MAN trucks</RoleDescriptionElement>
                                    <RoleDescriptionElement>software test automation</RoleDescriptionElement>
                                </RoleDescription>
                            </Position>
                            <Position>
                                {/* position 4 */}
                                <Role>development engineer</Role>
                                <InfoElement>2018/05 - 2020/04</InfoElement>
                                <RoleDescription>
                                    <RoleDescriptionElement>responsible engineering lead of a inter-disciplinary team for the BMW ag</RoleDescriptionElement>
                                    <RoleDescriptionElement>continuous engineering of a occupant detection system</RoleDescriptionElement>
                                    <RoleDescriptionElement>coordination between various internal and external partners, as well as suppliers</RoleDescriptionElement>
                                </RoleDescription>
                            </Position>
                        </Positions>
                    </Grid>

                    { /* station 3 */}
                    <Grid item 
                        xs={Constants.gridSizing.small.left} 
                        md={Constants.gridSizing.medium.left} 
                        lg={Constants.gridSizing.large.left}
                    >
                        <Info>
                            <Employer>siemens</Employer>
                            {/* here comes some info similar to LinkedIn */}
                            <InfoElement>2017/05 - 2017/08</InfoElement>
                            <InfoElement>mülheim, germany</InfoElement>
                        </Info>
                    </Grid>

                    <Grid item 
                        xs={Constants.gridSizing.small.right} 
                        md={Constants.gridSizing.medium.right} 
                        lg={Constants.gridSizing.large.right}
                    >
                        <Positions>
                            <Position>
                                {/* position 5 */}
                                <Role>graduate</Role>
                                <InfoElement>2017/05 - 2017/08</InfoElement>
                                <RoleDescription>
                                    <RoleDescriptionElement>bachelor thesis: "phase change of partially stabilized zirconia under variable temperature load conditions"</RoleDescriptionElement>
                                </RoleDescription>
                            </Position>
                        </Positions>
                    </Grid>

                    { /* station 4 */}
                    <Grid item 
                        xs={Constants.gridSizing.small.left} 
                        md={Constants.gridSizing.medium.left} 
                        lg={Constants.gridSizing.large.left}
                    >
                        <Info>
                            <Employer>siemens</Employer>
                            {/* here comes some info similar to LinkedIn */}
                            <InfoElement>2016/08 - 2016/12</InfoElement>
                            <InfoElement>mülheim, germany</InfoElement>
                        </Info>
                    </Grid>

                    <Grid item 
                        xs={Constants.gridSizing.small.right} 
                        md={Constants.gridSizing.medium.right} 
                        lg={Constants.gridSizing.large.right}
                    >
                        <Positions>
                            <Position>
                                {/* position 6 */}
                                <Role>intern</Role>
                                <InfoElement>2016/08 - 2016/12</InfoElement>
                                <RoleDescription>
                                    <RoleDescriptionElement>collaboration in inter-disciplinary team to improve ceramic-based turbine coatings</RoleDescriptionElement>
                                    <RoleDescriptionElement>preparation and presentation of lectures</RoleDescriptionElement>
                                    <RoleDescriptionElement>creatioin of literature organisation tool using excel vba</RoleDescriptionElement>
                                </RoleDescription>
                            </Position>
                        </Positions>
                    </Grid>

                </Grid>

            </ResumeContent>

            <ScrollIndicator />

        </Layout>
    )
}