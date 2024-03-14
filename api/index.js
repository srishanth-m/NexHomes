import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
dotenv.config()

mongoose.connect("mongodb+srv://srishanth:srishanth_m@cluster0.fojwfwp.mongodb.net/NexHomes?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => { console.log("connected to mongodb") })
    .catch((err) => console.log(err))

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log("app is listening at port 3000")
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "internal server error"
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})