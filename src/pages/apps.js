import React from 'react';
import Layout from '../components/Layout';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Constants } from '../components/Constants';
import ScrollDownButton from '../components/scrollDownButton';

import '../styles/apps.css';

export default function Apps() {

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
        document.title = 'romanzuch · apps'

        setScrollable(isScrollable(document.body));
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Layout>
                <div className='AppContent'>
                    <h1 className='AppHeader'>apps</h1>

                    <Grid container spacing={0}>

                        { /* app 1 */}
                        <Grid item 
                            xs={Constants.gridSizing.small.left} 
                            md={Constants.gridSizing.medium.left} 
                            lg={Constants.gridSizing.large.left}
                        >

                            <div className='AppImages'>
                                <h2>app image/s</h2>
                            </div>

                        </Grid>

                        <Grid item 
                            xs={Constants.gridSizing.small.right} 
                            md={Constants.gridSizing.medium.right} 
                            lg={Constants.gridSizing.large.right}
                        >

                            <div className='AppDescription'>
                                <h2>app info</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </p>
                            </div>

                        </Grid>

                        { /* app 2 */}
                        <Grid item 
                            xs={Constants.gridSizing.small.left} 
                            md={Constants.gridSizing.medium.left} 
                            lg={Constants.gridSizing.large.left}
                        >

                            <div className='AppImages'>
                                <h2>app image/s</h2>
                            </div>

                        </Grid>

                        <Grid item 
                            xs={Constants.gridSizing.small.right} 
                            md={Constants.gridSizing.medium.right} 
                            lg={Constants.gridSizing.large.right}
                        >

                            <div className='AppDescription'>
                                <h2>app info</h2>
                            </div>

                        </Grid>

                    </Grid>
                </div>
                <ScrollIndicator />
            </Layout>
        </div>
    )
}
