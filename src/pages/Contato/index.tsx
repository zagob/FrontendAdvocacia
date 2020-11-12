import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Whatsapp from '../../components/Whatsapp';

import './styles.css';

const Contato: React.FC = () => {
  return(
      <div>
          <Menu />

          <Whatsapp />
            <div className="titulo">
                <h1>Contato</h1>
            </div>

            <section className="contato">
              <div className="form">
                <h1>OLÁ, EM QUE POSSO AJUDAR?</h1>
                <p>Deixe uma mensagem, preencha todos os campos corretamente para atendermos suas dúvidas.</p>
                
                <form action="">
                  <input type="text" placeholder="Digite seu Nome Completo" />
                  <input type="text" placeholder="Endereço de E-mail" />
                  <input type="text" placeholder="Telefone fixo ou Celular..." />
                  <input type="text" placeholder="Assunto do Contato" />
                  <textarea name="" id="" placeholder="Envie uma mensagem" />

                  <button>Enviar Mensagem</button>
                </form>
              </div>

              <div className="info">
                <h4>Informações de contato</h4>

                <h5>Advocacia André Pedro Bestana</h5>

                <p>Av. Pedro Ometto, 2242 - Barra Bonita - SP
                  Telefone:(14) 3641-8452</p>

                <p>E-mail: </p>
              </div>
            </section>

          <Footer />
      </div>
  );
}

export default Contato;