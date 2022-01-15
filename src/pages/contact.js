import React from 'react';
import Layout from '../components/Layout';
import { useEffect } from "react";

export default function Contact() {

    useEffect(() => {
        document.title = 'romanzuch · contact'
    }, []);

    return (
        <div>
            <Layout>
                <h1>contact</h1>
            </Layout>
        </div>
    )
}
