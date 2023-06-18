import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./FilmesM8.module.css";
const FilmesM8: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.filmesM8}>
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
            <img className={styles.listIcon} alt="" src="/list2.svg" />
            <div className={styles.atendimento}>Atendimento</div>
            <div className={styles.whatsapp}>WhatsApp</div>
            <div className={styles.atendimento1}>Atendimento</div>
            <div className={styles.emLibras}>em Libras</div>
          </div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo4.svg" />
      </div>
      <div className={styles.dearWhitePeopleContainer}>
        <p className={styles.dearWhitePeople}></p>
        <p className={styles.dearWhitePeople}>
          Dear White People é uma série lançada em 2017, na Netflix, que aborda
          de forma corajosa e direta os desafios diários enfrentados por alunos
          negros em uma conceituada universidade norte-americana. Com uma
          narrativa intensa, a série busca tirar todos de suas zonas de
          conforto. Além de estimular a reflexão e o diálogo necessários em
          relação à luta pela igualdade e justiça social na sociedade
          contemporânea, “Cara Gente Branca” convida o espectador a questionar
          as próprias atitudes e privilégios.
        </p>
        <p className={styles.dearWhitePeople}>
          “Toda fotografia poderosa tem uma história igualmente poderosa” Tales
          By Light é uma série australiana lançada em 2015, através de uma
          parceria entre a Canon Austrália e a National Geographic. Com foco em
          capturas de imagens de ângulos jamais vistos, fotógrafos e
          cinegrafistas viajam pelo mundo registrando histórias de povos,
          lugares, paisagens e culturas incríveis. A série o convida a sair da
          sua realidade e conhecer outras.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-22@2x.png" />
      <div className={styles.headerMatria}>
        <b className={styles.duasSriesPara}>
          Duas Séries para assistir nesse inverno.
        </b>
      </div>
      <div className={styles.filmesM8Child} />
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
          <img className={styles.groupChild} alt="" src="/group-62.svg" />
          <div className={styles.acessibilidade}>Acessibilidade</div>
        </div>
        <img
          className={styles.logoIcon1}
          alt=""
          src="/logo3.svg"
          onClick={onLogo1Click}
        />
      </div>
      <i className={styles.publicado21062023}>Publicado: 21-06-2023</i>
      <div className={styles.filmesM8Item} />
      <img className={styles.filmesM8Inner} alt="" src="/polygon-1.svg" />
      <div className={styles.ouvir}>Ouvir</div>
      <div className={styles.tagFilmes}>
        <div className={styles.tagFilmesChild} />
        <div className={styles.audiovisual}>Audiovisual</div>
      </div>
    </div>
  );
};

export default FilmesM8;
