import React from "react";
import { ZoomInRightDiv } from "../utils/Animations";
import { Icon, enableCache } from "@iconify/react";
// allow iconify icons to be stored locally for quicker rendering
enableCache("local");

function CertificateCard(props) {
    return (
        <ZoomInRightDiv className="custom-figure">
            <img src={props.src} className="custom-figure-img" alt={props.alt} />
            <div className="custom-figure-content">
                <h1 className="project-title">{props.appTitle}</h1>
                <p className="project-content"> <strong>Description: </strong><span className="alt-color">{props.content}</span></p>

                <p> <small className="certificate-disclaimer">Click the badge below to verify the authenticity of this certificate.</small></p>
                <div className="project-icon-container">

                    <a className="project-links" href={props.verification} target="_blank" rel="noopener noreferrer">
                        <Icon icon="material-symbols:verified-user-rounded" />
                    </a>

                </div>
            </div>
        </ZoomInRightDiv>
    )
}

export default CertificateCard;