import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

export const SingleAgent = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState();
  const [abilities, setAbilities] = useState([]);
  const [audio, setAudio] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/agent/" + id).then((response) => {
      setAgent(response.data.data);
      setAbilities(response.data.data.abilities);
      setAudio(response.data.data.voiceLine.mediaList);
      console.log(response.data.data);
    });
  }, []);
  return (
    <div className={styles.singleAgent}>
      {agent ? (
        <div className={styles.agentCard}>
        <img id={styles.portrait} src={agent.fullPortraitV2} />
          <div className={styles.bigContainer}>
            <div className={styles.Container}>
              <h5>{agent.displayName}</h5>
              <p>{agent.description}</p>
              <p style={{fontSize:"larger"}}>
                <b>Role: </b>
                {agent.role.displayName}
              </p>

              <p>{agent.role.description}</p>
              <img
                style={{
                  width: "35px",
                  height: "35px",
                  paddingLeft: "50%",
                  paddingRight: "50%",
                  marginLeft: "-0%",
                }}
                src={agent.role.displayIcon}
              />
            </div>
            <h4 id={styles.titleAb}>Abilities: </h4>
            {abilities.length > 0 ? (
              
              <div className={styles.abilities}>
                <div className={styles.ability}>
                  <h5>{abilities[0].displayName}</h5>
                  <p>
                    <b>Description: </b>
                    {abilities[0].description}
                  </p>
                  <img src={abilities[0].displayIcon} />
                </div>
                <div className={styles.ability}>
                  <h5>{abilities[1].displayName}</h5>
                  <p>
                    <b>Description: </b>
                    {abilities[1].description}
                  </p>
                  <img src={abilities[1].displayIcon} />
                </div>
                <div className={styles.ability}>
                  <h5>{abilities[2].displayName}</h5>
                  <p>
                    <b>Description: </b>
                    {abilities[2].description}
                  </p>
                  <img src={abilities[2].displayIcon} />
                </div>
                <div className={styles.ability}>
                  <h5>{abilities[3].displayName}</h5>
                  <p>
                    <b>Description: </b>
                    {abilities[3].description}
                  </p>
                  <img src={abilities[3].displayIcon} />
                </div>
                <audio controls>
              <source src={audio[0].wwise} />
              <source src={audio[0].wave} />
              </audio>
              </div>
            ) : (
              <></>
            )}
            
          </div>
          
          
          
        </div>
        
      ) : (
        <></>
      )}
      
    </div>
  );
};
