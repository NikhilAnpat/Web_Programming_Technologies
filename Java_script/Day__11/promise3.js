function f1()
{
    console.log("HI")
}
function f2()
{
    console.log("Hello")
}

function kalu()
{
    console.log("1")

    setTimeout(f1,0)
    setTimeout(f2,1000)

    
    let p= new Promise((resolve, reject) => 
    {
     
        let num = Math.random()*100
        if(num<100)
        resolve(num)
        else
        reject(num)
    })

    console.log("2")

    p.then((resolve)=>
    {
        console.log(resolve)
    })

    p.catch((reject)=>
    {
        console.log(reject)
    })
}

kalu()