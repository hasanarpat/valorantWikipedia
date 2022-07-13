import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

export const Map = () => {
  const [data, setData] = useState([]);
  const [co, setCo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get("http://localhost:8080/maps/" + id).then((response) => {
      setData(response.data.data);
      setCo(response.data.data.callouts);
      console.log(co[0]);
      console.log(data);
    });
  }, []);
  return (
    <div>
      {data ? (
        <div className={styles.container}>
          <div className={styles.header}>
            <img id={styles.mapImg} src={data.listViewIcon} alt="map" />
            <div className={styles.center}>
              <h2>{data.displayName}</h2>
              <h4>{data.coordinates}</h4>
              <div className={styles.infos}>
                {co.map((c) => {
                  return (
                    <div className={styles.info}>
                      <table>
                        <thead>
                          <tr>
                            <td><b>{c.regionName}</b></td>
                            <td><b>{c.superRegionName}</b></td>
                            <td> <b>x</b> : {c.location.x} / <b>y</b> : {c.location.y}</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
