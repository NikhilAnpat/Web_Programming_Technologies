import express from "express"

let app=express()

app.use(express.json())
app.delete("/shouldwethrow" ,(req,res)=>
{
    let pname=req.body.productname
    let datestr=req.body.dateofexpiary

    let d=new Date(datestr)
    let today= new Date()

    if(today>d)
    {
        res.send("Already expired")
    }
    else
    {
        res.send("you can use it")
    }
})

app.listen(5005, ()=>
{
    console.log("Welcome Request body path")
})