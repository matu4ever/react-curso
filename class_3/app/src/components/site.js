import React from 'react';
const style1 = {background:'blue'};

export default class Site extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			site: {},
			siteId: props.siteId,
		}
	}
	componentDidMount() {
		fetch(`https://api.mercadolibre.com/sites/${this.props.siteId}`)
		.then(res => res.json())
		.then(site => this.setState({
			site
		}));
	}

	render(){
		const { site } = this.state;
		return (
			<h1>{this.props.siteId} - {site.name}</h1>
		);
	}

}