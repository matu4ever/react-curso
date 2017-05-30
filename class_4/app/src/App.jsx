import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, hasHistory, Switch }  from 'react-router-dom';

import Index from './components/index'
//import Home from './components/home'
import Acerca from './components/acerca'
import Cursos from './components/cursos'
import Android from './components/cursos/android'
import ReactJS from './components/cursos/react'
import Java from './components/cursos/java'
import Profesores from './components/profesores'
import Matambre from './components/matambre'

const style1 = {
	background: 'yellow',
	float: 'left'
}

ReactDOM.render(<Router history={hasHistory} >
		<Index>
			<Switch>
      			<Route exact path="/" component={Matambre} />
      			<Route path="/acerca" component={Acerca} />
      			<Route path="/profesores" component={Profesores} />
      			<Cursos>
      				<Route path="/cursos/android" component={Android} />
      				<Route path="/cursos/react" component={ReactJS} />
      				<Route path="/cursos/java" component={Java} />
      			</Cursos>
      		</Switch>
      	</Index>
    </Router>, document.getElementById('root'))