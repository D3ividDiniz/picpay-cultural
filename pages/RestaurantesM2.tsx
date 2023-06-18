import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./RestaurantesM2.module.css";
const RestaurantesM2: NextPage = () => {
  const router = useRouter();

  const onLogo1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.restaurantesM2}>
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
        <img className={styles.logoIcon} alt="" src="/logo9.svg" />
      </div>
      <div className={styles.restauranteDomAContainer}>
        <p className={styles.restauranteDomAGastronom}>
          <b className={styles.restauranteDom}>Restaurante D.O.M:</b>
          <span>
            {" "}
            A gastronomia brasileira é um sonho viável.", uma frase do Chef Alex
            Atala que resume a trajetória do restaurante. Criado em 1999 com
            objetivo de propor uma nova experiência gastronômica difundindo
            ingredientes como açaí, jambu e tucupi, o estabelecimento já conta
            com duas estrelas Michelin e mais de 20 anos de história. O lugar é
            ideal para quem busca conforto e exclusividade. Caso queira
            conhecer, o local pode ser encontrado na rua Barão de Capanema, 549
            - Jardins, São Paulo.
          </span>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.aCasaDoContainer}>
        <p className={styles.restauranteDomAGastronom}>
          <b className={styles.restauranteDom}>{`A Casa do Porco: `}</b>
          <span>
            Criado em 2015 pelos chefs Janaína e Jefferson Rueda, A Casa do
            Porco nasceu com o objetivo de oferecer ao público alta gastronomia
            a preços acessíveis. Sendo considerado o melhor restaurante da
            América Latina de acordo com o ranking La Liste pelo segundo ano
            seguido, o lugar é o único do Brasil que planta, cria e produz todos
            os ingredientes que servem. A carne de porco é a protagonista da
            casa, sendo representado com diversas formas e texturas, nenhuma
            parte é desperdiçada. O estabelecimento pode ser encontrado na rua
            Araújo, 124 - República, São Paulo.
          </span>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-27@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-31@2x.png" />
      <div className={styles.headerMatria}>
        <b className={styles.asProfundezasDa}>
          As profundezas da gastronomia Paulistana.
        </b>
      </div>
      <div className={styles.oBrasilPossuiContainer}>
        <p className={styles.blankLine}>
          O Brasil possui uma gastronomia muito vasta e aclamada por todo o
          mundo. Os restaurantes, que são os responsáveis por perpetuar essa
          fama, estão presentes em todas as regiões do país, no entanto, tanto
          por ser um grande destino turístico quanto por possuir uma grande
          variedade de opções, São Paulo é considerado a capital gastronômica do
          Brasil.
        </p>
        <p className={styles.blankLine}></p>
        <p className={styles.blankLine}>
          No entanto, mesmo com diversos estabelecimentos reconhecidos
          mundialmente, muitos paulistanos não conhecem os restaurantes de São
          Paulo. Por isso, trouxemos dois restaurantes que vale a pena conhecer.
        </p>
        <p className={styles.blankLine}>{` `}</p>
      </div>
      <div className={styles.restaurantesM2Child} />
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
          <img className={styles.groupChild} alt="" src="/group-68.svg" />
          <div className={styles.acessibilidade}>Acessibilidade</div>
        </div>
        <img
          className={styles.logoIcon1}
          alt=""
          src="/logo10.svg"
          onClick={onLogo1Click}
        />
      </div>
      <i className={styles.publicado20062023}>Publicado: 20-06-2023</i>
      <div className={styles.restaurantesM2Item} />
      <img className={styles.restaurantesM2Inner} alt="" src="/polygon-1.svg" />
      <div className={styles.ouvir}>Ouvir</div>
      <div className={styles.tagFilmes}>
        <div className={styles.tagFilmes1}>
          <div className={styles.tagFilmesChild} />
          <div className={styles.restaurantes}>Restaurantes</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantesM2;
