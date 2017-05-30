import React from 'react';
import {Link} from 'react-router-dom';

const style2 = {
	background: 'green',
	float: 'left'
}

export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {

		return (
			
				<div style={style2}>
					<h1> HOME SWEET HOME </h1>
					<Link to={'/acerca'} > Acerca de </Link>
					<Link to={'/cursos'} > Cursos </Link>
					<Link to={'/profesores'} > Profesores </Link>
				</div>

		)
	}
}