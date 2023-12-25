const express = require("express");
const app = express();

const { PORT } = require("./config/server_config");
const apiRouter = require("./routes/api_router");

app.use("/api", apiRouter);

app.listen(PORT, (res) => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
