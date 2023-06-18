import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./FilmesM1.module.css";
const FilmesM1: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAudiovisualTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.filmesM1}>
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
            <img className={styles.listIcon} alt="" src="/list3.svg" />
            <div className={styles.atendimento}>Atendimento</div>
            <div className={styles.whatsapp}>WhatsApp</div>
            <div className={styles.atendimento1}>Atendimento</div>
            <div className={styles.emLibras}>em Libras</div>
          </div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo11.svg" />
      </div>
      <div className={styles.comAltaPresenaContainer}>
        <p className={styles.comAltaPresena}>
          Com alta presença do Deep State, ou seja, com vizinhanças altamente
          controladas por facções criminosas, a vida dos moradores é
          constantemente desafiada por confrontos armados, alta violência e a
          corrupção política e policial, o filme adapta a história real de
          maneira magnífica. Com atuações que viraram ícones no cinema
          internacional, como a de Leandro Firmino como Zé Pequeno e a de
          Alexandre Rodrigues como Buscapé, todos os momentos são de tirar o
          fôlego.
        </p>
        <p className={styles.comAltaPresena}>
          {" "}
          Além de todas as discussões sociais que Cidade de Deus aborda sobre
          durante o longa, até mesmo aspectos externos do filme marcam a cultura
          e a sociedade brasileira até hoje. Um exemplo disso é sua produção e a
          escolha do elenco: a equipe de produtores e diretores escolheu fazer
          um processo seletivo com mais de 300 candidatos não atores,
          principalmente pela falta de atores negros na indústria. Nesse
          processo, um curso de atuação foi ministrado para os participantes e
          aqueles que tiveram as melhores performances entraram para a equipe do
          filme.
        </p>
        <p className={styles.comAltaPresena}>
          {" "}
          Em suma, Cidade de Deus é um dos maiores clássicos do cinema nacional,
          sendo reconhecido mundialmente. Mesmo 21 anos após seu lançamento, a
          obra continua relevante para nossa cultura, influenciando diversas
          novas produções. O filme pode ser assistido via Netflix e na
          Paramount+. Fica aí a sugestão!
        </p>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-28@2x.png" />
      <div className={styles.headerMatria}>
        <b className={styles.cidadeDeDeus}>
          “Cidade de Deus: 21 anos do clássico do cinema e ainda é relevante”
        </b>
      </div>
      <div className={styles.cidadeDeDeus1}>
        {" "}
        Cidade de Deus, dirigido por Fernando Meirelles e Kátia Lund, e lançado
        em 30 de agosto 2002, é um dos clássicos do cinema brasileiro. O
        longa-metragem é uma adaptação do livro de mesmo nome escrito por Paulo
        Lins em 1997, tendo como principal tema o complicado dia a dia das
        pessoas que moram no Rio de Janeiro.
      </div>
      <div className={styles.filmesM1Child} />
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
          <img className={styles.groupChild} alt="" src="/group-69.svg" />
          <div className={styles.acessibilidade}>Acessibilidade</div>
        </div>
        <img
          className={styles.logoIcon1}
          alt=""
          src="/logo12.svg"
          onClick={onLogo1Click}
        />
      </div>
      <i className={styles.publicado21062023}>Publicado: 21-06-2023</i>
      <div className={styles.filmesM1Item} />
      <img className={styles.filmesM1Inner} alt="" src="/polygon-1.svg" />
      <div className={styles.ouvir}>Ouvir</div>
      <div className={styles.tagFilmes}>
        <div className={styles.tagFilmesChild} data-scroll-to="rectangle" />
        <div className={styles.audiovisual} onClick={onAudiovisualTextClick}>
          Audiovisual
        </div>
      </div>
    </div>
  );
};

export default FilmesM1;
