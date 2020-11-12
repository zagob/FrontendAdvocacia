import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Escritorio from './pages/Escritorio';
import AreaDeAtuacao from './pages/AreaDeAtuacao';
import Contato from './pages/Contato';

const src: React.FC = () => {
  return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/escritorio" component={Escritorio} />
        <Route path="/area-de-atuacao" component={AreaDeAtuacao} />
        <Route path="/contato" component={Contato} />
      </BrowserRouter>
  );
}

export default src;