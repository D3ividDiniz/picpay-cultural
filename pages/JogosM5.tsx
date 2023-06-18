import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./JogosM5.module.css";
const JogosM5: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.jogosM5}>
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
        <img className={styles.logoIcon} alt="" src="/logo6.svg" />
      </div>
      <div className={styles.oJogoTennisContainer}>
        <p className={styles.pongPodeAtTerAcostumadoA}>
          <span className={styles.oJogo}>O jogo</span>
          <b className={styles.oJogo}> “Tennis for Two de 1958”</b>
          <span>
            , desenvolvido por William Higinbotham, foi um ponto muito
            importante na história dos jogos. Foi por meio dele que diversas
            empresas e programadores criaram suas próprias versões e as
            comercializaram. Assim, surgiram os jogos Pong que dizem que foi tão
            aclamado pelo público, que a máquina quebrou repentinamente devido a
            quantidade excessiva de fichas. 
          </span>
        </p>
        <p className={styles.pongPodeAtTerAcostumadoA}>
          <b className={styles.oJogo}>Pong</b>
          <span>
            {" "}
            pode até ter acostumado as pessoas a jogarem em público, mas Space
            Invaders e Asteroids levaram o vício das pessoas a outro patamar.
            Esses dois jogos foram considerados os primeiros realmente
            essenciais nos consoles domésticos, além de fundarem termos como Hig
            score e outras usadas até hoje em games. 
          </span>
        </p>
        <p className={styles.pongPodeAtTerAcostumadoA}>
          <span>
            {" "}
            Em 1985 a Nintendo lançou o que hoje é considerado seu maior
            fenômeno, o jogo
          </span>
          <b className={styles.oJogo}> “Super Mério Bros”</b>
          <span>{`. Graças a Shigeru Miyamoto o público pode ver pela primeira vez um jogo com uma variedade muito grade de cenários, trilhas sonoras bem definidas e uma história e objetivos que entretiam o jogador. Mário Bros foi um fenômeno tão grande que aqueceu novamente o mercado dos jogos e permitiu a ascensão da empresa que conhecemos hoje como Nintendo. `}</span>
        </p>
        <p className={styles.pongPodeAtTerAcostumadoA}>
          <span>
            No ano de 1984 tivemos outro lançamento decisivo na história dos
            jogos, o tão conhecido e aclamado “
          </span>
          <b className={styles.oJogo}>Tetris”</b>
          <span>
            . Ele ficou tão famoso que quando a Nintendo resolveu lançar seu
            primeiro console portátil, o gameboy, mais de 35 milhões de
            cartuchos do jogo foram vendidos. A simplicidade de sua mecânica,
            combinada com sua jogabilidade viciante, conquistava não só os
            jovens, como também pessoas de todas as idades. Assim Tetris
            estabeleceu um novo padrão para os jogos de quebra-cabeça, que é
            seguido até os dias de hoje.
          </span>
        </p>
        <p className={styles.desenvolvidoPelaId}>
          Desenvolvido pela id Software, "Doom" é amplamente considerado o
          pioneiro dos jogos de tiro em primeira pessoa. Com sua atmosfera
          sombria, gráficos 3D revolucionários e jogabilidade acelerada, o jogo
          cativou os jogadores e popularizou o gênero. "Doom" estabeleceu os
          fundamentos dos shooters modernos e demonstrou o potencial dos jogos
          como uma experiência imersiva. Podemos dizer que foi aqui que todos os
          jogos de tiro modernos como Fortnite, FreeFire, PUBG, dentre outros,
          se originaram.
        </p>
      </div>
      <div className={styles.foiNoAnoContainer}>
        <p className={styles.pongPodeAtTerAcostumadoA}>
          Foi no ano de 2011 que Markus Persson, mais conhecido como Notch,
          juntamente com a Mojang Studios, lançaram um dos, se não o jogo mais
          revolucionário já criado. Minecraft não quebrava as barreiras da
          criatividade, ele as destruía por completo, com seu mundo aberto
          infinito e possibilidades quase ilimitadas, os jogadores puderam
          experenciar o jogo da maneira com que bem desejassem, sem limites e
          sem restrições.
        </p>
        <p className={styles.pongPodeAtTerAcostumadoA}>
          Graças a isso o jogo se tornou um fenômeno global, com pessoas ao
          redor do mundo inteiro não só jogando, mas também criando suas
          próprias versões e incrementos para o jogo, os famosos Mods. Minecraft
          ficou tão conhecido, que passou a ser usado em escolas para ensinar as
          crianças de maneira mais divertida e imersiva. Não é para menos que
          hoje, Minecraft é simplesmente o jogo mais vendido da história,
          alcançando mais de incríveis 238 milhões de cópias vendidas.
        </p>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-25@2x.png" />
      <div className={styles.headerMatria}>
        <b className={styles.osJogosMais}>
          Os jogos mais influentes de todos os tempos
        </b>
      </div>
      <div className={styles.atualmenteOsJogosContainer}>
        <p className={styles.desenvolvidoPelaId}>
          Atualmente, os jogos eletrônicos estão muito presentes na vida das
          pessoas. Já se pode afirmar que fazem parte da cultura popular:
          enquanto muitos constroem seu futuro nesse mundo, outros os utilizam
          como uma forma de fugir da realidade e lidar com seus problemas. 
        </p>
        <p className={styles.desenvolvidoPelaId}>&nbsp;</p>
        <p className={styles.desenvolvidoPelaId}>
          Com o tempo, essa indústria evoluiu muito além do que se esperava,
          pois temos jogos com gráficos que chegam a ser surreais e desafiam a
          compreensão da realidade. Aqui, eu irei lhes apresentar toda essa
          trajetória, mostrando jogos que não só marcaram a história como foram
          pontos-chaves na evolução dos games e os fizeram ser o que
          conhecemos. 
        </p>
      </div>
      <div className={styles.jogosM5Child} />
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
          <img className={styles.groupChild} alt="" src="/group-65.svg" />
          <div className={styles.acessibilidade}>Acessibilidade</div>
        </div>
        <img
          className={styles.logoIcon1}
          alt=""
          src="/logo7.svg"
          onClick={onLogo1Click}
        />
      </div>
      <i className={styles.publicado19062023}>Publicado: 19-06-2023</i>
      <div className={styles.jogosM5Item} />
      <img className={styles.jogosM5Inner} alt="" src="/polygon-1.svg" />
      <div className={styles.ouvir}>Ouvir</div>
      <div className={styles.tagFilmes}>
        <div className={styles.tagFilmes1}>
          <div className={styles.tagFilmesChild} />
          <div className={styles.jogos}>Jogos</div>
        </div>
      </div>
      <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
    </div>
  );
};

export default JogosM5;
