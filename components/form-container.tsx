import React from "react";
import styles from "./form-container.module.css";

export type FormContainerType = {
  className?: string;
};

const FormContainer: React.FC<FormContainerType> = ({ className = "" }) => {
  return (
    <section className={[styles.formContainer, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.logo64Parent}>
            <img className={styles.logo64Icon} loading="lazy" alt="" src="/logo64.svg" />
            <a className={styles.logoipsum}>logoipsum</a>
          </div>
          <h1 className={styles.benvenutoNel}>{`Benvenuto nel `}</h1>
          <h1 className={styles.tuoEventoInterattivo}>TUO EVENTO INTERATTIVO</h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <a href="https://demo-climatic.netlify.app" target="_blank" rel="noopener noreferrer" className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.vectorIcon}>
                <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
                <img className={styles.iniziaIcon} loading="lazy" alt="" src="/inizia.svg" />
                <img className={styles.frameIcon} loading="lazy" alt="" src="/frame@2x.png" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", width: "100%", height: "100vh", top: "0", left: "0", zIndex: "-1" }}>
        <iframe
          src="https://artemide-test-scene.vercel.app"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="3D Scene"
        />
      </div>
    </section>
  );
};

export default FormContainer;
