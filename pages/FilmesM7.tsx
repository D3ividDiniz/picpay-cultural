import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./FilmesM7.module.css";
const FilmesM7: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.filmesM7}>
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
        <img className={styles.logoIcon} alt="" src="/logo2.svg" />
      </div>
      <div className={styles.disponvelParaAssistirContainer}>
        <p className={styles.disponvelParaAssistir}>
          Disponível para assistir no Amazon Prime Video, a obra aborda, de
          maneira psicodélica e criativa, o dia a dia de uma família de média
          renda dos EUA que possuem uma pequena lavanderia. Com dificuldades
          financeiras, a protagonista Evelyn Wang e seu marido Waymond Wang,
          estrelados por Michelle Yeoh e Ke Huy Quan, entram em uma jornada
          entre diferentes universos, um mais diferente que o outro, para acabar
          com uma entidade maligna “multi-universal”, e isso quando tentam
          acertas suas dívidas com impostos no banco. Afinal, o que poderia dar
          de errado?
        </p>
        <p className={styles.disponvelParaAssistir}>
          {" "}
          O filme, sendo essa grande viajem, possui cenas de ação incríveis e
          sempre encontra um novo jeito de surpreender seus espectadores, com
          acontecimentos cada vez mais absurdos. Porém, mesmo assim, o roteiro é
          extremamente inteligente e toca em assuntos muito sérios, como
          depressão e ansiedade, de maneira extremamente criativa e leve. Com
          essa recomendação, é impossível não se surpreender e sair reflexivo
          depois de assistir. Fica a sugestão!
        </p>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-23@2x.png" />
      <div className={styles.headerMatria}>
        <b className={styles.tudoEmTodo}>
          “Tudo Em Todo Lugar Ao Mesmo Tempo: uma grande explosão de
          sentimentos”
        </b>
      </div>
      <div className={styles.oTtuloDessa}>
        {" "}
        O título dessa nova recomendação é bem grande, mas Tudo em Todo Lugar Ao
        Mesmo Tempo é, com certeza, um dos melhores filmes internacionais da
        atualidade. Dirigido por Daniel Kwan e Daniel Scheinert, e lançado em 11
        de março de 2022, esse longa ganhou 7 Oscars e mais 158 diferentes
        prêmios, se tornando o longa-metragem mais premiado da história do
        cinema.
      </div>
      <div className={styles.filmesM7Child} />
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
          <img className={styles.groupChild} alt="" src="/group-63.svg" />
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
      <div className={styles.filmesM7Item} />
      <img className={styles.filmesM7Inner} alt="" src="/polygon-1.svg" />
      <div className={styles.ouvir}>Ouvir</div>
      <div className={styles.tagFilmes}>
        <div className={styles.tagFilmesChild} />
        <div className={styles.audiovisual}>Audiovisual</div>
      </div>
    </div>
  );
};

export default FilmesM7;
