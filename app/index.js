require('react-hot-loader/patch');
import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './MainView';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const app = document.createElement('div');
document.body.appendChild(app);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <MainView />
    </AppContainer>,
    app
  );
};

render(MainView);

if (module.hot) {
  module.hot.accept('./MainView', () => render(MainView));
}
