import React from 'react';
import Layout from '../components/Layout';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Constants } from '../components/Constants';
import { AppsHeader } from '../styles/apps';

export default function Apps() {

    useEffect(() => {
        document.title = 'romanzuch · apps'
    }, []);

    return (
        <div>
            <Layout>
                <AppsHeader>apps</AppsHeader>

                <Grid container spacing={0}>

                    { /* app 1 */}
                    <Grid item 
                        xs={Constants.gridSizing.small.left} 
                        md={Constants.gridSizing.medium.left} 
                        lg={Constants.gridSizing.large.left}
                    >

                        <h2>App Image/s</h2>

                    </Grid>

                    <Grid item 
                        xs={Constants.gridSizing.small.right} 
                        md={Constants.gridSizing.medium.right} 
                        lg={Constants.gridSizing.large.right}
                    >

                        <h2>App Info Card</h2>

                    </Grid>

                </Grid>

            </Layout>
        </div>
    )
}
