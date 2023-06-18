import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./MusicaM6.module.css";
const MusicaM6: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.musicaM6}>
      <div className={styles.rodape}>
        <div className={styles.section}>
          <div className={styles.divfooterCopyright}>
            <div className={styles.divcopyright01}>
              <div className={styles.link} />
              <div className={styles.picpaySaCnpj}>
                © 2022 PicPay S.A. CNPJ © 2022 PicPay S.A.22.896.431/0001-10
              </div>
            </div>
            <div className={styles.p}>
              <div className={styles.avManuelBandeira}>
                Av. Manuel Bandeira, 291 - Bloco A - Vila Leopoldina, São Paulo
                - SP, 05317-020
              </div>
            </div>
          </div>
          <div className={styles.divfooterAtend}>
            <img className={styles.listIcon} alt="" src="/list1.svg" />
            <div className={styles.atendimento}>Atendimento</div>
            <div className={styles.whatsapp}>WhatsApp</div>
            <div className={styles.atendimento1}>Atendimento</div>
            <div className={styles.emLibras}>em Libras</div>
          </div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo5.svg" />
      </div>
      <div className={styles.headerMatria}>
        <b className={styles.comoAMsicaContainer}>
          <p className={styles.comoAMsica}>
            Como a música clássica está presente na cultura pop
          </p>
        </b>
      </div>
      <div className={styles.quandoPensamosEm}>
        Quando pensamos em música clássica, imaginamos teatros repletos de
        pessoas da elite financeira apreciando concertos e óperas. Porém, esses
        pensamentos são estereotipados e o gênero musical é mais comum do que
        parece, estando presente em diversos conteúdos que consumimos
        diariamente. Vamos descobrir então como os clássicos agregam em diversos
        símbolos da cultura pop.
      </div>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.groupParent}>
          <div className={styles.agendaParent}>
            <div className={styles.agenda}>{`Agenda `}</div>
            <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
          </div>
          <div className={styles.locaisParent}>
            <div className={styles.agenda}>Locais</div>
            <img className={styles.arrowIcon1} alt="" src="/arrow1.svg" />
          </div>
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.groupChild} alt="" src="/group-64.svg" />
          <div className={styles.acessibilidade}>Acessibilidade</div>
        </div>
        <img
          className={styles.logoIcon1}
          alt=""
          src="/logo3.svg"
          onClick={onLogo1Click}
        />
      </div>
      <i className={styles.publicado18062023}>Publicado: 18-06-2023</i>
      <div className={styles.musicaM6Child} />
      <img className={styles.musicaM6Item} alt="" src="/polygon-1.svg" />
      <div className={styles.ouvir}>Ouvir</div>
      <div className={styles.tagFilmes}>
        <div className={styles.tagFilmes1}>
          <div className={styles.tagFilmesChild} />
          <div className={styles.msica}>Música</div>
        </div>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-24@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.noMundoDoContainer}>
        <p className={styles.noMundoDo}>
          No mundo do games, a música clássica é fundamental para imergir os
          jogadores numa experiência única. As notas suaves de um violino ou os
          acordes poderosos de um piano evocam uma gama de emoções,
          intensificando momentos de suspense, tristeza ou alegria. Na série
          “The Legend of Zelda”, por exemplo, a peça “Sinfonia do Herói”, de
          Beethoven, é adaptada para a trilha sonora do jogo, adicionando
          grandiosidade às cenas de batalha e descobertas. Outro exemplo icônico
          é a trilha de Tetris, composição adaptada do clássico russo
          "Korobeiniki", peça mundialmente conhecida que se tornou um símbolo
          dos jogos.
        </p>
        <p className={styles.noMundoDo}>
          Já no cinema, os clássicos têm o papel essencial de propiciar emoção
          às cenas. Se reassistíssemos obras marcantes sem a trilha sonora, elas
          não causariam tanto impacto. Em "2001: Uma Odisseia no Espaço", por
          exemplo, o filme se apropria de "Assim Falou Zaratustra", de Richard
          Strauss, para dar vida à natureza enigmática e épica de uma aventura
          no espaço, tornando o clássico um sinônimo de exploração sideral que
          todos já ouviram. Ainda, em “Laranja Mecânica”, a “Nona Sinfonia”, de
          Beethoven, é utilizada de forma estratégica nos momentos de maior
          intensidade, trazendo um desconforto reflexivo ao espectador, visto
          que a melodia alegre contrasta com as cenas apresentadas.
        </p>
      </div>
      <div className={styles.porFimNoContainer}>
        <p
          className={styles.noMundoDo}
        >{`Por fim, não poderíamos finalizar essa lista sem citar sobre a música. Em diversos gêneros musicais, os clássicos são a base para a construção de novas melodias e estilos. No rock, por exemplo, grandes nomes como “Pink Floyd” têm referências clássicas, como Bach e Mozart, que influenciaram na criação de suas composições. `}</p>
        <p className={styles.noMundoDo}>
          No oriente, por outro lado, bandas de pop coreano (kpop), como Red
          Velvet, se apropriam das obras de Gershwin para usar como sample para
          suas músicas, criando uma interação divertida entre o passado e a
          contemporaneidade. Assim, torna-se admirável como a música transcende
          as barreiras do tempo e do gênero, continuando a evoluir e se
          reinventar.
        </p>
      </div>
    </div>
  );
};

export default MusicaM6;
