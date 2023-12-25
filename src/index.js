const express = require("express");
const app = express();

const { PORT } = require("./config/server_config");
const apiRouter = require("./routes/api_router");
const { DB_FORCE, DB_ALTER } = require("./config/server_config");
const db = require("./config/db_config");

app.use("/api", apiRouter);

app.listen(PORT, async (res) => {
  console.log(`Server Started on http://localhost:${PORT}`);

  if (DB_FORCE == true) {
    await db.sync({ force: true });
  } else if (DB_ALTER == true) {
    await db.sync({ alter: true });
  } else {
    await db.sync();
  }

  console.log("DB Connected");
});
