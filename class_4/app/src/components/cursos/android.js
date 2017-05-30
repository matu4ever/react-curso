import React from 'react'

const style3 = {
	background: 'orange',
	float: 'left'
}

export default class Android extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {

		return (
			
				<div style={style3}>
					Lagdroid se enseña acá
				</div>

		)
	}
}