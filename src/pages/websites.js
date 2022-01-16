import React from 'react';
import Layout from '../components/Layout';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Constants } from '../components/Constants';
import ScrollDownButton from '../components/scrollDownButton';

import { WebsitesHeader } from '../styles/websites';

const Websites = () => {

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
        document.title = 'romanzuch · websites'

        setScrollable(isScrollable(document.body));
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Layout>
            <WebsitesHeader>websites</WebsitesHeader>

            <Grid container spacing={0}>

                { /* app 1 */}
                <Grid item
                    xs={Constants.gridSizing.small.left}
                    md={Constants.gridSizing.medium.left}
                    lg={Constants.gridSizing.large.left}
                >

                    <h2>website image/s</h2>

                </Grid>

                <Grid item
                    xs={Constants.gridSizing.small.right}
                    md={Constants.gridSizing.medium.right}
                    lg={Constants.gridSizing.large.right}
                >

                    <h2>website info card</h2>

                </Grid>

            </Grid>
            <ScrollIndicator />
        </Layout>
    );
};

export default Websites;
