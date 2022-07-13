import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import axios from "axios";

export const Home = () => {
  const nav = useNavigate();
  const [data, setData] = useState();
  const [url,setUrl] = useState();
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  });
  function searchValue(event) {
    const handle = event.target.value;
    setValue(handle);
    console.log(handle);
  }
  function navigate(url){
    nav(url, { replace: true });
  }
  function goTo() {
    axios.get("http://localhost:8080/search/" + value).then((response) => {
      setData(response.data);
      console.log(data.data);
      console.log(data.type);
      if(data.type==="weapon"){
        navigate("../weapon/"+data.data.uuid);
      }
      else if(data.type==="map"){
        navigate("../map/"+data.data.uuid);
      }
      else{
        navigate("../agent/"+data.data.uuid);
      }
        
    });

    /* nav("/agents");*/
  }
  return (
    <div className="home">
      <div className="content">
        <h2>Welcome!</h2>
        <form action="">
          <input
            onChange={searchValue}
            value={value}
            ref={inputRef}
            type="text"
            name="search"
            id="search"
          />
          <label htmlFor="search">
            Search for chracters, weapons and maps...
          </label>
          <div className="submit">
            <button type="reset" onClick={goTo} className="home-button">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
