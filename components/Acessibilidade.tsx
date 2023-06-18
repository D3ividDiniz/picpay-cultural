import type { NextPage } from "next";
import styles from "./Acessibilidade.module.css";

type AcessibilidadeType = {
  onClose?: () => void;
};

const Acessibilidade: NextPage<AcessibilidadeType> = ({ onClose }) => {
  return (
    <div className={styles.acessibilidade}>
      <div className={styles.acessibilidadeInner}>
        <div className={styles.altoContrasteParent}>
          <div className={styles.altoContraste}>Alto Contraste</div>
          <div className={styles.inverterCores}>Inverter Cores</div>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector5.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector7.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector8.svg" />
          <img className={styles.vectorIcon7} alt="" src="/vector9.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector10.svg" />
          <img className={styles.vectorIcon9} alt="" src="/vector11.svg" />
          <img className={styles.vectorIcon10} alt="" src="/vector12.svg" />
          <img className={styles.vectorIcon10} alt="" src="/vector13.svg" />
        </div>
      </div>
      <div className={styles.acessibilidadeChild}>
        <div className={styles.fonteGrandeParent}>
          <div className={styles.fonteGrande}>Fonte Grande</div>
          <div className={styles.a}>A+</div>
        </div>
      </div>
      <div className={styles.acessibilidadeItem} />
      <div className={styles.toggleOff}>
        <img className={styles.toggleIcon} alt="" src="/toggle.svg" />
      </div>
      <div className={styles.toggleOff1}>
        <img className={styles.toggleIcon} alt="" src="/toggle.svg" />
      </div>
      <div className={styles.toggleOff2}>
        <img className={styles.toggleIcon} alt="" src="/toggle.svg" />
      </div>
      <div className={styles.fonte}>{`Fonte `}</div>
    </div>
  );
};

export default Acessibilidade;
