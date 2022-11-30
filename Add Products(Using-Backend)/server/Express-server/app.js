import express from 'express'
import cors from 'cors'
const app = express();


app.use(express.json())  // for recieving POST data we use this.
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Hello World!")
})

const products =[
    {
    id:1,
    name:"iphone",
},
{
    id:2,
    name:"oppo",
},
{
    id:3,
    name:"vivo",
}
]

app.get("/products", (req, res)=>{
    res.send(products)  // (or) res.json(products)  it is for getting response in the form of Json.
})

// for i want to get data from API, by using particular id.     [:id] is a path params it helps to identify path.
app.get("/products/:id", (req, res)=>{
    const newData = products.filter((item) => item.id.toString() === req.params.id);
     res.send(newData)
})

// POST data
app.post("/addproducts", (req, res)=>{
    // here we are requesting
    const {id, name} = req.body;
    console.log(id, name);
    res.send("Data Stored!")
})


app.listen(8000, ()=>{
    console.log("Server is running on...")
})