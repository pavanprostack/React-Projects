import mongoose from "mongoose";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const MONGO_URL = process.env.MONGO_URL
mongoose.set("strictQuery", false)
try {
    mongoose.connect((MONGO_URL, connectionParams).then(() => {
        console.log(`Mongo DB - Connected Successfully`);
    }))
} catch (error) {
    console.log(error);
    console.log(`Could n't Connected to Mongo DB`);
}


