import express from "express"

let app = express()

// app.get('/',(req,res)=>
// {
//     return res.send("ok")
// })

app.post("/postit" ,(req,res)=>
{
    return res.send("Welcome post")
})

app.put("/putit",(req,res)=>
{
return res.send("welcome put")
})

app.delete("/delteit" ,(req,res)=>
{
    
return res.send("welcome delete")})

app.listen(2002,()=>{
    console.log("Hello express")
})


