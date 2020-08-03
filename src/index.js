import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';



const errorPageNotFound = () => {
  return (
    <>
    Error 404 - Procure um administrador
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={errorPageNotFound} />
    </Switch>
  </BrowserRouter>,
document.getElementById('root')
);