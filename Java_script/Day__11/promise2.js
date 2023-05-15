let s= new Promise ((res,rej)=>
{
    rej("something wents wrong")
})

console.log("the promise:",s)

s.catch((rej)=>
{
    console.log(rej)
})