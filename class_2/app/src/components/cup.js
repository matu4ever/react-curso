import React from 'react';
import MagicButton from './magicButton.js';
const style3 = {background:'red'};

export default class Cup extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			status: 'Online'
		};
	}

	changeStatus() {
		if (this.state.status == 'Online') {
			this.setState({
				status: 'Offline'
			});
		}
		else {
			this.setState({
				status: 'Online'
			});
		}
	}

	render(){
		return (
			<figure style={style3}>
				<img width="65px" src="" alt={this.props.image} />
				<figcaption>Status: {this.state.status}</figcaption>
				<MagicButton action={this.changeStatus.bind(this)} />
			</figure>
		);
	}

}