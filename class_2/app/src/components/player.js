import React from 'react';
import Cup from './cup.js';
const style2 = {background:'green'};

export default class Player extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<li style={style2}>
				<Cup image={this.props.cup} />
				<div>
					<h4> Nombre: {this.props.name} </h4>
					<p> Puntos: {this.props.points}</p>
				</div>
				<hr/>
			</li>
		);
	}

}