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

							props.key = player.id;
							props.name = player.name;
							props.points = player.points;
							props.cup = player.cup;
							return <Player {...props} />;
						})
					}
				</ul>
			</div>
		);
	}

}