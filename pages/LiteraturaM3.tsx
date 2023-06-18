import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./LiteraturaM3.module.css";
const LiteraturaM3: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.literaturaM3}>
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
      <div className={styles.oLivroDeContainer}>
        <p className={styles.oLivroDe}>
          O livro de fantasia medieval narra, de maneira muito detalhada e
          inteligente, a jornada de Frodo e seu grupo de aventureiros pela Terra
          Média, os quais buscam a destruição de um poderoso anel mágico e
          maligno, para que não caia nas mãos do grande vilão Sauron.
        </p>
        <p className={styles.oLivroDe}>
          {" "}
          Originalmente publicado em um único volume, a obra foi escrita por J.
          R. R. Tolkien, escritor de nacionalidade britânica, nascido na atual
          África do Sul no período que ainda era uma colônia (por isso a
          nacionalidade). Seu estilo de escrita, muito único pela forma a qual
          descrevia lugares e objetos, rende descrições detalhadas e faz com que
          seus leitores acreditem que fazem parte da obra e estão tendo as
          aventuras junto com os protagonistas. Além disso, é impressionante o
          nível de detalhe e comprometimento que o autor colocou em seu livro,
          chegando até a criar línguas para as diferentes raças fantasiosas,
          como o idioma dos Elfos e dos Orcs.
        </p>
        <p
          className={styles.oLivroDe}
        >{`Sendo muito elogiado até os dias atuais, o romance ganhou o Prêmio Prometheus e o International Fantasy Award, além de influenciar incontáveis outras histórias durante as últimas 6 décadas e meia:  jogo de tabuleiro Dungeons & Dragons, a famosa música The Battle of Evermore da banda Led Zeppelin e a saga Game of Thrones são grandes exemplos de como os textos de Tolkien moldaram a cultura mundial. Atualmente, o livro está disponível tanto em volume único quanto separado em uma trilogia: “A Sociedade do Anel”, “Duas Torres” e “O Retorno do Rei”. Independente de como experenciar a leitura, fica aí a sugestão!
`}</p>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-26@2x.png" />
      <div className={styles.headerMatria}>
        <b
          className={styles.senhorDosAnis}
        >{`Senhor dos Anéis: o clássico que moldou 5 gerações. `}</b>
      </div>
      <div className={styles.muitoPopularPorContainer}>
        <p className={styles.muitoPopularPor}>
          Muito popular por suas adaptações de Hollywood, é inegável que o
          (grande) romance Senhor dos Anéis tenha influenciado a culta
          internacional drasticamente desde seu lançamento, em 1954.
        </p>
      </div>
      <div className={styles.literaturaM3Child} />
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
          <img className={styles.groupChild} alt="" src="/group-67.svg" />
          <div className={styles.acessibilidade}>Acessibilidade</div>
        </div>
        <img
          className={styles.logoIcon1}
          alt=""
          src="/logo7.svg"
          onClick={onLogo1Click}
        />
      </div>
      <i className={styles.publicado20062023}>Publicado: 20-06-2023</i>
      <div className={styles.literaturaM3Item} />
      <img className={styles.literaturaM3Inner} alt="" src="/polygon-1.svg" />
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

export default LiteraturaM3;
