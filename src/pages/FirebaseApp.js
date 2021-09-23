import React from "react";

import { wrapper } from "./FirebaseApp.module.css";

const styles = {
  width: "100%",
  height: "calc(100vh - 90px)",
};

const FirebaseApp = () => {
  return (
    <div className={wrapper}>
      <iframe
        src="https://login-with-firebase.netlify.app/"
        frameBorder="0"
        title="Code Editor"
        style={styles}
      />
    </div>
  );
};

export default FirebaseApp;
