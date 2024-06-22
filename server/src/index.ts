import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
import cors from "cors"

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())

const mongoURI: string = "mongodb+srv://sebastianlib2:sebus@personalfinancetracker.xrtmofp.mongodb.net/"

mongoose.connect(mongoURI).then(()=>console.log("CONNECTED"))
.catch((err)=>console.log(console.error("Failed to Connect to MongoDB")))

app.use("/financial-records", financialRecordRouter)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})