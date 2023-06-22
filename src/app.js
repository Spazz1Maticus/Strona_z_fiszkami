import express from "express";
import index_route from "./routes/index.route";
import user_route from "./routes/user.route";
import auth_route from "./routes/auth.route";
import admin_route from "./routes/admin_route";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
const port = 4040;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());

app.use("/", index_route);
app.use("/user", user_route);
app.use("/auth", auth_route);
app.use("/admin", admin_route);

app.listen(port, () => console.log(`App running on port ${port}.`));
