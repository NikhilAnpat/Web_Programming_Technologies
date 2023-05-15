let p= new Promise ((resolve,reject)=>
{
    setTimeout(()=>
    {
        console.log("complete")
        resolve="sucess"
    },8000)
})

console.log("the promise",p)
p.then((res)=>
{
    console.log(res,"Hurray")
})