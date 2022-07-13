import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const Maps = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/maps").then((response) => {
      setData(response.data.data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      {data ? (
        <div className={styles.maps}>
          {data.map((c) => {
            return( 
            <div onClick={()=>{navigate("/map/"+c.uuid)}} className={styles.map}>
                <h3>{c.displayName}</h3>
                <img id={styles.firstMapImg} src={c.listViewIcon} alt="" />
                <p>Sketch</p>
                <img style={{marginLeft:"-30%"}} key={c.uuid} src={c.displayIcon} alt="map" />
                <p><b>Location: </b>{c.coordinates}</p>
            </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
