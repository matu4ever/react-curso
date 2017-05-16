import React from 'react';
import Player from './player.js';
const style1 = {background:'blue'};

export default class Players extends React.Component {
	
	constructor() {
		super();
	}

	render(){
		let props = {};
		return (
			<div style={style1}>
				<ul>
					{
						this.props.list.map( (player) => {

							return <Player {...player} />;
						})
					}
				</ul>
			</div>
		);
	}

}