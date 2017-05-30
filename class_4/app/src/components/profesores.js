import React from 'react'

const style2 = {
	background: 'green',
	float: 'left'
}

export default class Profesores extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {

		return (
			
				<div style={style2}>
					El marce y el pela.
				</div>

		)
	}
}