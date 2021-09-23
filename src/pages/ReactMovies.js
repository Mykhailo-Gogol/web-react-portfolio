import React from "react";
import { wrapper } from "./ReactMovies.module.css";

const styles = {
  width: "100%",
  height: "calc(100vh - 90px)",
};

const ReactMovies = () => {
  return (
    <div className={wrapper}>
      <iframe
        src="https://mgreact04movies.netlify.app/"
        frameBorder="0"
        title="Code Editor"
        style={styles}
      />
    </div>
  );
};

export default ReactMovies;
