const fetch = require("isomorphic-fetch");
let editorMode = "javascript";
let Accesstoken = "6bcd30da-a06a-4510-976a-fdbd7d3e6ff3";
let body = {
  files: [
    {
      name: "main",
      content: "console.log('test');",
    },
  ],
};

fetch(`https://glot.io/api/run/${editorMode}/latest`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: "Token " + Accesstoken,
  },
  body: JSON.stringify(body),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
