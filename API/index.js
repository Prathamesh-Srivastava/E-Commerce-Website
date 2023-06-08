const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 80;
const authRoute = require("./Routes/Auth");
const productRoute = require("./Routes/Product");
const cors = require("cors");

mongoose.connect("mongodb+srv://srivastavaprathamesh396:Mongo$396@cluster0.25p4ahs.mongodb.net/"
).then(()=> console.log("Connection successfull"));

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);




app.listen(port,()=>{
    console.log("Backend Server is running on port "+ port);
})