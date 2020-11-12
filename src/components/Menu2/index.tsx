import React from 'react';

import './styles.css';

const Menu2: React.FC = () => {
  return (
      <>
        <div className="menu2">
            <div className="logo2">
                <h1>Logo</h1>
            </div>

            <div className="navbar2">
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">O Escritorio</a></li>
                        <li><a href="">Área de Atuação</a></li>
                        <li><a href="">Consulta</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
      </>
  );
}

export default Menu2;