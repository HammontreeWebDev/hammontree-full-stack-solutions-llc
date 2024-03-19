import React from "react";
import { Icon, enableCache } from '@iconify/react';
import Link from "next/link";

// allow iconify icons to be stored locally for quicker rendering
enableCache('local');

export default function Footer() {

    return (
        <footer>
            <section className="footer-row">
                <a className='hvr-icon-spin icon' href="https://github.com/HammontreeWebDev" target="_blank" rel="noopener noreferrer" ><Icon className="hvr-icon" icon="fa:github-square" /></a>
                <a className='hvr-icon-spin icon' href="https://www.linkedin.com/in/kaileb-hammontree/" target="_blank" rel="noopener noreferrer" ><Icon className="hvr-icon" icon="brandico:linkedin-rect" /></a>
                <a className='hvr-icon-spin icon' href="https://www.facebook.com/profile.php?id=100093003297638" target="_blank" rel="noopener noreferrer"><Icon className="hvr-icon" icon="fa6-brands:square-facebook" /></a>

            </section>

            <section className="footer-row footer-redirects">
                <Link className="footer-link" href={'/'}>Home</Link>
                <Link className="footer-link" href={'/about_me'}>Biography</Link>
                <Link className="footer-link" href={'/socials'}>Socials</Link>
                <Link className="footer-link" href={'/services'}>Services</Link>
                <Link className="footer-link" href={'/contact'}>Contact</Link>
                <Link className="footer-link" href={'/resume'}>Download Resume</Link>
                <Link className="footer-link" href={'/portfolio'}>Portfolio</Link>
            </section>
            
            <section className="footer-row">
                <p id="copyright">Copyright © 2023 - 2024. Hammontree Full-Stack Solutions LLC.</p>
            </section>
        </footer>

    )
}