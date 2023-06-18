import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Acessibilidade from "../components/Acessibilidade";
import PortalPopup from "../components/PortalPopup";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const HomeDesktopCadastrado: NextPage = () => {
  const [isAcessibilidadeOpen, setAcessibilidadeOpen] = useState(false);
  const [isAcessibilidade1Open, setAcessibilidade1Open] = useState(false);
  const router = useRouter();

  const onLinkContainer1Click = useCallback(() => {
    router.push("/MusicaM9");
  }, [router]);

  const onLinkContainer2Click = useCallback(() => {
    router.push("/FilmesM8");
  }, [router]);

  const onAbrirMatriaText2Click = useCallback(() => {
    router.push("/FilmesM7");
  }, [router]);

  const onLinkContainer4Click = useCallback(() => {
    router.push("/MusicaM6");
  }, [router]);

  const onAbrirMatriaText5Click = useCallback(() => {
    router.push("/LiteraturaM3");
  }, [router]);

  const onLinkContainer7Click = useCallback(() => {
    router.push("/LiteraturaM3");
  }, [router]);

  const onLinkContainer8Click = useCallback(() => {
    router.push("/LiteraturaM3");
  }, [router]);

  const onAbrirMatriaText9Click = useCallback(() => {
    router.push("/LiteraturaM4");
  }, [router]);

  const onLinkContainer9Click = useCallback(() => {
    router.push("/LiteraturaM4");
  }, [router]);

  const onAbrirMatriaText11Click = useCallback(() => {
    router.push("/LiteraturaM4");
  }, [router]);

  const onLinkContainer10Click = useCallback(() => {
    router.push("/LiteraturaM4");
  }, [router]);

  const onLinkContainer11Click = useCallback(() => {
    router.push("/RestaurantesM2");
  }, [router]);

  const onLinkContainer12Click = useCallback(() => {
    router.push("/FilmesM1");
  }, [router]);

  const openAcessibilidade = useCallback(() => {
    setAcessibilidadeOpen(true);
  }, []);

  const closeAcessibilidade = useCallback(() => {
    setAcessibilidadeOpen(false);
  }, []);

  const openAcessibilidade1 = useCallback(() => {
    setAcessibilidade1Open(true);
  }, []);

  const closeAcessibilidade1 = useCallback(() => {
    setAcessibilidade1Open(false);
  }, []);

  return (
    <>
      <div className={styles.homeDesktopCadastrado}>
        <div className={styles.museus}>
          <div className={styles.mainPortinari}>
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <div className={styles.museuDaImigraoDoEstadoDParent}>
              <b className={styles.museuDaImigraoContainer}>
                <span>Museu da Imigração</span>
                <span className={styles.doEstadoDe}>
                  {" "}
                  do Estado de São Paulo
                </span>
              </b>
              <div className={styles.localruaViscondeDeContainer}>
                <b>Local:</b>
                <span className={styles.ruaViscondeDe}>
                  Rua Visconde de Parnaíba, 1.316 - São Paulo, SP
                </span>
              </div>
              <div className={styles.valorR10Container}>
                <b>{`Valor: `}</b>
                <span className={styles.ruaViscondeDe}>{`R$ 10 `}</span>
              </div>
              <div className={styles.groupChild} />
              <img className={styles.groupItem} alt="" src="/polygon-1.svg" />
              <div className={styles.ouvir}>Ouvir</div>
              <i className={styles.publicado15022023}>Publicado: 15-02-2023</i>
              <div className={styles.venhaConferirAsContainer}>
                <p className={styles.venhaConferirAs}>
                  Venha conferir as obras do célebre artista brasileiro Candido
                  Portinari nessa exposição, que ocorre de 14/06 até 07/08 no
                  CCBB de Belo Horizonte!
                </p>
                <p
                  className={styles.oEventoDemonstra}
                >{`O evento demonstra o Portinario ousado e oculto, explorador de diversas manifestações artísticas que foram pouco divulgadas ao público. Presencie a exibição de trabalhos e obras originais no formato físico e digital, com algumas delas pouquíssimo conhecidas. A exposição retrata aspectos raros nas produções de Portinari, como sua afeição por elementos naturais, memórias de sua infância e abstrações. `}</p>
              </div>
            </div>
          </div>
          <div className={styles.mainDialog}>
            <b className={styles.pinacotecaDoEstadoContainer}>
              <span>Pinacoteca</span>
              <span className={styles.doEstadoDe}> do Estado de São Paulo</span>
            </b>
            <div className={styles.localPraaDaContainer}>
              <b>{`Local: `}</b>
              <span
                className={styles.ruaViscondeDe}
              >{`Praça da Luz, 2 - São Paulo, SP `}</span>
            </div>
            <div className={styles.valorR24Container}>
              <b>{`Valor: `}</b>
              <span className={styles.ruaViscondeDe}>{`R$22 `}</span>
            </div>
            <img className={styles.image7Icon1} alt="" src="/image-71@2x.png" />
            <div className={styles.mainDialogChild} />
            <img
              className={styles.mainDialogItem}
              alt=""
              src="/polygon-1.svg"
            />
            <div className={styles.ouvir1}>Ouvir</div>
            <i className={styles.publicado10012023}>Publicado: 10-01-2023</i>
            <div className={styles.aPinacotecaDoContainer}>
              <p className={styles.venhaConferirAs}>
                A Pinacoteca do Estado de São Paulo é um dos museus de arte mais
                importantes do Brasil. Fundado em 1905, obriga um acervo com
                cerca de 5000 obras, predominantemente de artistas brasileiros,
                com ênfase nas produções do século XIX. A coleção inclui
                pinturas, esculturas, fotografias, gravuras e desenhos de
                artistas renomados, como Almeida Júnior, Victor Meirelles, Anita
                Malfatti, Tarsila do Amaral, Candido Portinari, Di Cavalcanti e
                muitos outros. Além das exposições permanentes, a Pinacoteca
                também tem uma programação cultural diversificada, incluindo
                palestras, workshops, cursos e atividades educativas para o
                público de todas as idades.
              </p>
            </div>
          </div>
          <div className={styles.head}>
            <b className={styles.literatura}>Museus</b>
            <div className={styles.headChild} />
          </div>
          <div className={styles.link}>
            <div className={styles.verMaisParent}>
              <div className={styles.verMais}>Ver Mais</div>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
          <div className={styles.rodape}>
            <div className={styles.section}>
              <div className={styles.divfooterCopyright}>
                <div className={styles.divcopyright01}>
                  <div className={styles.link1} />
                  <div className={styles.picpaySaCnpj}>
                    © 2022 PicPay S.A. CNPJ © 2022 PicPay S.A.22.896.431/0001-10
                  </div>
                </div>
                <div className={styles.p}>
                  <div className={styles.avManuelBandeira}>
                    Av. Manuel Bandeira, 291 - Bloco A - Vila Leopoldina, São
                    Paulo - SP, 05317-020
                  </div>
                </div>
              </div>
              <div className={styles.divfooterAtend}>
                <img className={styles.listIcon} alt="" src="/list.svg" />
                <div className={styles.atendimento}>Atendimento</div>
                <div className={styles.whatsapp}>WhatsApp</div>
                <div className={styles.atendimento1}>Atendimento</div>
                <div className={styles.emLibras}>em Libras</div>
              </div>
            </div>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
          </div>
        </div>
        <div className={styles.m9}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.leftHallParent}>
              <div className={styles.leftHall}>
                <b className={styles.comoSurgiuAContainer}>
                  <p className={styles.oEventoDemonstra}>
                    Como surgiu a música?
                  </p>
                </b>
                <div className={styles.desdeOsTempos}>
                  Desde os tempos mais remotos da humanidade, a música tem sido
                  uma forma de expressão cultural, permeada por uma rica
                  diversidade de estilos, compositores e influências. Assim, até
                  mesmo nas antigas civilizações, a música era amplamente
                  utilizada em celebrações religiosas e rituais sociais.
                  Enquanto na Grécia estava estreitamente ligada à poesia e ao
                  teatro, a música romana era usada em cerimônias religiosas e
                  festivais. 
                </div>
              </div>
              <div className={styles.tagFilmes}>
                <div className={styles.tagFilmes1}>
                  <div className={styles.tagFilmesChild} />
                  <div className={styles.audiovisual}>Audiovisual</div>
                </div>
              </div>
            </div>
            <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          </div>
          <div className={styles.link2} onClick={onLinkContainer1Click}>
            <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
          </div>
        </div>
        <div className={styles.m8}>
          <div className={styles.m1}>
            <div className={styles.hallContainer}>
              <div className={styles.leftHall1}>
                <b className={styles.duasSriesPara}>
                  Duas Séries para assistir nesse inverno.
                </b>
                <div
                  className={styles.dearWhitePeople}
                >{`Dear White People é uma série lançada em 2017, na Netflix, que aborda de forma corajosa e direta os desafios diários enfrentados por alunos negros em uma conceituada universidade norte-americana. `}</div>
              </div>
              <div className={styles.tagFilmes2}>
                <div className={styles.tagFilmes1}>
                  <div className={styles.tagFilmes1}>
                    <div className={styles.tagFilmesChild} />
                    <div className={styles.audiovisual}>Audiovisual</div>
                  </div>
                </div>
              </div>
              <div className={styles.link3} onClick={onLinkContainer2Click}>
                <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
              </div>
            </div>
            <img className={styles.image8Icon1} alt="" src="/image-81@2x.png" />
          </div>
        </div>
        <div className={styles.m7}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.leftHallGroup}>
              <div className={styles.leftHall2}>
                <b className={styles.comoSurgiuAContainer}>
                  “Tudo Em Todo Lugar Ao Mesmo Tempo: uma grande explosão de
                  sentimentos”
                </b>
                <div className={styles.oTtuloDessaContainer}>
                  <p className={styles.oEventoDemonstra}>
                    O título dessa nova recomendação é bem grande, mas Tudo em
                    Todo Lugar Ao Mesmo Tempo é, com certeza, um dos melhores
                    filmes internacionais da atualidade. Dirigido por Daniel
                    Kwan e Daniel Scheinert, e lançado em 11 de março de 2022,
                    esse longa ganhou 7 Oscars e mais 158 diferentes prêmios, se
                    tornando o longa-metragem mais premiado da história do
                    cinema.
                  </p>
                </div>
              </div>
              <div className={styles.tagFilmes5}>
                <div className={styles.tagFilmes1}>
                  <div className={styles.tagFilmesChild} />
                  <div className={styles.audiovisual}>Audiovisual</div>
                </div>
              </div>
              <div className={styles.link4}>
                <div
                  className={styles.abrirMatria2}
                  onClick={onAbrirMatriaText2Click}
                >{`Abrir Matéria `}</div>
              </div>
            </div>
            <img className={styles.image8Icon} alt="" src="/image-82@2x.png" />
          </div>
        </div>
        <div className={styles.m6}>
          <div className={styles.m1}>
            <div className={styles.hallContainer}>
              <div className={styles.leftHall3}>
                <b className={styles.duasSriesPara}>
                  Como a música clássica está presente na cultura pop.
                </b>
                <div className={styles.quandoPensamosEm}>
                  Quando pensamos em música clássica, imaginamos teatros
                  repletos de pessoas da elite financeira apreciando concertos e
                  óperas. Porém, esses pensamentos são estereotipados e o gênero
                  musical é mais comum do que parece, estando presente em
                  diversos conteúdos que consumimos diariamente. Vamos descobrir
                  então como os clássicos agregam em diversos símbolos da
                  cultura pop.
                </div>
              </div>
              <div className={styles.tagFilmes7}>
                <div className={styles.tagFilmesChild1} />
                <div className={styles.msica}>Música</div>
              </div>
              <div className={styles.link3} onClick={onLinkContainer4Click}>
                <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
              </div>
            </div>
            <img className={styles.image8Icon1} alt="" src="/image-83@2x.png" />
          </div>
        </div>
        <div className={styles.cinemas}>
          <div className={styles.mainPortinari1}>
            <img className={styles.image7Icon} alt="" src="/image-72@2x.png" />
            <div className={styles.museuDaImigraoDoEstadoDParent}>
              <b className={styles.cinemaCinpolis}>
                Cinema - Cinépolis Shopping Iguatemi
              </b>
              <div className={styles.localruaViscondeDeContainer}>
                <b>Local:</b>
                <span className={styles.ruaViscondeDe}>
                  {" "}
                  Av. Presidente Juscelino Kubitschek, 2.041
                </span>
              </div>
              <div className={styles.valorR10Container}>
                <b>{`Valor: `}</b>
                <span className={styles.ruaViscondeDe}>R$ 59 a R$ 68</span>
              </div>
              <div className={styles.groupChild} />
              <img className={styles.polygonIcon} alt="" src="/polygon-1.svg" />
              <div className={styles.ouvir}>Ouvir</div>
              <i className={styles.publicado15022023}>Publicado: 21-06-2023</i>
              <div className={styles.venhaConferirAsContainer}>
                <p
                  className={styles.venhaConferirAs}
                >{`Abrindo nossa lista temos o Cinema 4D do shopping JK Iguatemi, ele foi o primeiro cinema a trazer a experiencia imersiva 4D na américa latina. Esse cinema é tão bom no que se propõe a fazer que para deixar a sensação de estar no filme ainda mais real, além das cadeiras que acompanham o movimento dos personagens, ele também conta com máquinas de fumaça, borrifadores de água e máquinas de vento. `}</p>
                <p className={styles.oEventoDemonstra}>
                  Esse certamente é o melhor cinema para você que está buscando
                  uma experiência inesquecível de realmente se sentir dentro do
                  filme enquanto o assiste.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mainPortinari2}>
            <img className={styles.image7Icon} alt="" src="/image-73@2x.png" />
            <div className={styles.museuDaImigraoDoEstadoDParent}>
              <b className={styles.cinemaReserva}>Cinema - Reserva Cultural</b>
              <div className={styles.localAvenidaPaulistaContainer}>
                <b>Local:</b>
                <span className={styles.ruaViscondeDe}>
                  {" "}
                  Avenida Paulista, 900 - São Paulo, SP
                </span>
              </div>
              <div className={styles.valorR10Container}>
                <b>{`Valor: `}</b>
                <span className={styles.ruaViscondeDe}> R$ 17 a R$ 24</span>
              </div>
              <div className={styles.groupChild} />
              <img className={styles.polygonIcon} alt="" src="/polygon-1.svg" />
              <div className={styles.ouvir}>Ouvir</div>
              <i className={styles.publicado15022023}>Publicado: 21-06-2023</i>
              <div className={styles.seVocEstContainer}>
                <p
                  className={styles.venhaConferirAs}
                >{`Se você está buscando por uma experiência mais tranquila, cultural, que caiba no bolço e gosta de ver filmes que fujam um pouco das super produções de Hollywood, nos indicamos a Reserva Cultural. `}</p>
                <p className={styles.oEventoDemonstra}>
                  O cinema da avenida paulista, conta com um restaurante, um
                  café e uma livraria, para você poder aproveitar outras coisas
                  além do filme, sem contar que ele é um dos únicos cinemas da
                  capital que exibem essas produções independentes.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mainDialog1}>
            <b
              className={styles.cinemaUci}
            >{`Cinema - UCI Cinemas Shopping Jardim Sul  `}</b>
            <div className={styles.localPraaDaContainer}>
              <b>{`Local: `}</b>
              <span className={styles.ruaViscondeDe}>
                Av. Giovanni Gronchi, 5819
              </span>
            </div>
            <div className={styles.valorR24Container}>
              <p className={styles.valorR24AR27}>
                <b className={styles.valor}>{`Valor: `}</b>
                <span className={styles.ruaViscondeDe}>R$ 24 a R$ 27</span>
              </p>
            </div>
            <img className={styles.image7Icon1} alt="" src="/image-74@2x.png" />
            <div className={styles.mainDialogChild} />
            <img
              className={styles.mainDialogItem}
              alt=""
              src="/polygon-1.svg"
            />
            <div className={styles.ouvir1}>Ouvir</div>
            <i className={styles.publicado10012023}>Publicado: 21-06-2023</i>
            <div className={styles.aPinacotecaDoContainer}>
              Outra opção para aqueles que buscam a melhor qualidade na hora de
              ver um filme nos cinemas, nos indicamos o UCI Jardim Sul. Esse
              cinema localizado no Shopping Jardim Sul possui a sala 3D Digital
              4K, com melhor definição em imagem digital, cores e contraste,
              dentre todos os outros.
            </div>
          </div>
          <div className={styles.head}>
            <b className={styles.literatura}>Cinemas</b>
            <div className={styles.headChild} />
          </div>
          <div className={styles.link6}>
            <div className={styles.verMaisParent}>
              <div className={styles.verMais}>Ver Mais</div>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
        </div>
        <div className={styles.m5}>
          <div className={styles.m1}>
            <div className={styles.hallContainer}>
              <div className={styles.leftHall4}>
                <b className={styles.duasSriesPara}>
                  Os jogos mais influentes de todos os tempos.
                </b>
                <div className={styles.atualmenteOsJogos}>
                  Atualmente, os jogos eletrônicos estão muito presentes na vida
                  das pessoas. Já se pode afirmar que fazem parte da cultura
                  popular: enquanto muitos constroem seu futuro nesse mundo,
                  outros os utilizam como uma forma de fugir da realidade e
                  lidar com seus problemas.  
                </div>
              </div>
              <div className={styles.tagFilmes8}>
                <div className={styles.tagFilmesChild2} />
                <div className={styles.msica}>Jogos</div>
              </div>
              <div className={styles.link7}>
                <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
              </div>
            </div>
            <img className={styles.image8Icon1} alt="" src="/image-84@2x.png" />
          </div>
        </div>
        <div className={styles.m34}>
          <div className={styles.m34Child} />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.m34Item} />
          <div className={styles.leftHall5}>
            <b className={styles.senhorDosAnis}>
              Senhor dos Anéis: o clássico que moldou 5 gerações.
            </b>
            <div
              className={styles.muitoPopularPor}
            >{`Muito popular por suas adaptações de Hollywood, é inegável que o (grande) romance Senhor dos Anéis tenha influenciado a culta internacional drasticamente desde seu lançamento, em 1954. `}</div>
          </div>
          <div
            className={styles.abrirMatria5}
            onClick={onAbrirMatriaText5Click}
          >{`Abrir Matéria `}</div>
          <div className={styles.head2}>
            <b className={styles.literatura}>Literatura</b>
            <div className={styles.headChild} />
          </div>
          <div className={styles.link8} onClick={onLinkContainer7Click}>
            <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
          </div>
          <div className={styles.abrirMatria7}>{`Abrir Matéria `}</div>
          <div className={styles.link8} onClick={onLinkContainer8Click}>
            <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
          </div>
          <div className={styles.m34Inner} />
          <div className={styles.leftHall6}>
            <b
              className={styles.senhorDosAnis}
            >{`O Poder da escrita de Clarice Lispector. `}</b>
            <div className={styles.muitoPopularPor}>
              {" "}
              Narrando uma trágica história, Clarice Lispector marcou a
              literatura brasileira com A Hora da Estrela, além de outras obras
              primas publicadas pela autora. Lançado em 1977, é recordado até
              hoje como um clássico nacional e já foi traduzido para outras
              línguas, adequando-o para venda internacional.
            </div>
          </div>
          <div
            className={styles.abrirMatria9}
            onClick={onAbrirMatriaText9Click}
          >{`Abrir Matéria `}</div>
          <div className={styles.link10} onClick={onLinkContainer9Click}>
            <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
          </div>
          <div
            className={styles.abrirMatria9}
            onClick={onAbrirMatriaText11Click}
          >{`Abrir Matéria `}</div>
          <div className={styles.link10} onClick={onLinkContainer10Click}>
            <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
          </div>
        </div>
        <div className={styles.m2}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.leftHallContainer}>
              <div className={styles.leftHall7}>
                <b className={styles.comoSurgiuAContainer}>
                  As profundezas da gastronomia Paulistana.
                </b>
                <div className={styles.oBrasilPossuiContainer}>
                  <p className={styles.oEventoDemonstra}>
                    O Brasil possui uma gastronomia muito vasta e aclamada por
                    todo o mundo. Os restaurantes, que são os responsáveis por
                    perpetuar essa fama, estão presentes em todas as regiões do
                    país, no entanto, tanto por ser um grande destino turístico
                    quanto por possuir uma grande variedade de opções, São Paulo
                    é considerado a capital gastronômica do Brasil.
                  </p>
                  <p className={styles.oEventoDemonstra}></p>
                </div>
              </div>
              <div className={styles.tagFilmes9}>
                <div className={styles.tagFilmesChild3} />
                <div className={styles.restaurantes}>Restaurantes</div>
              </div>
              <div className={styles.link12} onClick={onLinkContainer11Click}>
                <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
              </div>
            </div>
            <img className={styles.image8Icon} alt="" src="/image-85@2x.png" />
          </div>
        </div>
        <div className={styles.m13}>
          <div className={styles.m1}>
            <div className={styles.hallContainer}>
              <div className={styles.leftHall4}>
                <b className={styles.duasSriesPara}>
                  “Cidade de Deus: 21 anos do clássico do cinema e ainda é
                  relevante”
                </b>
                <div className={styles.cidadeDeDeus1}>
                  Cidade de Deus, dirigido por Fernando Meirelles e Kátia Lund,
                  e lançado em 30 de agosto 2002, é um dos clássicos do cinema
                  brasileiro.
                </div>
              </div>
              <div className={styles.tagFilmes2}>
                <div className={styles.tagFilmesChild} />
                <div className={styles.audiovisual3}>Audiovisual</div>
              </div>
              <div className={styles.link3} onClick={onLinkContainer12Click}>
                <div className={styles.abrirMatria}>{`Abrir Matéria `}</div>
              </div>
            </div>
            <img className={styles.image8Icon6} alt="" src="/image-86@2x.png" />
          </div>
        </div>
        <div className={styles.eventos}>
          <div className={styles.mainPortinari}>
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <div className={styles.museuDaImigraoDoEstadoDParent}>
              <b className={styles.exposioPortinariRarosContainer}>
                <span>{`Exposição `}</span>
                <span
                  className={styles.portinariRaros}
                >{`Portinari Raros `}</span>
              </b>
              <div className={styles.localruaViscondeDeContainer}>
                <b>Local:</b>
                <span
                  className={styles.ruaViscondeDe}
                >{` Praça da Liberdade, 450 - Belo Horizonte, MG `}</span>
              </div>
              <div className={styles.valorR10Container}>
                <b>{`Valor: `}</b>
                <span className={styles.ruaViscondeDe}>gratuito</span>
              </div>
              <div className={styles.groupChild} />
              <img className={styles.polygonIcon} alt="" src="/polygon-1.svg" />
              <div className={styles.ouvir}>Ouvir</div>
              <i className={styles.publicado15022023}>Publicado: 21-06-2023</i>
              <div className={styles.venhaConferirAsContainer}>
                <p className={styles.venhaConferirAs}>
                  Venha conferir as obras do célebre artista brasileiro Candido
                  Portinari nessa exposição, que ocorre de 14/06 até 07/08 no
                  CCBB de Belo Horizonte!
                </p>
                <p
                  className={styles.oEventoDemonstra}
                >{`O evento demonstra o Portinario ousado e oculto, explorador de diversas manifestações artísticas que foram pouco divulgadas ao público. Presencie a exibição de trabalhos e obras originais no formato físico e digital, com algumas delas pouquíssimo conhecidas. A exposição retrata aspectos raros nas produções de Portinari, como sua afeição por elementos naturais, memórias de sua infância e abstrações. `}</p>
              </div>
            </div>
          </div>
          <div className={styles.mainDialog}>
            <b className={styles.exposioDilogoNoContainer}>
              <span>{`Exposição `}</span>
              <span className={styles.portinariRaros}>Diálogo No escuro</span>
              <span> Unibes Cultural</span>
            </b>
            <div className={styles.localPraaDaContainer}>
              <b>{`Local: `}</b>
              <span className={styles.ruaViscondeDe}>
                Rua Oscar Freire, 2500 - São Paulo, SP
              </span>
            </div>
            <div className={styles.valorR24Container}>
              <b>{`Valor: `}</b>
              <span className={styles.ruaViscondeDe}>gratuito</span>
            </div>
            <img className={styles.image7Icon1} alt="" src="/image-71@2x.png" />
            <div className={styles.mainDialogChild} />
            <img
              className={styles.mainDialogItem}
              alt=""
              src="/polygon-1.svg"
            />
            <div className={styles.ouvir1}>Ouvir</div>
            <i className={styles.publicado10012023}>Publicado: 21-06-2023</i>
            <div className={styles.aPinacotecaDoContainer}>
              <p className={styles.venhaConferirAs}>
                {" "}
                Viva uma experiência de diversidade, inclusão e empatia que
                impactará sua vida d e forma surpreendente, que ocorre de 17/06
                a 22/07. O passeio dura pouco mais de uma hora, mas os efeitos
                podem durar uma vida!
              </p>
              <p className={styles.oEventoDemonstra}>
                {" "}
                O projeto consiste numa trajetória guiada por deficientes
                visuais, em grupos, por salas totalmente escuras em que apenas o
                cheiro, o som, o vento, a temperatura e a textura são
                suficientes para interagir e interpretar com o meio ambiente,
                apresentando à sociedade um ambiente cotidiano dessas pessoas. A
                causa gera um forte impacto social e emocional para quem visita
                essa exposição.
              </p>
            </div>
          </div>
          <div className={styles.head}>
            <b className={styles.literatura}>Eventos em destaque</b>
            <div className={styles.headChild} />
          </div>
          <div className={styles.link}>
            <div className={styles.verMaisParent}>
              <div className={styles.verMais}>Ver Mais</div>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <div className={styles.text}>
            <div className={styles.oSeuGuiaContainer}>
              <span>{`O seu guia de eventos culturais feito pelo `}</span>
              <b>PicPay</b>
              <span>.</span>
            </div>
          </div>
          <b className={styles.bemVindoAoPiqueculturalContainer}>
            <p className={styles.venhaConferirAs}>&nbsp;</p>
            <p
              className={styles.oEventoDemonstra}
            >{`Bem-Vindo ao PiqueCultural `}</p>
          </b>
          <div className={styles.piqueculturalParent}>
            <b className={styles.piquecultural}>{`PiqueCultural `}</b>
            <b className={styles.piquecultural1}>{`PiqueCultural `}</b>
            <b className={styles.piquecultural2}>{`PiqueCultural `}</b>
            <b className={styles.piquecultural3}>{`PiqueCultural `}</b>
            <b className={styles.piquecultural4}>{`PiqueCultural `}</b>
          </div>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        </div>
        <div className={styles.header}>
          <div className={styles.headerChild} onClick={openAcessibilidade} />
          <div className={styles.groupParent}>
            <div className={styles.agendaParent}>
              <div className={styles.agenda}>{`Agenda `}</div>
              <img className={styles.arrowIcon3} alt="" src="/arrow1.svg" />
            </div>
            <div className={styles.locaisParent}>
              <div className={styles.agenda}>Locais</div>
              <img className={styles.arrowIcon4} alt="" src="/arrow1.svg" />
            </div>
          </div>
          <div className={styles.acessibilidade} onClick={openAcessibilidade1}>
            <img
              className={styles.acessibilidadeChild}
              alt=""
              src="/group-6.svg"
            />
            <div className={styles.acessibilidade1}>Acessibilidade</div>
          </div>
          <img className={styles.logoIcon1} alt="" src="/logo1.svg" />
        </div>
      </div>
      {isAcessibilidadeOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAcessibilidade}
        >
          <Acessibilidade onClose={closeAcessibilidade} />
        </PortalPopup>
      )}
      {isAcessibilidade1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAcessibilidade1}
        >
          <Acessibilidade onClose={closeAcessibilidade1} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomeDesktopCadastrado;
