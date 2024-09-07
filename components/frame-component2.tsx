import type { NextPage } from "next";
import { TextField } from "@mui/material";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.contactContainerInner, className].join(" ")}>
      <div className={styles.frameParent}>
        {/* Form Content */}
        <div className={styles.formWrapper}>
          <h1 className={styles.form}>FORM</h1>
        </div>
        <div className={styles.fullNameInput}>
          <div className={styles.sendUsA}>
            Send us a message so we can help you out.
          </div>
        </div>
        <div className={styles.emailPhoneFields}>
          <div className={styles.fullNameField}>
            <div className={styles.fullname}>Fullname</div>
            <TextField
              className={styles.fullNameFieldChild}
              placeholder="Enter fullname..."
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#b2b2b2" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  borderRadius: "8px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": { color: "#717079" },
              }}
            />
          </div>
          <div className={styles.phoneField}>
            <div className={styles.emailAddressParent}>
              <div className={styles.emailAddress}>Email Address</div>
              <TextField
                className={styles.emailInput}
                placeholder="Enter email address..."
                variant="outlined"
                type="email"
                sx={{
                  "& fieldset": { borderColor: "#b2b2b2" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    borderRadius: "8px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#717079" },
                }}
              />
            </div>
            <div className={styles.emailAddressParent}>
              <div className={styles.phoneNumber}>Phone number</div>
              <TextField
                className={styles.phoneInput}
                placeholder="Enter phone number..."
                variant="outlined"
                type="tel"
                sx={{
                  "& fieldset": { borderColor: "#b2b2b2" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    borderRadius: "8px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#717079" },
                }}
              />
            </div>
          </div>
          <textarea
            className={styles.emailPhoneFieldsChild}
            placeholder="Describe your event..."
            rows={6}
            cols={22}
          />
        </div>
        <div className={styles.submitContainer}>
          <div className={styles.submitButton}>
            <div className={styles.submitMessageBackground} />
            <button className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.submitYourMessage}>
                Submit your message
              </div>
              <div className={styles.submitSpacer}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="/frame-2@2x.png"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
