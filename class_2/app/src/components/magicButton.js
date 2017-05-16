import React from 'react';

export default class MagicButton extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<button onClick={this.props.action} > On/Off </button>
			</div>
		);
	}

}