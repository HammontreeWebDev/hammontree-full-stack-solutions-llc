import React from "react";
import Head from "next/head";
import CertificateCard from "../components/CertificateCard";

function Certifications() {

    return(
        <>
        <Head>
        <title> Certifications | Kaileb Hammontree</title>
        <meta name="description" content="Learn about what qualifies Kaileb Hammontree to tackle your next project." />
        <meta name="keywords" content="certifications, education, Kaileb Hammontree, University Of Central Florida, Web Developer, react, front-end, full-stack, back-end" />
        <link rel="canonical" href="https://www.kailebhammontree.com/certifications" />
      </Head>

      <main className="portfolio-body">

         {/* UCF Coding Boot Camp*/}
         <CertificateCard src={"/img/coding.webp"} alt={'screenshot of J-Boo Customs Website'} appTitle={'UCF Coding Boot Camp'} content={'ReactJS | NextJS | Node.js | Custom CSS'} />

          {/* UCF Cyber Defense Professional Certificate*/}
        <CertificateCard src={"/img/cyber.webp"} alt={'screenshot of J-Boo Customs Website'} appTitle={'Jesse Ryder Brown Foundation, Inc'} content={'ReactJS | NextJS | Node.js | Custom CSS'} />

         {/* Hacker Rank CSS Skill Verification*/}
         <CertificateCard src={"/img/CSS.webp"} alt={'screenshot of J-Boo Customs Website'} appTitle={'Jesse Ryder Brown Foundation, Inc'} content={'ReactJS | NextJS | Node.js | Custom CSS'} />

          {/* Hacker Rank Front End React Role Verification*/}
        <CertificateCard src={"/img/react.webp"} alt={'screenshot of J-Boo Customs Website'} appTitle={'Jesse Ryder Brown Foundation, Inc'} content={'ReactJS | NextJS | Node.js | Custom CSS'} />

       </main>
        </>
    )
};

export default Certifications;