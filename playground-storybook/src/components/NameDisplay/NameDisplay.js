import React, {useContext} from "react";
import {WonderfullFormContext} from "../WonderfullForm/WonderfullForm.context";

export const NameDisplay = () => {
    const wonderfullFormContext = useContext(WonderfullFormContext);

    return (
        <p>{wonderfullFormContext.name !== '' && `Tu t'appels donc : ${wonderfullFormContext.name}`}</p>
    )
};