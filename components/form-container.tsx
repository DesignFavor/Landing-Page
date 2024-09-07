import React, { useEffect, useRef } from "react";
import styles from "./form-container.module.css";


// Define types if needed
export type FormContainerType = {
  className?: string;
};

const FormContainer: React.FC<FormContainerType> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const setupViewer = async () => {
      const { ViewerApp, addBasePlugins, FileTransferPlugin } = await import('webgi');

      if (canvasRef.current) {
        const viewer = new ViewerApp({ canvas: canvasRef.current });

        try {
          await addBasePlugins(viewer);
          await viewer.addPlugin(FileTransferPlugin);
          

          // Load the GLB model
          await viewer.load("public\assets\Artemide.glb");

          // If you need to add additional setup, do it here
        } catch (error) {
          console.error("Error setting up WebGI viewer:", error);
        }
      } else {
        console.error('Canvas element not found');
      }
    };

    setupViewer();

    // Cleanup if needed
    return () => {
      // You may need to add cleanup code here, if necessary
    };
  }, []);

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
      {/* WebGi Viewer */}
      <div style={{ position: "absolute", width: "100%", height: "100vh", top: "0", left: "0", zIndex: "-1" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      </div>
    </section>
  );
};

export default FormContainer;
