import React from 'react';
import {Link} from 'react-router-dom';

const style2 = {
	background: 'green',
	float: 'left'
}

export default class Cursos extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {

		return (
			
				<div style={style2}>
					<h1> CURSOS </h1>
					<Link to={'/cursos/android'} > Lagdroid </Link>
					<Link to={'/cursos/react'} > React </Link>
					<Link to={'/cursos/java'} > Java </Link>
					{this.props.children}
				</div>

		)
	}
}