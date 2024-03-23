import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Welcome from '../components/Welcome';
import MobileWelcome from '../components/MobileWelcome';
import PageTitle from '../components/PageTitle';

const IndexPage = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return (
    <>
      <Head>
        <title>Hammontree Full-Stack Solutions LLC | Oviedo, FL Web Development</title>
        <meta name="description" content="Discover Kaileb Hammontree, the owner of Hammontree Full-Stack Solutions, LLC, and an accomplished Full-Stack Web Developer based in Central Florida. With certifications from The University of Central Florida as a Cyber Security Professional and Full-Stack Web Developer, Kaileb brings a wealth of knowledge and skills to deliver exceptional results for your next project. Explore Kaileb's portfolio and take the first step by reaching out through our convenient contact section to initiate a fruitful conversation today." />
        <meta name="keywords" content="website development, oviedo, florida, UCF, central florida, developer, kaileb hammontree, full-stack web development, portfolio, solutions" />
        <link rel="canonical" href="https://www.kailebhammontree.com" />

      </Head>
      {shouldRender && (
        <main className="home-page">
          {typeof window !== 'undefined' && window.innerWidth > 540 ? (
            <>
            <PageTitle content={"Transforming Dreams Into Digital Reality"}/>
            <Welcome />
            </>
          ) : (
            <MobileWelcome />
          )}
        </main>
      )}
    </>
  );
};

export default IndexPage;