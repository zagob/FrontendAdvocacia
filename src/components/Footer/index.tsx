import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Footer: React.FC = () => {
  return (
    <div>
        <section className="rodape">
          <div className="escritorio">
              <div className="Logo">
                <img src="https://cdn.pixabay.com/photo/2017/09/13/22/47/justice-2747368_960_720.png" alt=""/>
                <h1>Bestana Sociedade de Advogados</h1>
              </div>
            <p>
            O Escritório de Advocacia, 
            está localizado em Igaraçu do Tietê-SP, 
            se notabiliza pela prestação de serviços 
            jurídicos de alta qualidade nas diversas áreas do direito. 
            A meta do escritório é estabelecer e manter um padrão de atendimento 
            eficaz e de resultados.
            </p>
          </div>

          <div>
            <h1>Menu</h1>

            <nav>
              <ul>
                <li><a href=""><Link to="/">Home</Link></a></li>
                <li><a href=""><Link to="/escritorio">O Escritorio</Link></a></li>
                <li><a href=""><Link to="/area-de-atuacao">Área de Atuação</Link></a></li>
                <li><a href=""><Link to="/contato">Contato</Link></a></li>
              </ul>
            </nav>
          </div>

          <div>
            <h1 className="espaco">Links úteis</h1>

            <nav>
              <ul>
                <li><a href="">OAB/SP - Ordem dos Advogados do Brasil</a></li>
                <li><a href="">Google Maps</a></li>
                <li><a href="">JORNAL - FOLHA DE SÃO PAULO</a></li>
              </ul>
            </nav>
          </div>

          <div>
            <h1 className="espaco">Contatos</h1>

            <span>Endereço: </span><br/>
            <span>CEP: </span><br/>
            <span>E-mail: </span><br/><br/><br/>
            <span>Horário de atendimento: </span><br/>
          </div>
        </section>

        <footer>
          <span>© 2020 Advocacia André Pedro Bestana | Todos os direito reservados.</span>
        </footer>
    </div>
  );
}

export default Footer;