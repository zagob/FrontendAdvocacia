import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import './styles.css';

const Menu: React.FC = () => {
  return (
    <div className="menu topnav">
      <div className="logo">
        {/* <img src={Logo} width="60" height="60" alt=""/> */}
        <img src="https://cdn.pixabay.com/photo/2017/09/13/22/47/justice-2747368_960_720.png" width="60" alt=""/>
        <h1>Bestana Sociedade de Advogados</h1>
      </div>

      <nav id="myLinks">
        <ul>
          <li><a><Link to="/">Home</Link></a></li>
          <li><a><Link to="/escritorio">O Escritorio</Link></a></li>
          <li><a><Link to="/area-de-atuacao">Área de atuação</Link></a></li>
          <li><a href="">Consulta</a></li>
          <li><a><Link to="/contato">Contato</Link></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;