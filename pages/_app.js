import React from 'react';
// global css
import '../styles/style.css';
// components
import Layout from './Layout';

function App({ Component, pageProps}) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
};

export default App;