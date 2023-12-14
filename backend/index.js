const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "2a2807f5-0851-4d28-a891-dad9ec15665c" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  // return res.json({ username: username, secret: "sha256..." });
});
// da4e3245-f42c-422b-981e-ac29a1ec72c3

app.post("/signup", async (req, res) => {
  return {};
});

app.post("/login", async (req, res) => {
  return {};
});

app.listen(3001);
