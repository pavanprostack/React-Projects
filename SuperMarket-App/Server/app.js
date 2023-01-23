import morgan from "morgan";
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import express from 'express'
import chalk from "chalk";
import productRouter from './router/productRouter.js'


const app = express();

dotenv.config({ path: "config/config.env" });
let port = process.env.PORT;
let hostname = process.env.HOST_NAME;

app.use(morgan('tiny'));
app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));

app.get("/", (req, res) => {
    res.send("<h1>Grocery App Server</h1>")
})

app.use("/product", productRouter)

let mongo_Url = process.env.MONGO_DB_LOCAL_URL

mongoose.set('strictQuery', false)
mongoose.connect(mongo_Url, { useNewUrlParser: true }).then((response) => {
    console.log(chalk.blueBright(`Mongo DB - Connected Successfully.`))
}).catch((err) => {
    console.log(err);
    process.exit(1);
})

app.listen(port, hostname, () => {
    console.log(chalk.magentaBright(`Express Server is running on http://${hostname}:${port}`))
})
