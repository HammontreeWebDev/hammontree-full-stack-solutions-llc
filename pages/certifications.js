import React from "react";
import Head from "next/head";
import CertificateCard from "../components/CertificateCard";
import PageTitle from "../components/PageTitle";

function Certifications() {

    return (
        <>
            <Head>
                <title> Certifications | Kaileb Hammontree</title>
                <meta name="description" content="Learn about what qualifies Kaileb Hammontree to tackle your next project." />
                <meta name="keywords" content="certifications, education, Kaileb Hammontree, University Of Central Florida, Web Developer, react, front-end, full-stack, back-end" />
                <link rel="canonical" href="https://www.kailebhammontree.com/certifications" />
            </Head>

            <PageTitle content={'Certifications'} icon={'iconamoon:certificate-badge-fill'}/>

            <main className="portfolio-body">

                {/* UCF Coding Boot Camp*/}
                <CertificateCard src={"/img/coding-cert.webp"} verification={'https://badgr.com/public/assertions/ewkha2NyQ8-IAo-788fTUA'} alt={'UCF Full-Stack Coding Boot Camp Certificate'} appTitle={'UCF Coding Boot Camp'} />

                {/* UCF Cyber Defense Professional Certificate*/}
                <CertificateCard src={"/img/cyber-cert.webp"} verification={'https://badgr.com/public/assertions/Rxyg7wKwTgWLC07_shNy6A'} alt={'UCF Cyber Defense Professional Certificate'} appTitle={'UCF Cyber Defense Professional Certificate'} />

                {/* Hacker Rank CSS Skill Verification*/}
                <CertificateCard src={"/img/css-cert.webp"} verification={'https://www.hackerrank.com/certificates/c7a702eeeac3'} alt={'Hacker Rank CSS Skill Verification'} appTitle={'CSS Skill Certification'} />

                {/* Hacker Rank Front End React Role Verification*/}
                <CertificateCard src={"/img/front-end-cert.webp"} verification={'https://www.hackerrank.com/certificates/4d0e4bd62b7c'} alt={'Hacker Rank Front End Developer for React Role Verification'} appTitle={'Frontend Developer (React) Certification'} />

            </main>
        </>
    )
};

export default Certifications;