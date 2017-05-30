import React from 'react'
import Home from './home'

const style2 = {
	background: 'green',
	float: 'left'
}

export default class Index extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {

		return (
			
				<div style={style2}>
					<Home/>
					{this.props.children}
				</div>

		)
	}
}