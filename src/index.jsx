const React = require('react');
const ReactDOM = require('react-dom');
const { Component } = React;

require('./index.scss');

class App extends Component {
	render() {
		return (
			<div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('main'));