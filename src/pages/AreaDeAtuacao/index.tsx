import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Whatsapp from '../../components/Whatsapp';

import './styles.css';

const AreaDeAtuacao: React.FC = () => {
  return (
      <div className="container">
          <Menu />

          <Whatsapp />
          
            <div className="titulo">
                <h1>Área de Atuação</h1>
            </div>

            <div className="conteudo_area">
                <h2>Área de Atuação</h2>
                <p>Somos um escritório com uma ampla possibilidade de atendimentos e, dentre inúmeras outras ações e procedimentos, destacamos algumas abaixo:</p>
            </div>

            <section className="itens">
                <div className="item">
                    <h5>INVENTÁRIO E SUCESSÕES</h5>
                    
                    <section>
                        <li><a href="">Inventario</a></li>
                    </section>
                </div>

                <div className="item">
                    <h5>SEGURO DE VIDA E SEGUROS PESSOAIS</h5>

                    <section>
                        <li><a href="#">Seguro de vida em grupo ou pessoal</a></li>
                        <li><a href="#">Análise de Apólices em geral</a></li>
                        <li><a href="#">Seguro de Empresa</a></li>
                        <li><a href="#">Seguro Bancário</a></li>
                    </section>
                </div>

                <div className="item">
                    <h5>TRABALHISTA</h5>

                    <section>
                        <li><a href="#">Reclamações Trabalhista</a></li>
                        <li><a href="#">Rescisórias</a></li>
                        <li><a href="#">Defesas em geral</a></li>
                        <li><a href="#">Acidente de trabalho</a></li>
                        <li><a href="#">Audiências</a></li>
                        <li><a href="#">Acidente Pessoal</a></li>
                        <li><a href="#">Assédio Moral e Sexual</a></li>
                        <li><a href="#">Dano Moral e Material</a></li>
                        <li><a href="#">Doença Ocupacional</a></li>
                    </section>
                </div>
            </section>

            <section className="itens" style={{ marginBottom: 150 }}>
                <div className="item">
                    <h5>APOSENTADORIA E REVISÕES</h5>
                    
                    <section>
                        <li><a href="">Aposentadoria</a></li>
                        <li><a href="">Revisões e Beneficios</a></li>
                        <li><a href="">Auxilio e Pensões</a></li>
                    </section>
                </div>

                <div className="item">
                    <h5>DIREITO DO CONSUMIDOR</h5>

                    <section>
                        <li><a href="#">Inclusão indevida no SPC/SERASA</a></li>
                        <li><a href="#">Danos materiais e morais</a></li>
                        <li><a href="#">Planos de Saúde</a></li>
                        <li><a href="#">Medicamentos, Próteses, internações psiquiátrica</a></li>
                    </section>
                </div>

                <div className="item">
                    <h5>DIREITO CIVIL</h5>

                    <section>
                        <li><a href="#">Cobranças Judiciais e Extrajudiciais</a></li>
                        <li><a href="#">Contratos em geral</a></li>
                        <li><a href="#">Responsabilidade civil</a></li>
                        <li><a href="#">Consultoria jurídica em Lei Geral de Proteção de Dados</a></li>       
                    </section>
                </div>
            </section>

            <Footer />
      </div>
  );
}

export default AreaDeAtuacao;