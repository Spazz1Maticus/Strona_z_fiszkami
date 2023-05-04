import express from "express";
import Routes from './query/routes';

const app = express();
const port = 4040;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Working");
})

app.use('/api/default', Routes);

app.listen(port, () => console.log(`App running on port ${port}.`));