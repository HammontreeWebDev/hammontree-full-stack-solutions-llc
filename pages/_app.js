import React from 'react';

// css libraries
import 'hover.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// ! originally deployed using create-react-app so unfortunately some of the css is used in other components, therefore we will be importing all of the files globally, will refactor at some point to condense the amount of css being served globally
// global css
import '../styles/style.css';
import '../styles/navbar.css';
import '../styles/homepage.css';
import '../styles/mobile-welcome.css';
import '../styles/welcome.css';
import '../styles/footer.css';
import '../styles/aboutme.css';
import '../styles/portfolio.css';
import '../styles/services.css';

// components
import Layout from './Layout';
import { SSRProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SSRProvider>
    );
};