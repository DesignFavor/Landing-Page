import type { NextPage } from "next";
import FormContainer from "../components/form-container";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import styles from "./index.module.css";
import FormContainer2 from "../components/form-container2";

const Climatic: NextPage = () => {
  return (
    <div className={styles.climatic}>
      <FormContainer />
      <FrameComponent3 />
      <FormContainer2 />
      <FrameComponent4  />
      <FrameComponent2 />
      <GroupComponent />
    </div>
  );
};

export default Climatic;
