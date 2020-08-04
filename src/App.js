import React from 'react';
import Global from './global'
import { Container } from './styles'
import {BrowserRouter} from 'react-router-dom'

import Routes from './routes'

import Painel from './components/painel/index'
import Home from './components/home/index'



function App() {
  return (
    <BrowserRouter>
      <Container>
        <Global />
        <Routes/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
