import React, {useState} from 'react'
import {AwesomeButton} from "../AwesomeButton/AwesomeButton";

export const CounterButton = (props) => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);

        if (typeof props.onClick === 'function') {
            return props.onClick();
        }
    };

    return (
        <AwesomeButton onClick={increment}>
            Nombre de click: <span style={{fontWeight: 'bold'}}>{counter}</span>
        </AwesomeButton>
    );
};
