function f1()
{
    console.log("F1 Run")
}

let j=f1()             // print f1 run
console.log(typeof(j))  //undefined

let x=f1
console.log(typeof(x))   //function