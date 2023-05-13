import express from "express"
let app=express()

app.get("/fact/:num",(req,res)=>
{
    let n=req.params.num
    let f=1

    for(var i=2;i<=n;i++)
    {
        f=f*i
    }

    res.send(`the factorail ${n} is: ${f}`)
})

// app.get("/factorial/:num",(req,res)=>{
//     console.log("the factorial is called")
//     let n = req.params.num
//     let fact=1
//     for(var i=2;i<=n;i++)
//     {
//        fact = fact * i
//     }
//     res.send(`the factorial of ${n} is ${fact}`)
  
//   })
  



app.listen(4004,()=>
{
    console.log("Welcome Path_parameters")
})