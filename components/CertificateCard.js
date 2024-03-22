import React from "react";
import { ZoomInRightDiv } from "../utils/Animations";
import { Icon, enableCache } from "@iconify/react";
// allow iconify icons to be stored locally for quicker rendering
enableCache("local");

function CertificateCard(props) {
    return (
        <ZoomInRightDiv className="custom-figure">
            <div className="project-row">
                <img src={props.src} className="custom-figure-img" alt={props.alt} />
            </div>

            <div className="project-row content-container">
                <h1 className="project-title">{props.appTitle}</h1>

                <p> <small className="certificate-disclaimer">Click the badge below to verify the authenticity of this certificate.</small></p>
                <div className="project-icon-container">

                    <a className="project-links verification-badge" href={props.verification} target="_blank" rel="noopener noreferrer">
                        <Icon icon="material-symbols:verified-user-rounded" />
                    </a>

                </div>
            </div>
        </ZoomInRightDiv>
    )
}

export default CertificateCard;