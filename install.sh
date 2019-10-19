#!/usr/bin/env bash

#### Install procedure from ZERO

# Install a base React APP and a storybook playground
npx create-react-app playground-storybook

# Go to the playground
cd playground-storybook || exit

# Init storybook inside the react app
npx storybook init

# Add Styled Components
yarn add styled-components
# npm i --save styled-components

# Add Reactstrap
yarn add bootstrap reactstrap react react-dom
# npm i --save bootstrap reactstrap react react-dom
## in story file --> import 'bootstrap/dist/css/bootstrap.min.css';

# Start the story book
yarn storybook
# npm run storybook