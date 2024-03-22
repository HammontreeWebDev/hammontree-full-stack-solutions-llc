import React, { useRef, useEffect, useState } from "react";
import { ZoomInRightDiv } from "../utils/Animations";
import { Icon, enableCache } from "@iconify/react";
// allow iconify icons to be stored locally for quicker rendering
enableCache("local");

function CertificateCard(props) {

    const zoomInRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootmargin: "0px",
            threshold: 0.5
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

        if (zoomInRef.current) {
            observer.observe(zoomInRef.current);
        }

        return () => {
            if (zoomInRef.current) {
                observer.unobserve(zoomInRef.current);
            }
        };
    }, []);

    return (
        <div className="custom-figure"
            style={{
                backgroundImage: `url(${props.photo_icon})`
            }}
        >

            <ZoomInRightDiv className={`project-row ${isVisible ? "visible" : ""}`} ref={zoomInRef}>
                <img src={props.src} className="custom-figure-img" alt={props.alt} />
            </ZoomInRightDiv>

            <ZoomInRightDiv className={`project-row content-container ${isVisible ? "visible" : ""}`} ref={zoomInRef}>
                <h1 className="project-title">{props.appTitle}</h1>

                <p> <small className="certificate-disclaimer">Click the badge below to verify the authenticity of this certificate.</small></p>
                <div className="project-icon-container">

                    <a className="project-links verification-badge" href={props.verification} target="_blank" rel="noopener noreferrer">
                        <Icon icon="material-symbols:verified-user-rounded" />
                    </a>

                </div>
            </ZoomInRightDiv>

        </div>
    )
}

export default CertificateCard;