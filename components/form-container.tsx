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
            <img
              className={styles.logo64Icon}
              loading="lazy"
              alt=""
              src="/logo64.svg"
            />
            <a className={styles.logoipsum}>logoipsum</a>
          </div>
          <h1 className={styles.benvenutoNel}>{`Benvenuto nel `}</h1>
          <h1 className={styles.tuoEventoInterattivo}>
            TUO EVENTO INTERATTIVO
          </h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.vectorIcon}>
                <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
                <img
                  className={styles.iniziaIcon}
                  loading="lazy"
                  alt=""
                  src="/inizia.svg"
                />
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add the iframe here */}
      <div style={{ position: "absolute", width: "100%", height: "100vh", top: "0", zIndex: 1 }}>
        <iframe
          src="https://vm8ndt-5173.csb.app/"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Background Content"
        ></iframe>
      </div>
    </section>
  );
};

export default FormContainer;
