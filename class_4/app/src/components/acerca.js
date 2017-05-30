import React from 'react'

const style2 = {
	background: 'green',
	float: 'left'
}

export default class Acerca extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {

		return (
			
				<div style={style2}>
					Esta mecha se da en la ULP
				</div>

		)
	}
}