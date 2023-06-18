import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./LiteraturaM4.module.css";
const LiteraturaM4: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.literaturaM4}>
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
        <img className={styles.logoIcon} alt="" src="/logo8.svg" />
      </div>
      <div className={styles.emSeuEnredoContainer}>
        <p className={styles.emSeuEnredo}>
          Em seu enredo, o fictício escritor Rodrigo S. M. conta a vida de
          Macabéa, uma mulher Nordestina que se muda para o Rio de Janeiro em
          busca de oportunidades. Tendo uma infância e adolescência complicadas,
          a personagem tem dificuldade em se adaptar à vida na cidade grande,
          enfrentando problemas na sua vida profissional e em seus
          relacionamentos interpessoais. Seus únicos consolos são os poucos
          momentos de compaixão de suas amigas e nos momentos que escutava a
          Rádio Relógio, algo que, eventualmente, se tornou um pequeno “vício”
          de Macabéa.
        </p>
        <p className={styles.clariceComSua}>
          Clarice, com sua escrita inteligente, constrói situações que prendem
          os leitores e quebram suas expectativas de formas totalmente
          inesperadas. Com esse estilo, a autora já recebeu mais de 4 prêmios
          literários, entre eles o Prêmio Jabuti, um dos mais tradicionais do
          Brasil, concedido pela Câmara Brasileira do Livro. Com certeza, uma
          obra prima da literatura nacional e que deve ser apreciado. Fica aí a
          sugestão!
        </p>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-25@2x.png" />
      <div className={styles.headerMatria}>
        <b className={styles.oPoderDa}>
          O Poder da escrita de Clarice Lispector.
        </b>
      </div>
      <div className={styles.narrandoUmaTrgicaContainer}>
        <p className={styles.clariceComSua}>
          Narrando uma trágica história, Clarice Lispector marcou a literatura
          brasileira com A Hora da Estrela, além de outras obras primas
          publicadas pela autora. Lançado em 1977, é recordado até hoje como um
          clássico nacional e já foi traduzido para outras línguas, adequando-o
          para venda internacional.
        </p>
      </div>
      <div className={styles.literaturaM4Child} />
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
          <img className={styles.groupChild} alt="" src="/group-66.svg" />
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
      <div className={styles.literaturaM4Item} />
      <img className={styles.literaturaM4Inner} alt="" src="/polygon-1.svg" />
      <div className={styles.ouvir}>Ouvir</div>
      <div className={styles.tagFilmes}>
        <div className={styles.tagFilmes1}>
          <div className={styles.tagFilmesChild} />
          <div className={styles.literatura}>Literatura</div>
        </div>
      </div>
    </div>
  );
};

export default LiteraturaM4;
