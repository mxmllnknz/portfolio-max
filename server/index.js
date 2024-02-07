const express = require("express");

const PORT = 3001;

const app = express();

app.get("/api", (_, res) => {
  res.json({
    message: "Hello from the server!",
  });
});

app.get("/users/:userId", (req, res) => {
  // Query DB for user details
  // console.log(req.params);
  res.json({
    user: {
      id: 1,
      first_name: "John",
      last_name: "Test",
    },
  });
});

app.get("/projects", (req, res) => {
  var json = require("./projects.json");
  res.json(json);
});

// All endpoints must go above the listen call in order to be registered

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
