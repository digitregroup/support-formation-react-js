import React from 'react';
import {AwesomeButton, BaseAwesomeButton} from "../components/AwesomeButton/AwesomeButton";
import {CounterButton} from "../components/CounterButton/CounterButton";

export default {
  title: 'AwesomeButton',
};

export const ugly = () => <BaseAwesomeButton>Mon label</BaseAwesomeButton>;
export const awesome = () => <AwesomeButton>Mon label</AwesomeButton>;
export const awesomeDarkMode = () => <AwesomeButton dark>Mon label</AwesomeButton>;
export const emoji = () => (
  <AwesomeButton>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </AwesomeButton>
);

export const counterButton = () => <CounterButton />;
