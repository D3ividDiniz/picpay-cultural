import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./MusicaM9.module.css";
const MusicaM9: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.musicaM9}>
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
      <div className={styles.headerMatria}>
        <b className={styles.comoSurgiuA}>Como surgiu a Música?</b>
      </div>
      <div className={styles.desdeOsTemposContainer}>
        <p className={styles.desdeOsTempos}>
          Desde os tempos mais remotos da humanidade, a música tem sido uma
          forma de expressão cultural, permeada por uma rica diversidade de
          estilos, compositores e influências. Assim, até mesmo nas antigas
          civilizações, a música era amplamente utilizada em celebrações
          religiosas e rituais sociais. Enquanto na Grécia estava estreitamente
          ligada à poesia e ao teatro, a música romana era usada em cerimônias
          religiosas e festivais. 
        </p>
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
          <img className={styles.groupChild} alt="" src="/group-61.svg" />
          <div className={styles.acessibilidade}>Acessibilidade</div>
        </div>
        <img
          className={styles.logoIcon1}
          alt=""
          src="/logo3.svg"
          onClick={onLogo1Click}
        />
      </div>
      <i className={styles.publicado03032023}>Publicado: 03-03 -2023</i>
      <div className={styles.musicaM9Child} />
      <img className={styles.musicaM9Item} alt="" src="/polygon-1.svg" />
      <div className={styles.ouvir}>Ouvir</div>
      <div className={styles.tagFilmes}>
        <div className={styles.tagFilmes1}>
          <div className={styles.tagFilmesChild} />
          <div className={styles.msica}>Música</div>
        </div>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-21@2x.png" />
      <div className={styles.noPerodoBarrocoContainer}>
        <p className={styles.noPerodoBarroco}>
          No período barroco, tivemos compositores notáveis, como Johann
          Sebastian Bach e Antonio Vivaldi, que trouxeram inovações técnicas,
          como a utilização de contraponto, ornamentação e o concerto grosso. Já
          o período clássico, marcado por compositores como Mozart e Beethoven,
          popularizou a forma sonata, a sinfonia e o quarteto de cordas. Foi
          nesse momento que a música deixou de ser exclusivamente para a
          aristocracia e passou a ser conhecida pela população geral. 
        </p>
        <p className={styles.noPerodoBarroco}>
          Outro período importante para a história musical foi o romantismo,
          destacado pela emoção e individualidade dos compositores, como
          Frédéric Chopin e Franz Schubert. A música romântica expressava
          paixões, sentimentos subjetivos e uma conexão profunda com a natureza
          e a espiritualidade. No século XX, a música passou por uma revolução
          criativa que desafiou as convenções tradicionais. Artistas como Claude
          Debussy, Igor Stravinsky e John Cage expandiram os horizontes, criando
          sonoridades e estruturas. 
        </p>
        <p className={styles.noPerodoBarroco}>
          Além disso, a música popular ganhou destaque, com o surgimento de
          gêneros como jazz, rock, hip-hop e música eletrônica. Portanto,
          vivemos atualmente em uma era de diversidade musical sem precedentes,
          impulsionada pela tecnologia e pela globalização. Podemos apreciar
          tanto as sinfonias de Beethoven quanto as batidas pulsantes do
          hip-hop. Assim, a música continua a nos inspirar e conectar,
          lembrando-nos do poder da expressão artística e melódica. 
        </p>
      </div>
    </div>
  );
};

export default MusicaM9;
