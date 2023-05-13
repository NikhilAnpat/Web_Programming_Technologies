import express from "express"

let app= express()

app.post("/login", (req,res)=>
{
    let user = req.query.uname
    let pwd = req.query.password

    if(user=="iet" && pwd=="123")
    {
        res.send(`welcome ${user}`)
    }
    else
    {
        res.send("wrong credential")
    }
})



app.listen(3003,()=>
{
    console.log("Hello Parameters")
})