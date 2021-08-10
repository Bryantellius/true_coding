const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require("isomorphic-fetch");
let Accesstoken = "6bcd30da-a06a-4510-976a-fdbd7d3e6ff3";

const port = 3001;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.post("/api/run/:editorMode", async (req, res) => {
  try {
    let { editorMode } = req.params;
    let body = req.body;

    console.log(editorMode);

    let response = await fetch(`https://glot.io/api/run/${editorMode}/latest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Token " + Accesstoken,
      },
      body: JSON.stringify(body),
    });

    let data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ name: error.name, msg: error.message });
  }
});

app.listen(port, () => console.log("Server listening on port: " + port));
