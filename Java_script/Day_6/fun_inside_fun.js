// function doMath(choice)
// {
//     function doSquare(x)
//     {
//         return x*x
//     }

//     function dopower(a,b)
//     {
//         let p= Math.pow(a,b)
//         return p
//     }


// if(choice==1)
// {
//    return doSquare
// }
// else
// {
//     return dopower
// }
// }// end do math

// let v=doMath(1)
// let s=v(12)
// console.log(s)

// let p=doMath(2)
// let a=p(2,3)
// console.log(a)



function doMath(choice)
{
    function doSquare(x)
    {
        return  x*x
    }

    function doPower(a,b)
    {
        let z=Math.pow(a,b)
        return z
    }

    if(choice==1)
    {
        return doSquare
    }
    else
    {
        return doPower
    }
}

let a=doMath(1)
let p=a(15)
console.log("The Square of ${p} is:-",p)

let b=doMath(2)
let d=b(3,3)
console.log("The Cube of ${a} is power of${b} :-",d)