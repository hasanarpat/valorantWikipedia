import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import {useNavigate} from "react-router-dom";

export const Weapons = () => {
  const [data, setData] = useState([]);
  let navigate=useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/weapons").then((response) => {
      setData(response.data.data);
      console.log(data);
    });
  }, []);
  return (
    <div className={styles.main}>
      {data ? (
        <div>
          <h2
            style={{
              width: "250",
              marginRight: "calc(50% - 125px)",
              marginLeft: "calc(50% - 125px)",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Weapons
          </h2>
          <div className={styles.gridContainer}>
            {data.map((c) => {
              return (
                <div onClick={()=>{navigate("/weapon/"+c.uuid)}} key={c.uuid} className={styles.weapon}>
                  <img  alt="weapon" src={c.skins[1].displayIcon} />
                  <h5>{c.displayName}</h5>
                  <p>
                    <b style={{ display: "inline-block" }}>Category:</b>
                    {" "+ c.category.slice(21)}
                  </p>
                  <div className={styles.stats}>
                    <p>
                      <b>Weapons Stats</b>
                    </p>
                    {c.weaponStats ? (
                      <ul className={styles.list}>
                        <li>Fire Rate: {c.weaponStats.fireRate}</li>
                        <li>Mag. Size: {c.weaponStats.magazineSize}</li>
                        <li>Reload Time: {c.weaponStats.reloadTimeSeconds}</li>
                      </ul>
                    ) : (
                      <></>
                    )}
                    {c.weaponStats && c.weaponStats.damageRanges.length > 0 && (
                      <table>
                      <p><b>Damage:</b></p>
                        <tbody>
                          <tr >
                            <td>To Head:<br />{c.weaponStats.damageRanges[0].headDamage}</td>
                            <td>To Body:<br /> {c.weaponStats.damageRanges[0].bodyDamage}</td>
                            <td>To Leg:<br />{c.weaponStats.damageRanges[0].legDamage}</td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>data couldn't loaded</p>
      )}
    </div>
  );
};
