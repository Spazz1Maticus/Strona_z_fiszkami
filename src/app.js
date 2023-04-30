import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4040;

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})