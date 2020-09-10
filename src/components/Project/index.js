import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Project(props) {
  console.log(props.image)
  return (
    <div>

<h1 className="text-center">{props.title}</h1>
        <h3 className="text-center">
          <a href={props.linkDeployed}>Deployed Version</a><br/>
          <a href={props.linkGithub}>Github Link</a>
        </h3>
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: props.image ? 1 : 1 }}
        onClick={props.handleBtnClick}
        data-value="previous"
      />
      <CardBtn
        style={{ opacity: props.image ? 1 : 1 }}
        onClick={props.handleBtnClick}
        data-value="next"
      />
    </div>
    </div>
  );
}

export default Project;
