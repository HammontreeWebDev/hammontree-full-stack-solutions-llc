import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

import { useRouter } from 'next/router';

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
import { Icon, enableCache } from '@iconify/react';
enableCache('local');

export default function App({ Component, pageProps }) {

    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => {
            setIsLoading(true);
        };
        const handleComplete = () => {
            setIsLoading(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, []);

    useEffect(() => {
        // Trigger the loading state on the initial page load
        setIsLoading(true);
    
        // Set the loading state to false after a short delay (e.g., 2 seconds)
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);

    return (
        <>
            {isLoading ? (
                <div style={{
                    color: "var(--light-pink)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    fontSize: "80px",
                }}>Loading ...<Icon className='loading-icon' icon="line-md:loading-loop"></Icon></div>
            ) : (
                <SSRProvider>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/img/favicon.ico" />
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
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
            )}
        </>
    );
};