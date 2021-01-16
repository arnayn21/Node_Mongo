const express = require('express')






const app = express()

const  rootCall = (req , res)=>{
        res.send("Thank you so much ")
}

app.get("/",rootCall)

app.listen(3000 , ()=> console.log("listing to port 3000"))