const express = require("express");
const { PORT } = require("./config/server_config");

const app = express();

app.use("/api");

app.listen(PORT, (res) => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
