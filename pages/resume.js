import React from 'react';
import { FadeInSection, FadeInUl, FadeInUpH5 } from '../utils/Animations';
import { Icon } from '@iconify/react';
import Head from 'next/head';

// we copied the about me card here, so it is inheriting some of the custom card classes from that css file
function Resume(props) {

    return (
        <>
            <Head>
                <title> Resume | Kaileb Hammontree</title>
                <meta name="description" content="Explore Kaileb Hammontree's resume. View the Front-End Skills, Back-End Skills, General Skills & Technology, and Cyber Security Knowledge that he has to offer within the scope of Full-Stack Development. Want a hard copy? Click the download button to view a pdf version of his complete resume." />
                <meta name="keywords" content="resume, kaileb hammontree, front-end development, back-end development, cyber security" />
                <link rel="canonical" href="https://www.kailebhammontree.com/resume" />
            </Head>
            <main className='about-me-body'>
                <FadeInSection className=' custom-card'>
                    <div className='resume-card-header'>
                        <h2> Download <span><a className='resume-btn hvr-skew hvr-pulse-grow' href="/pdf/Technical-Resume.pdf" download='Kaileb_Hammontree_Resume' target='blank'><Icon icon='material-symbols:arrow-forward-rounded' /> <Icon icon='icon-park-solid:folder-download' /></a></span> </h2>
                    </div>
                    <div className='custom-card-body resume-body'>
                        <FadeInUpH5 className='skill-title'>Front-End Skills:</FadeInUpH5>
                        <FadeInUl className='skill-container'>
                            <div className='skill-item'>
                                <li>HTML5</li>
                                <li>JavaScript</li>
                                <li>CSS (Flexbox / Custom)</li>
                                <li>CSS Framework (Bulma, Bootstrap)</li>
                                <li>Apollo Client</li>
                            </div>

                            <div className='skill-item'>
                                <li>Local Storage/Session Storage</li>
                                <li>jQuery</li>
                                <li>API (JSON, AJAX, REST, Web, 3rd party)</li>
                                <li>ReactJS</li>
                                <li>Handlebars</li>
                            </div>
                        </FadeInUl >

                        <FadeInUpH5 className='skill-title'>Back-End Skills:</FadeInUpH5>
                        <FadeInUl className='skill-container'>
                            <div className='skill-item'>
                                <li>SQL / MySQL (DBeaver)</li>
                                <li>Node.js</li>
                                <li>Express.js (Insomnia)</li>
                                <li>MongoDB (Mongoose)</li>
                                <li>Server-Side API Development</li>
                            </div>

                            <div className='skill-item'>
                                <li>GraphQL</li>
                                <li>Apollo Server</li>
                                <li>C# (in progress)</li>
                                <li>Python (advanced concepts in progress)</li>
                                <li>Java (in progress)</li>
                            </div>
                        </FadeInUl >

                        <FadeInUpH5 className='skill-title'>General Skills & Technology:</FadeInUpH5>
                        <FadeInUl className='skill-container'>
                            <div className='skill-item'>
                                <li>MERN Stack</li>
                                <li>Babeljs</li>
                                <li>Git (version control)</li>
                                <li>GitHub / GitHub Pages</li>
                            </div>

                            <div className='skill-item'>
                                <li>Heroku</li>
                                <li>Progressive Web Applications</li>
                                <li>Algorithms</li>
                                <li>Agile Methodology</li>
                            </div>
                        </FadeInUl >

                        <FadeInUpH5 className='skill-title'>Cyber Security Knowledge:</FadeInUpH5>
                        <FadeInUl className='skill-container'>
                            <div className='skill-item'>
                                <li>Linux Security</li>
                                <li>Microsoft Security</li>
                                <li>Network Security</li>
                                <li>Cloud Security</li>
                                <li>Ethical Hacking</li>
                            </div>

                            <div className='skill-item'>
                                <li>Computer Networking</li>
                                <li>Cyber Infrastructure & Technology</li>
                                <li>Digital Forensics And Incident Response</li>
                                <li>Game Theory</li>
                                <li>Amazon Web Services</li>
                            </div>
                        </FadeInUl >

                    </div>
                </FadeInSection>
            </main>
        </>
    )
}

export default Resume;