import express from "express"
import mongoose from "mongoose"
import router from "./routes";

const app = express();
app.use(express.json())

const MONGO_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(MONGO_URL, {
    dbName: "node-typescript-app"
}).then(() => {
    console.log("data base connected");

}).catch((error) => console.log(error))

app.use("/", router)

app.listen(4000, () => {
    console.log("server running http://localhost:4000");


})
