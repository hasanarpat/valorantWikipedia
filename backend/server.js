const express = require("express");
const https = require("https");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

let url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

app.get("/search/:id", (request, response) => {
  const id = request.params.id;
  const mapsUrl = "https://valorant-api.com/v1/maps/";
  const agentsUrl = "https://valorant-api.com/v1/agents/";
  const weaponsUrl = "https://valorant-api.com/v1/weapons/";

  let agent;
  let map;
  let weapon;

  https
    .get(mapsUrl, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        /*console.log(newData.data[0]);*/
        newData.data.forEach((el)=>{
          if(el.displayName===id){
            response.json({data:el,type:"map"});
            console.log("searched and finded:" +el.displayName);
          }
        })
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
  https
    .get(agentsUrl, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        newData.data.forEach((el)=>{
          if(el.displayName===id){
            response.json({data:el,type:"agent"});
            console.log("searched and finded:" +el.displayName);
          }
        })
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
  https
    .get(weaponsUrl, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        newData.data.forEach((el)=>{
          if(el.displayName===id){
            response.json({data:el,type:"weapon"});
            console.log("searched and finded:" +el.displayName);
          }
        })
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
});

app.get("/api", (request, response) => {
  console.log("connected");
  https
    .get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        response.json(newData);
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
});
app.get("/agent/:id", (request, response) => {
  let agentUrl = "https://valorant-api.com/v1/agents/" + request.params.id;

  https
    .get(agentUrl, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        response.json(newData);
        console.log(newData);
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
});
app.get("/weapons", (request, response) => {
  let weaponurl = "https://valorant-api.com/v1/weapons";
  console.log("connected");
  https
    .get(weaponurl, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        console.log(newData);
        response.json(newData);
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
});
app.get("/weapon/:id", (request, response) => {
  let weaponUrl = "https://valorant-api.com/v1/weapons/" + request.params.id;

  https
    .get(weaponUrl, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        response.json(newData);
        console.log(newData);
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
});
app.get("/maps", (request, response) => {
  let mapurl = "https://valorant-api.com/v1/maps";
  console.log("connected");
  https
    .get(mapurl, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        console.log(newData);
        response.json(newData);
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
});
app.get("/maps/:id", (request, response) => {
  let mapsUrl = "https://valorant-api.com/v1/maps/" + request.params.id;

  https
    .get(mapsUrl, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const newData = JSON.parse(data);
        response.json(newData);
        console.log(newData);
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
