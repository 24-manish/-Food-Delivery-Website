import express from "express"
import cors from "cors"
import { connectbd } from "./config/db.js"
import foodrouter from "./routes/foodroute.js"
//app confi
const app = express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectbd();

//api endpoints
app.use("/api/food",foodrouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


//mongodb+srv://Manish:12345@cluster0.d8jneqd.mongodb.net/?