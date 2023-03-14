const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = http.createServer(app);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello from the backend");
  });
}


server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})

app.get('/api/poem', (req, res) => {
  res.status(200).json({msg: 'hello'})
})