import React from "react";
import { FadeInH1 } from "../utils/Animations";
import { Icon, enableCache } from "@iconify/react";

enableCache("local");

function PageTitle(props) {

    return(
        <div className="page-title">
                <FadeInH1 className="page-title-text">
                    {props.content} <Icon icon={props.icon} />
                </FadeInH1>
            </div>
    )
}

export default PageTitle;