const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("./db/conn");
const port = process.env.PORT || 5000;

const Pet = require("./models/pet.model");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/pets", async (req, res) => {
  try {
    let pet = new Pet();
    pet.petStatus = req.body.petStatus;
    pet.type = req.body.type;
    pet.sex = req.body.sex;
    pet.petName = req.body.petName;
    pet.lastSeenAdd = req.body.lastSeenAdd;
    pet.email = req.body.email;
    pet.lastSeenDate = req.body.lastSeenDate;
    pet.description = req.body.description;
    pet.reportImage = req.body.reportImage;
    pet.latitude = req.body.latitude; // Use latitude instead of lat
    pet.longitude = req.body.longitude; // Use longitude instead of long
    const doc = await pet.save();
    console.log(doc);
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/pets", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
