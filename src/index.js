// Set up your application entry point here...
/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Swapi from './components/SwapiPage';
require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
  <AppContainer>
    <Swapi />
  </AppContainer>,
  document.getElementById('app')
);
