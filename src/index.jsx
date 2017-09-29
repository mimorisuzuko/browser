import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.scss';

const $main = document.querySelector('main');
const render = () => {
	const { default: App } = require('./App');

	ReactDOM.render(
		<AppContainer>
			<App />
		</AppContainer>,
		$main
	);
};

render();
if (module.hot) {
	module.hot.accept(render);
}