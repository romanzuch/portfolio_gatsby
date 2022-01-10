import React from 'react';
import Layout from '../components/Layout';
import { Station, Info, Employer, Role, Position } from '../styles/resume';

export default function Resume() {
    return (
        <div>
            <Layout>
                <h1>resume</h1>
                <Station>
                    <Info>
                        <Employer>medloop</Employer>
                        {/* here comes some info similar to LinkedIn */}
                    </Info>
                    <Position>
                        <Role>product manager</Role>
                    </Position>
                </Station>
            </Layout>
        </div>
    )
}
