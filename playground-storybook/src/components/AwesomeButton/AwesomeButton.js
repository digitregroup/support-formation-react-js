import React from 'react'
import styled, { css } from 'styled-components'

export const BaseAwesomeButton = (props) => {
    return (
        <button {...props}>{props.children}</button>
    );
};

export const AwesomeButton = styled(BaseAwesomeButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  
  ${props =>
    props.dark &&
    css`
      background: #262a2e;
      color: white;
    `};
`;
