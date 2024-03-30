import dotenv from "dotenv";
import connectDB from "./db/connection.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then(()=>{
    app.on((error)=>{
        console.log("Error: ",error);
    })
    app.listen(process.env.PORT || 5000,()=>{
        console.log("Server is running on port: ", process.env.PORT);
    })
})
.catch((err)=>{
    console.log("Error: ", err);
    throw err;
})





































/*
import mongoose from "mongoose";
import {DB_NAME}from "./constants";
const app = express();
( async()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // TODO: see this again
    app.on("error", err => console.log(err));  

    app.listen(process.env.PORT || 5000, () => {
        console.log("Server is running on port 3000");
    });
} catch (error) {
    console.error("Error: " + error)
    throw err
}
})()
*/ 

// This is effie ()() which have this two brackets for initialize and execute the same function on same time.