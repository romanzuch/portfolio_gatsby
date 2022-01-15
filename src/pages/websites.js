import React from 'react';
import Layout from '../components/Layout';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Constants } from '../components/Constants';

import { WebsitesHeader } from '../styles/websites';

const Websites = () => {

    useEffect(() => {
        document.title = 'romanzuch · websites'
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

        </Layout>
    );
};

export default Websites;
