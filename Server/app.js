const express = require("express");
var bodyParser = require("body-parser");
const Products = require("./routers/products");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
const db = require("./config/appConfig");
db.authenticate()
    .then(() => console.log("Database Connected.."))
    .catch((err) => console.log("Error:" + err));

app.use("/product", Products);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
