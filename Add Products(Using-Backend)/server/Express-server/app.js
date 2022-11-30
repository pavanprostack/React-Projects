import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
const app = express();


app.use(express.json())  // for recieving POST data we use this.
app.use(cors());

dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.get("/", (req, res) => {
    res.send("Hello World!")
})

const products = [
    {
        id: 1,
        name: "iphone",
    },
    {
        id: 2,
        name: "oppo",
    },
    {
        id: 3,
        name: "vivo",
    }
]

app.get("/products", (req, res) => {
    res.send(products)  // (or) res.json(products)  it is for getting response in the form of Json.
})

// for i want to get data from API, by using particular id.     [:id] is a path params it helps to identify path.
app.get("/products/:id", (req, res) => {
    const newData = products.filter((item) => item.id.toString() === req.params.id);
    res.send(newData)
})

// POST data
app.post("/addproducts", (req, res) => {
    // here we are requesting
    const { id, name } = req.body;
    console.log(id, name);
    res.send("Data Stored!")
})

const mongo_url = process.env.MONGODB_LOCAL_URL
mongoose.connect(mongo_url).then((res)=>{
    console.log("Mongo DB - is Connected.")
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})


app.listen(port,hostname,() => {
    console.log(`Server is running on...http://${hostname}:${port}`)
})