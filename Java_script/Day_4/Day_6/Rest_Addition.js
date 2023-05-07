function add(...num)
{
    // let sum=0

    // for(x=0;x<num.length;x++)
    // {
    //     sum=sum+num[x]
    // }
let sum=0
    for(n of num)
    {
        sum=sum +n
    }

    console.log("Sum is sum",sum)
}

add(12,1,2,2,3)