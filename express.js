const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login", cors(), (req, res) => {
  // Handle login route if needed
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (error) {
    res.json("not exist");
  }
});

app.post("/sign", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password
  };
  try {
    const check = await collection.findOne({ email });
    if (check) {
      res.json("exist");
    } else {
      await collection.create(data);
      res.json("not exist");
    }
  } catch (error) {
    res.json("not exist");
  }
});
app.get("/admin", (req, res) => {
  // Your logic for handling the /admin route
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


