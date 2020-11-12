import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Whatsapp from '../../components/Whatsapp';

import './styles.css';

const Escritorio: React.FC = () => {
  return (
      <div>
          <Menu />

          <Whatsapp />
            <div className="titulo">
                <h1>O Escritorio</h1>
            </div>

            <main>

                <div className="img">
                    <h1>
                        <img src="https://www.ienoticia.com.br/wp-content/uploads/2017/07/assesoria-imprensa-escritorios-advocacia.png" width="450" alt=""/>
                    </h1>
                    {/* <img src="https://www.ienoticia.com.br/wp-content/uploads/2017/07/assesoria-imprensa-escritorios-advocacia.png" width="60%" style={{ justifyContent: "center" }} alt=""/> */}
                    {/* <img src="https://www.ienoticia.com.br/wp-content/uploads/2017/07/assesoria-imprensa-escritorios-advocacia.png" width="60%" style={{ justifyContent: "center" }} alt=""/> */}
                </div>

                <section className="cor container">
                <h4>Advocacia André Pedro Bestana</h4>
                
                <p>
                O Escritório de Advocacia, está localizado no centro da cidade de Igaraçu do Tietê -SP na Rua Pereira
                de Rezende, 435 - B, se notabiliza pela prestação de serviços jurídicos de alta qualidade 
                nas diversas áreas do direito. A meta do escritório é estabelecer e 
                manter um padrão de atendimento eficaz e de resultados, tendo como
                estratégia tratar cada cliente de forma personalizada, de acordo 
                com sua necessidade e demanda.
                </p>
                <br/>
                <br/>

                <p>
                    Para manter um dinamismo, eficiência e discrição, 
                    trabalhamos de forma a orientar, prevenir e solucionar 
                    questões que impactem ou possam vir a impactar o negócio e 
                    a vida de seus clientes.
                </p>
                <br/><br/>

                <p>
                Com ética, conhecimento, experiência e em sintonia 
                aos aspectos atuais das questões jurídicas, busca 
                atingir as metas de cada cliente com sucesso e satisfação. 
                O escritório conta com infraestrutura moderna, proporcionando 
                aos clientes economia de tempo, agilidade, segurança e atendimento
                diferenciado.
                </p>
                </section>

            </main>

        <div className="conteudo">
            <section className="secao1 cor">
                <h1>Missão</h1>

                <p>
                Atender o cliente em nossas especialidades, 
                com criatividade, excelência, rapidez e eficiência, 
                aprimorando o conhecimento técnico, buscando soluções 
                inovadoras e eficazes.
                </p><br/>
                
                <p>
                Estamos preparados para atender aos processos eletrônicos, 
                hoje havendo maior celeridade processual quanto ao protocolo 
                das ações judiciais, podendo haver acompanhamento "on line" 
                dos processos.
                </p>
                <h1>Atendimento</h1>

                <p style={{ fontWeight: "bold" }}>
                    APOSENTADORIA / REVISÕES DE BENEFÍCIOS PREVIDENCIÁRIOS / AÇÕES TRABALHISTAS / SEGUROS EM GERAL
                </p>

                <p>Oferecemos também Cálculos de Aposentadoria, inclusive projetando os adicionais de Insalubridade e Periculosidade na contagem Especial, Calculo para o Trabalhador Rural e Cálculos Trabalhistas.</p>
                <br/>
                <p>
                    Com novas instalações o escritório ganhou prestigio e credibilidade pelos seus serviços prestados.
                </p>

                <h1>Visão - Consultoria Jurídica</h1>
                <p>
                Prestação de Consultoria Jurídica com excelência, nas mais diversas áreas, primando pela ética profissional e responsabilidade.
                </p>
            </section>
        </div>

            <div className="fotos">
                <h1>Conheça mais nosso escritório</h1>

                <h4>Clique nas imagens abaixos para amplialas</h4>
            </div>
          <Footer />
      </div>
  );
}

export default Escritorio;