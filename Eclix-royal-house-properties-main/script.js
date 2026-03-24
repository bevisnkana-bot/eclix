document.querySelector("button").addEventListener("click",()=>{
    const location =document.querySelector("input").value;
    const type=document.querySelector("select").value;
    alert(`searching for ${type} in ${location}`);
})
//Backend(server.js)
const express=require("express");
const { type } = require("node:os");
const app=express();
app.use(express.static("public"));
app.use(express.json());
let properties =[
    {id:1,location:"Nairobi",type:"Apartment"},
    {id:2,location:"Mombasa",type:"Villa"},
]
//API ROUTE
app.get("/api/properties",(req,res)=>{
    res.json(properties);
});
// Add Property
app.post("/api/properties",(req,res)=>{
    const newProperty = req.body;
    properties.push(newProperty);
    res.json({message:"Property added!"});
});app.listen(3000, ()=>{
    console.log("Server running on port 3000"
)n};
const mongoose = require("mongoose");
mongoose.connect("YOUR_MONGO_URL")
.then(()=>console.log("DB connected"))
.catch(err => console.log(err));
//MODELS
// USER MODEL
const mongoose =require("mongoose");
const userSchema=new mongoose.schema({Email:""
                                    Password:""
                                    isAdmin:""
                                    {type:Boolean,default:fault}})
                                    module.exports=mongoose.model("user",userSchema);
//Property model
const mongoose=require("mongoose");
const propertySchema=new mongoose.schema
({
    tittle:
    loact
}

)