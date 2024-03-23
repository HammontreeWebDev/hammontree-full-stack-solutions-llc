import React, { useRef, useEffect, useState } from "react";
import { FadeInDiv } from "../utils/Animations";
import { Icon, enableCache } from "@iconify/react";
// allow iconify icons to be stored locally for quicker rendering
enableCache("local");

function Project(props) {

    const fadeInRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [highResLoaded, setHighResLoaded] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootmargin: "Opx",
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        }, options);

        if (fadeInRef.current) {
            observer.observe(fadeInRef.current);
        }

        return () => {
            if (fadeInRef.current) {
                observer.unobserve(fadeInRef.current);
            }
        };

    }, []);

    useEffect(() => {
        const highResImage = new Image();
        highResImage.src = props.photo_icon;
        highResImage.onload = () => {
            setHighResLoaded(true);
        };
    }, [props.photo_icon]);

    const backgroundStyle = highResLoaded ? {backgroundImage: `url(${props.photo_icon})`} : {backgroundImage: `url(${props.lowResPhoto})`}

    return (
        <div className="custom-figure" style={backgroundStyle}>
                    <FadeInDiv className={`project-row ${isVisible ? "visible" : ""}`} ref={fadeInRef}>
                        <img src={props.src} className="custom-figure-img" alt={props.alt} />
                    </FadeInDiv>

                    <FadeInDiv className={`project-row content-container ${isVisible ? "visible" : ""}`} ref={fadeInRef}>
                        <h1 className="project-title">{props.appTitle}</h1>
                        <p className="project-content"> <strong>Built With: </strong><span className="alt-color">{props.content}</span></p>
                        <div className="project-icon-container">
                            <a className="project-links" href={props.repository} target="_blank" rel="noopener noreferrer" onClick={props.click}><Icon icon="uim:github-alt" /></a>
                            <a className="project-links" href={props.deployment} target="_blank" rel="noopener noreferrer"><Icon icon="eos-icons:application-instance" /></a>
                        </div>
                    </FadeInDiv>
             

        </div>
    )
}

export default Project;