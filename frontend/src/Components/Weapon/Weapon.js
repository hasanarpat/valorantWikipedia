import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Weapon = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/weapon/" + id).then((response) => {
      setData(response.data.data);
      console.log(data);
    });
  }, []);
  return (
    <div className={styles.Container}>
      {data ? (
        <div key={data.uuid} className={styles.weapon}>
          <div>
            <img id={styles.image} alt="weapon" src={data.displayIcon} />
          </div>
          <div className={styles.description}>
            <div className={styles.nameCat}>
              <h5>{data.displayName}</h5>

              <hr />
              <p>
                <b style={{ display: "inline-block" }}>Category:</b>
                {data.category ? " " + data.category.slice(21) : <p></p>}
              </p>
              <h3 style={{ maeginLeft: "45%", marginTop: "5%" }}>
                <b>Weapons Stats</b>
              </h3>
            </div>
            <div className={styles.stats}>
              {data.weaponStats ? (
                <ul className={styles.list}>
                  <p>
                    <b>Shoots:</b>
                  </p>

                  <li>
                    <b>Fire Rate: </b>
                    {data.weaponStats.fireRate}
                  </li>
                  <li>
                    <b>Mag. Size: </b>
                    {data.weaponStats.magazineSize}
                  </li>
                  <li>
                    <b>Reload Time: </b>
                    {data.weaponStats.reloadTimeSeconds}
                  </li>
                </ul>
              ) : (
                <></>
              )}
              {data.weaponStats && data.weaponStats.damageRanges.length > 0 && (
                <table style={{ marginTop: "-5%" }}>
                  <p style={{ marginBottom: "10%" }}>
                    <b>Damage:</b>
                  </p>
                  <tbody>
                    <tr>
                      <td>
                        <b>To Head:</b>
                        <br />
                        {data.weaponStats.damageRanges[0].headDamage}
                      </td>
                      <td>
                        <b>To Body:</b>
                        <br /> {data.weaponStats.damageRanges[0].bodyDamage}
                      </td>
                      <td>
                        <b>To Leg:</b>
                        <br />
                        {data.weaponStats.damageRanges[0].legDamage}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
