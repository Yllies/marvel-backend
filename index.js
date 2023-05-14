const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");

const cors = require("cors");
app.use(cors());

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.json({ error: error.response.data });
  }
});

app.get("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.json({ error: error.response.data });
  }
});

app.get("/comic/:comicId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.json({ error: error.response.data });
  }
});

app.get("/characters", async (req, res) => {
  const name = req.query.name || "";
  const limit = req.query.limit || "100";
  const skip = req.query.skip || "0";

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&name=${name}&limit=${limit}&skip=${skip}`
    );

    res.json(response.data);
  } catch (error) {
    res.json({ error: error.response.data });
  }
});

app.get("/character/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.json({ error: error.response.data });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server has started !");
});
