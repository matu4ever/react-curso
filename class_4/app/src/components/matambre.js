import React from 'react'

const style4 = {
	background: 'red',
	float: 'left'
}

export default class Matambre extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {

		return (
			
				<div style={style4}>
					Esto es el matambre. Se renderiza en el /
				</div>

		)
	}
}