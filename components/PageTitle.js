import React from "react";
import { BounceInDownH1 } from "../utils/Animations";
import { Icon, enableCache } from "@iconify/react";

enableCache("local");

export function PageTitle(props) {

    return(
        <div className="page-title">
                <BounceInDownH1>
                    {props.content} <Icon icon={props.icon} />
                </BounceInDownH1>
            </div>
    )
}

