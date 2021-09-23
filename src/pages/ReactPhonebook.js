import React from "react";

import { wrapper } from "./ReactPhonebook.module.css";

const styles = {
  width: "100%",
  height: "calc(100vh - 90px)",
};

const ReactPhonebook = () => {
  return (
    <div className={wrapper}>
      <iframe
        src="https://mg-react-phonebook-08.netlify.app/"
        frameBorder="0"
        title="Code Editor"
        style={styles}
      />
    </div>
  );
};

export default ReactPhonebook;
