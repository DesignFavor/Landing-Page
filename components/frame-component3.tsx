import React, { useState, useEffect } from "react";
import Night from "./night"; // Make sure this path is correct
import styles from "./frame-component3.module.css";


interface WebGIControls {
    changeEnvironment: (mode: string) => Promise<void>;
}

declare global {
    interface Window {
        webgiControls?: WebGIControls;
    }
}

const FrameComponent3: React.FC<{ className?: string }> = ({ className = "" }) => {
    const [mode, setMode] = useState("day");

    useEffect(() => {
        const setupViewer = async () => {
            const { ViewerApp, addBasePlugins, FileTransferPlugin } = await import('webgi');
            const canvas = document.getElementById('webgi-canvas') as HTMLCanvasElement;
            if (!canvas) {
                console.error('Canvas element not found');
                return;
            }

            const viewer = new ViewerApp({ canvas }) as any;

            try {
                await addBasePlugins(viewer);
                await viewer.addPlugin(FileTransferPlugin);
                await viewer.load("./assets/scene2.glb");
                await viewer.setEnvironmentMap("./assets/day.hdr");

                window.webgiControls = {
                    changeEnvironment: async (mode: string) => {
                        let hdrFile = "";
                        switch (mode) {
                            case "day":
                                hdrFile = "./assets/day.hdr";
                                break;
                            case "night":
                                hdrFile = "./assets/night.hdr";
                                break;
                            case "warm":
                                hdrFile = "./assets/sunset.hdr";
                                break;
                            default:
                                hdrFile = "./assets/day.hdr";
                        }
                        console.log(`Attempting to load HDRI: ${hdrFile}`);
                        try {
                            await viewer.setEnvironmentMap(hdrFile);
                            console.log(`Successfully loaded HDRI: ${hdrFile}`);
                        } catch (error) {
                            console.error(`Error loading HDRI: ${hdrFile}`, error);
                        }
                    },
                };
            } catch (error) {
                console.error("Error setting up WebGI viewer:", error);
            }
        };

        setupViewer();

        const checkWebgiControls = () => {
            if (!window.webgiControls) {
                console.error("webgiControls is not defined.");
            }
        };

        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.onload = checkWebgiControls;
        } else {
            checkWebgiControls();
        }
    }, []);

    const handleModeChange = (newMode: string) => {
        setMode(newMode);
        if (window.webgiControls) {
            console.log(`Changing to mode: ${newMode}`);
            window.webgiControls.changeEnvironment(newMode);
        } else {
            console.error("webgiControls is not available.");
        }
    };

    return (
        <section className={[styles.climaticInner, className].join(" ")}>
            <canvas id="webgi-canvas" style={{ width: "100%", height: "100vh", position: "absolute" }} />
            <div className={styles.comeLavoriamoParent}>
                <h1 className={styles.comeLavoriamo}>Come lavoriamo</h1>
                <div className={styles.themeSelection}>
                    <img className={styles.bgIcon} alt="" src="/bg.svg" />
                    <div className={styles.selectorOptions}>
                        <div className={styles.chooseOption}>
                            <h2 className={styles.choose}>Choose</h2>
                        </div>
                        <div className={styles.themeOptions}>
                            <div
                                className={`${styles.day} ${mode === "day" ? styles.active : ""}`}
                                onClick={() => handleModeChange("day")}
                            >
                                <img
                                    className={styles.vectorIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/vector-2.svg"
                                />
                                <div className={styles.dayLabelContainerWrapper}>
                                    <div className={styles.dayLabelContainer}>
                                        <img
                                            className={styles.dayIcon}
                                            loading="lazy"
                                            alt=""
                                            src="/day.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Night onClick={() => handleModeChange("night")} ></Night>
                            <div
                                className={`${styles.warmbt} ${mode === "warm" ? styles.active : ""}`}
                                onClick={() => handleModeChange("warm")}
                            >
                                <img
                                    className={styles.vectorIcon2}
                                    loading="lazy"
                                    alt=""
                                    src="/vector-6.svg"
                                />
                                <img
                                    className={styles.warmIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/warm.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.themeSelectionInner}>
                        <div className={styles.inziaParent}>
                            <div className={styles.inzia}>INZIA</div>
                            <div className={styles.vectorParent}>
                                <img
                                    className={styles.vectorIcon4}
                                    alt=""
                                    src="/vector.svg"
                                />
                                <img
                                    className={styles.frameIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/frame-1@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dayNightSelectorInner}>
                    <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/rectangle-17.svg"
                    />
                </div>
            </div>
        </section>
    );
};

export default FrameComponent3;
