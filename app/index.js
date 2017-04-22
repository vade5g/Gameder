require('react-hot-loader/patch');
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';
import { AppContainer } from 'react-hot-loader';

console.log(document);
const app = document.createElement('div');
document.body.appendChild(app);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    app
  );
};

render(Component);

if (module.hot) {
  module.hot.accept('./component', () => render(Component));
}