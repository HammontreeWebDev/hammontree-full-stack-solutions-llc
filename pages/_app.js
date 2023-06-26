import React from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

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
import '../styles/socials.css';
import '../styles/contact.css';
import '../styles/resume.css';

// components
import Layout from '../components/Layout';
import { SSRProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }) {

    return (
        <SSRProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/img/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik&amp;family=Rubik+Dirt&amp;family=Rubik+Distressed&amp;family=Josefin+Sans&amp;display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
                <Analytics />
            </Layout>
        </SSRProvider>
    )
};