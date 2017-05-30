import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, browserHistory, Switch }  from 'react-router-dom';
import Mecha from './components/mecha'
import Site from './components/site'

ReactDOM.render(<Router history={browserHistory} >
		<div>
      		<Route path="/g/:siteId" component={Site} />
      		<Route exact path="/" component={Mecha} />
      	</div>
    </Router>, document.getElementById('root'))