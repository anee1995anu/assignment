const express=require("express")
const app=new express();
const routes=require('./routes');
const morgan=require("morgan")

require('dotenv').config();
require("./db");
const cors=require("cors")
const PORT =process.env_PORT || 3002;
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(morgan("dev"))

app.use('/',routes)

app.listen(PORT,()=>{
    console.log("serving on port " +PORT);
})

