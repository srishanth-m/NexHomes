import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect("mongodb+srv://srishanth:srishanth_m@cluster0.fojwfwp.mongodb.net/NexHomes?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => { console.log("connected to mongodb") })
    .catch((err) => console.log(err))

const app = express()

app.listen(3000, () => {
    console.log("app is listening at port 3000")
})