import React from 'react';
import Footer from '../../components/Footer';

import Wpp from '../../assets/whatsapp.svg';
import './styles.css';
import Whatsapp from '../../components/Whatsapp';
import Menu2 from '../../components/Menu2';
import Menu from '../../components/Menu';

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
          {/* <Menu2 /> */}
          <Menu />

          <Whatsapp />

        <main className="main">
          <h1>Frase</h1>
        </main>

        <section className="contato">
          <h2>Olá, como posso ajudar</h2>
          <p>Clique no icone abaixo e contate-nós pelo whatsapp.</p>
          <div>
            <a href="https://api.whatsapp.com/send?phone=5514997130042&text=Olá" target="_blank">
              <img src={Wpp} width="45" alt="Whatsapp"/>
            </a>
          </div>
        </section>

                <div className="frase">
                  <p>O funcionamento apropriado dos links é de 
                    inteira responsabilidade dos órgãos e instituições a 
                    que eles pertencem.
                  </p>
                </div>
        <section className="atividades">

            <div className="img">
              <img src="https://blog.tripletech.com.br/wp-content/uploads/2018/10/escritorio-advocacia-problemas-de-ti-1280x640.jpg" width="600" alt=""/>
            </div>

            <div className="container">
              <div className="consulta">
                <h4>Consulte aqui seu processo</h4>
                <h5>Previdência Social - INSS</h5>
                <a href="">Consulta de situação de beneficio</a>
                <a href="">e-Recurso e Beneficio</a>
                <a href="">Situação do Beneficio em Revisão</a>

                <h5>Processos Trabalhista - TRT 15ª</h5>
                <a href="">Consulta Pública de Processo</a>

                <h5>Processos na justiça Comum - TJSP</h5>
                <a href="">Consulta de processo na 1° Instância</a>

                <h5>Justiça Federal - TRF3°</h5>
                <a href="">Clique aqui</a>
              </div>

              <div className="Links">
                <h1>Links uteis</h1>

                <a href="">OAB/SP - Ordem dos Advogados do Brasil</a>
                <a href="">Google Mapas</a>
                <a href="">JORNAL - FOLHA DE SÃO PAULO</a>
                <a href="">Correios</a>
                <a href="">Telefônica - Lista Telefônica do Brasil</a>
                <a href="">Receita Federal - Consulte a situação cadastral do CNPJ - Pessoa Jurídica</a>
                <a href="">Receita Federal do Brasil - Consulte a situação do seu CPF - Pessoa Física</a>
              </div>
            </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;