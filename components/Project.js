import React from "react";
import { ZoomInRightDiv } from "../utils/Animations";
import { Icon, enableCache } from "@iconify/react";
// allow iconify icons to be stored locally for quicker rendering
enableCache("local");

function Project(props) {
    return (
        <div className="custom-figure"

            style={{
                backgroundImage: `url(${props.photo_icon})`
            }}

        >
            <ZoomInRightDiv className="project-row">
                <img src={props.src} className="custom-figure-img" alt={props.alt} />
            </ZoomInRightDiv>

            <ZoomInRightDiv className="project-row content-container">
                <h1 className="project-title">{props.appTitle}</h1>
                <p className="project-content"> <strong>Built With: </strong><span className="alt-color">{props.content}</span></p>
                <div className="project-icon-container">
                    <a className="project-links" href={props.repository} target="_blank" rel="noopener noreferrer" onClick={props.click}><Icon icon="uim:github-alt" /></a>
                    <a className="project-links" href={props.deployment} target="_blank" rel="noopener noreferrer"><Icon icon="eos-icons:application-instance" /></a>
                </div>
            </ZoomInRightDiv>
        </div>
    )
}

export default Project;