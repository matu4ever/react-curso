import React from 'react'

const style3 = {
	background: 'orange',
	float: 'left'
}

export default class ReactJS extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {

		return (
			
				<div style={style3}>
					React se enseña acá
				</div>

		)
	}
}