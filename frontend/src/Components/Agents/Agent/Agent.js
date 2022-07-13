import React from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";

export const Agent = (props) => {

  const navigate = useNavigate();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const data = props.agent;
  let url = data.bustPortrait;
  return (
    <div className={styles.card} >
      <div style={{overflow:"hidden"}}>
      <img
        style={{
          width: "320px",
          objectPosition:"center"
        }}
        src={data.bustPortrait}
        alt="Avatar"
      ></img>
      </div>
      <div className={styles.cardContainer}>
        <h4>
          <b>{data.displayName}</b>
        </h4>
        <p>{data.description}</p>
        <div>
          <p>
            <b>Role: </b>
            {data.role.displayName}
          </p>
          <img
            style={{
              width: "35px",
              height: "35px",
              paddingLeft: "50%",
              paddingRight: "50%",
              marginLeft: "-10%",
            }}
            src={data.role.displayIcon}
          />

          <p>{data.role.description}</p>
          <button onClick={()=>{navigate("/agent/"+data.uuid)}} className={styles.seeButton}>See More...</button>
        </div>
      </div>
    </div>
  );
};
