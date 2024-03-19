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
         <CertificateCard src={"/img/coding.webp"} verification={'https://badgr.com/public/assertions/ewkha2NyQ8-IAo-788fTUA'} alt={'UCF Full-Stack Coding Boot Camp Certificate'} appTitle={'UCF Coding Boot Camp'} content={'A comprehensive full-stack coding boot camp'} />

          {/* UCF Cyber Defense Professional Certificate*/}
        <CertificateCard src={"/img/cyber.webp"} alt={'UCF Cyber Defense Professional Certificate'} appTitle={'Jesse Ryder Brown Foundation, Inc'} content={'ReactJS | NextJS | Node.js | Custom CSS'} />

         {/* Hacker Rank CSS Skill Verification*/}
         <CertificateCard src={"/img/CSS.webp"} alt={'Hacker Rank CSS Skill Verification'} appTitle={'Jesse Ryder Brown Foundation, Inc'} content={'ReactJS | NextJS | Node.js | Custom CSS'} />

          {/* Hacker Rank Front End React Role Verification*/}
        <CertificateCard src={"/img/react.webp"} alt={'Hacker Rank Front End Developer for React Role Verification'} appTitle={'Jesse Ryder Brown Foundation, Inc'} content={'ReactJS | NextJS | Node.js | Custom CSS'} />

       </main>
        </>
    )
};

export default Certifications;