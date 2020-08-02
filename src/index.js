import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';



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
      <Route component={errorPageNotFound} />
    </Switch>
  </BrowserRouter>,
document.getElementById('root')
);