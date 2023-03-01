const express = require("express");
const routes = require("./routes/routes");
require("./middlewares/auth");
require("./middlewares/retrieveUser");
const db = require("./db/db");
const cors = require("cors");
app = express();
db();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 8080, () =>
  console.log("connected on port 8080")
);
