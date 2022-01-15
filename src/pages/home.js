import React from 'react';
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        document.title = 'romanzuch · home'
    }, []);

    return (
        <div>
	        <h1>my name is roman.</h1>
            <h2>i am a product manager and developer.</h2>
        </div>
    )
}
