const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", routes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
