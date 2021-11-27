import * as React from 'react';
import Layout from '../components/Layout';
import Home from './home';
import '../styles/index.css';

const IndexPage = () => {
  return (
    <main>
      <title>romanzuch</title>
      <Layout className='layout'>
        <Home />
      </Layout>
    </main>
  )
}

export default IndexPage
