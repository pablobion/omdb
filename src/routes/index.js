import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from '../components/home'
import Painel from '../components/painel'



function index(props) {
     return (
     <Switch>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/movie/:name' exact  component={Painel} ></Route>
     </Switch>
     )
}



export default index

