const express = require("express");
const app = express( )

const mysql=require('mysql2');
const dotenv=require("dotenv");


dotenv.config();
const db=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME

})
db.connect((error)=>{
    if(error){
        return console.log("Error connecting to the database:",error)
    }
    console.log("successfully connected to MySQL:",db.threadId)
})

app.get('',(req, res)=>{
    const getPatients="SELECT * FROM patients"
    db.query(getPatients, (error,data)=>{
        if(error){
            return res.status(400).send("Failed to get patients", error)
        }
        res.status(200).send(data)
    })
})




app.listen(3300,() => {
    console.log(`server is running on port 3300... `)

    })