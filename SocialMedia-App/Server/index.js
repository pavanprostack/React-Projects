const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config({ path: "config/config.env" })
const MONGO_URL = process.env.MONGO_URL;

// MongoDB Cloud Connection
mongoose.set('strictQuery', false)
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(MONGO_URL, connectionParams).then((resp) => {
    console.log(`Mongo DB - Connected!`)
}).catch((err) => {
    console.log(err);
    process.exit(1);
})

// MiddleWears
app.use(morgan('tiny'));
app.use(express.json({ limit: "10mb" }));
app.use(helmet())

// Calling Routers
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(8800, () => {
    console.log(`Server is running...`)
})