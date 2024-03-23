import React from "react";
import Head from "next/head";
import CertificateCard from "../components/CertificateCard";

function Certifications() {

    return (
        <>
            <Head>
                <title> Certifications | Kaileb Hammontree</title>
                <meta name="description" content="Learn about what qualifies Kaileb Hammontree to tackle your next project." />
                <meta name="keywords" content="certifications, education, Kaileb Hammontree, University Of Central Florida, Web Developer, react, front-end, full-stack, back-end" />
                <link rel="canonical" href="https://www.kailebhammontree.com/certifications" />
            </Head>

            <main className="portfolio-body">

                {/* UCF Coding Boot Camp*/}
                <CertificateCard src={"/img/coding-cert.webp"} verification={'https://badgr.com/public/assertions/ewkha2NyQ8-IAo-788fTUA'} alt={'UCF Full-Stack Coding Boot Camp Certificate'} appTitle={'UCF Coding Boot Camp'} photo_icon={'img/bootcamp-bg.webp'} lowResPhoto={'img/bootcamp-low-res.webp'}/>

                {/* bootcamp-bg.webp Photo by Danny Meneses: https://www.pexels.com/photo/photo-of-turned-on-laptop-computer-943096/ */}

                {/* UCF Cyber Defense Professional Certificate*/}
                <CertificateCard src={"/img/cyber-cert.webp"} verification={'https://badgr.com/public/assertions/Rxyg7wKwTgWLC07_shNy6A'} alt={'UCF Cyber Defense Professional Certificate'} appTitle={'UCF Cyber Defense Professional Certificate'} photo_icon={'img/cyber-bg.webp'} lowResPhoto={'img/cyber-bg-low-res.webp'}/>

                {/* cyber-bg.webp Photo by Stefan Coders: https://www.pexels.com/photo/woman-coffee-apple-iphone-5243611/ */}


                {/* Hacker Rank CSS Skill Verification*/}
                <CertificateCard src={"/img/css-cert.webp"} verification={'https://www.hackerrank.com/certificates/c7a702eeeac3'} alt={'Hacker Rank CSS Skill Verification'} appTitle={'CSS Skill Certification'} photo_icon={'img/css-bg.webp'} lowResPhoto={'img/css-bg-low-res.webp'}/>

                {/* css-bg.webp Photo by Karol D: https://www.pexels.com/photo/seat-sketch-paper-on-table-1111692/*/}


                {/* Hacker Rank Front End React Role Verification*/}
                <CertificateCard src={"/img/front-end-cert.webp"} verification={'https://www.hackerrank.com/certificates/4d0e4bd62b7c'} alt={'Hacker Rank Front End Developer for React Role Verification'} appTitle={'Frontend Developer (React) Certification'} photo_icon={'img/react-bg.webp'} lowResPhoto={'img/react-bg-low-res.webp'}/>

                {/* react-bg.webp Photo by cottonbro studio: https://www.pexels.com/photo/workstation-while-working-on-the-webpage-6804581/*/}


            </main>
        </>
    )
};

export default Certifications;