import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FadeInUpSection, LongFadeInDiv } from "../utils/Animations";
import Head from "next/head";
import PageTitle from "../components/PageTitle";

const Services = (props) => {
    return (
        <>
            <Head>
                <title> Services | Hammontree Full-Stack Solutions LLC</title>
                <meta name="description" content="Browse the services of Hammontree Full-Stack Solutions LLC. Kickstart your project today by filling out an Interest Form and booking a Free Consultation!" />
                <meta name="keywords" content="Services, Hammontree Full-Stack Solutions LLC, Consultation, Booking, Interest Form, MERN Stack, SQL, JavaScript" />
                <link rel="canonical" href="https://www.kailebhammontree.com/services" />
            </Head>

            <main className="services-main">
                <LongFadeInDiv className="start-project">
                    <PageTitle content={'Web Development'} icon={'noto:laptop'} />
                    <h3 className="disclaimer">Ready To Start Your Project? Fill Out An&nbsp;
                        <span>
                            <Link className="contact-link" href="https://app.hellobonsai.com/f/a14a29cd17402aa" target="_blank" >Interest Form</Link>
                        </span>
                        &nbsp;And Book A&nbsp;
                        <span>
                            <Link className="contact-link" href="https://app.hellobonsai.com/s/kaileb-hammontree-1/consultation" target="_blank" >Free Consultation.</Link>
                        </span>
                    </h3>
                </LongFadeInDiv>

                <div className="sub-container">

                    <FadeInUpSection className="service-column">
                        <h2>Full-Stack</h2>
                        <p>For websites and applications that need dynamic and flexible data retrieval</p>
                        <ul>
                            <li><Icon className="service-icon" icon="devicon:mongodb" />MongoDB</li>
                            <li><Icon className="service-icon" icon="skill-icons:expressjs-light" />Express.js</li>
                            <li><Icon className="service-icon" icon="logos:react" />React.js</li>
                            <li><Icon className="service-icon" icon="devicon:nodejs" />Node.js</li>
                            <li><Icon className="service-icon" icon="skill-icons:apollo" />Apollo</li>
                            <li><Icon className="service-icon" icon="skill-icons:graphql-dark" />GraphQL</li>
                        </ul>
                    </FadeInUpSection>

                    <FadeInUpSection className="service-column">
                        <h2>Front-End</h2>
                        <p>For landing pages, portfolios, and other websites that don&#39;t require a server to be set up</p>
                        <ul>
                            <li><Icon className="service-icon" icon="devicon:html5" />HTML5</li>
                            <li><Icon className="service-icon" icon="devicon:css3" />CSS3</li>
                            <li><Icon className="service-icon" icon="logos:react" />React.js</li>
                            <li><Icon className="service-icon" icon="devicon:javascript" />JavaScript</li>
                            <li><Icon className="service-icon" icon="devicon:jquery" />jQuery</li>
                        </ul>
                    </FadeInUpSection>

                    <FadeInUpSection className="service-column">
                        <h2>Back-End</h2>
                        <p>Additional back-end technology to suit your needs</p>
                        <ul>
                            <li><Icon className="service-icon" icon="devicon:mysql" />MySQL</li>
                            <li><Icon className="service-icon" icon="vscode-icons:file-type-sql" />SQL</li>
                        </ul>
                    </FadeInUpSection>

                </div>
            </main>
        </>
    )
}

export default Services;