import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch }  from 'react-router-dom';
import Site from './site'

export default class Mecha extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sites: null
		}
	}
	componentDidMount() {
		fetch('https://api.mercadolibre.com/sites')
		.then(res => res.json())
		.then(sites => this.setState({
			sites
		}));
	}
	render () {
		const styleSidebar = {
			width: '300px',
			backgroundColor: '#ccc',
			float: 'left'
		}
		const styleContent = {
			width: '500px',
			float: 'left'
		}
		const { sites } = this.state;
		return (
			<Router>
				<div>
					<div style={styleSidebar}> 
						<h1> Lista de Gits </h1>
						<ul>
							{ sites ? sites.map((x ,i) => (
								<li key={i}> 
									<Link to={`/g/${x.id}`}>
										{x.id || '[ no hay description]'} 
									</Link>
								</li>) 
							) : (<p> loading ... </p>)
							}
						</ul>
					</div>
					<div style={styleContent}>
						<h1> Detalle </h1>
						<Route path="/g/:siteId" render={({match}) => {
							return <Site key={match.params.siteId} siteId={match.params.siteId}/>
						}} />
					</div>
				</div>
			</Router>
		)
	}
}