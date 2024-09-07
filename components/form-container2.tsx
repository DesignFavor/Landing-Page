import type { NextPage } from "next";
import React from "react";
import styles from "./form-container.module.css";
import Image from "next/image";
import Theatre from "../public/Theater.jpg"

export type FormContainerType = {
  className?: string;
};

const FormContainer: NextPage<FormContainerType> = ({ className = "" }) => {
  return (
    <section className={[styles.formContainer, className].join(" ")}>
      {/* Background image with layout fill */}
      <div className={styles.backgroundImageWrapper}>
        <Image 
          src={Theatre} className={styles.backgroundImageWrapper}
          alt="Theatre" 
          layout="fill" 
          objectFit="cover" // You can use 'contain' or 'cover' based on your preference 
          priority
        />
      </div>

      {/* Content */}
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <h1 className={styles.benvenutoNel}>{`Inizia a prenotare`}</h1>
          <h1 className={styles.tuoEventoInterattivo}>Lorem ipsum dolor</h1>
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
    </section>
  );
};

export default FormContainer;
