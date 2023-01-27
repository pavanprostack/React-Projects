import express from 'express';
import dotenv, { config } from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js'
import morgan from 'morgan';


const app = express();

dotenv.config({ path: "config/config.env" });
const port = process.env.PORT;

app.use(express.json());
app.use(cors())
app.use(morgan("tiny"))
app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.send("Authentication");
})


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const MONGO_URL = process.env.MONGO_URL
mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL, connectionParams).then((response) => {
    console.log(`Mongo DB - Connected Successfully.`)
}).catch((err) => {
    console.log(err);
    process.exit(1);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})