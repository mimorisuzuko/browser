const React = require('react');
const ReactDOM = require('react-dom');
const {Sample} = require('./components/sample.jsx');
const {Component} = React;

require('./index.scss');

class App extends Component {
	render() {
		return (
			<div>
				<Sample />
			</div>
		);
	}
}

const $main = document.querySelector('main');
ReactDOM.render(<App />, $main);