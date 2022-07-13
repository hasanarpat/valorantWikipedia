import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import {Agent} from "./Agent/Agent";
import styles from "./styles.module.css";

export const Agents = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
         axios.get("http://localhost:8080/api")
        .then((response)=>{setData(response.data.data);console.log(data)});
    }, [])
  return (
    <div className='Agents'>
        <div className={styles.agentsContainer}>
           {
            data ?  data.map((c,i)=>{ return (
              <Agent key={i} agent={c} />
            )}) : <></>
           }
        </div>
    </div>
  )
}