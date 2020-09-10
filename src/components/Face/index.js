import React from "react";
import "./style.css";

function Face() {
  return (
    <img src={process.env.PUBLIC_URL + '/face.png'} />
  );
}

export default Face;
