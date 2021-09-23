import React from "react";
import { wrapper } from "./CodeEditor.module.css";

const styles = {
  width: "100%",
  height: "calc(100vh - 90px)",
};

const CodeEditor = () => {
  return (
    <div className={wrapper}>
      <iframe
        src="https://mykhailo-gogol.github.io/react-typescript-code-editor/"
        frameBorder="0"
        title="Code Editor"
        style={styles}
      />
    </div>
  );
};

export default CodeEditor;
